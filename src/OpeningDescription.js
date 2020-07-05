import React, { useEffect, useState } from 'react';
import { useTrail, animated } from 'react-spring';


function OpeningDescription(props) {
    const [start, setStart] = useState(0)
    const reasons = ['no mouse', 'faster', 'stay in dev flow', 'easy', 'yes it can still be used in vscode...']
    const config = { mass: 50, tension: 500, friction: 100, clamp: true}

    useEffect (()=> {
        setStart(true)
    }, [])
    
    let trail = useTrail(reasons.length, {
        delay: 3000,  
        from: {
          backgroundColor: "#f1f1f1",
          opacity: 0,
          transform: "translate3d(0px, -80px, 0)"
        },  
        to: {
          backgroundColor: "black", 
          opacity: 1,
          transform: "translate3d( 0, 0, 0)"
        },  
        config: { mass:3,  tension: 300, friction: 40, clamp: false }
      });

      const values = trail.map((props, index) => {
        return(
          <animated.div key={index} style={props} className='box'>
            <p className='reasons'>Why use vim: {reasons[index]}</p>
             <br />
          </animated.div>
        );
      });

    return (
        <div>
            {start ? values : 'no bueno'}
        </div>
    );
}

export default OpeningDescription;