// import React, { useEffect, useRef, useState } from 'react'
// import './Progress.css'



// // import React, { useEffect, useState } from "react";
// // import "./styles.css";

// const Progress = () => {
//     const [counter, setCounter] = useState(0);

   
//     useEffect(() => {
//         const interval = setInterval(() => {
//           setCounter((counter) => counter + 1); 
//         }, 100);
    
//         return () => {
//             if(counter===15){
//                 clearInterval(interval);
//             }
//         };
//       }, []);
    
//     let circularProgress = useRef(null)
//     let progressValue = useRef(null)
//     let [progressStartValue,setProgressStartValue]=useState(0)
//     // let [progressEndValue,setProgressEndValue]=useState(0)
//     // let progressStartValue=0
//     // setProgressEndValue(5000)   
//     let speed=1000

//     let progress=setInterval(()=>{
//         setProgressStartValue((progressStartValue)=>progressStartValue+1)
//         if(progressStartValue==='50000'){
//             clearInterval(progress)
//         }
//     },speed)
//   return (
//     <div className='container'>
//         <div className='circular-progress' ref={circularProgress}>
//             <span 
//             ref={progressValue}
//             className='progress-value'>{counter}</span>
//         </div>
//         <p>a</p>
//     </div>
//   )
// }

// export default Progress

import React from 'react'
import './Progress.css'
import CountUp from "react-countup";


export const Progress1 = () => {
  return (
    <div className='progress'>
    <div className='progress_1'>
        <h3 className='over_text'>Over</h3>
        <div className="circle-wrap">
    <div className="circle">
      <div className="mask full-1">
        <div className="fill-1"></div>
      </div>
      <div className="mask half">
        <div className="fill-1"></div>
      </div>
      
      <div className="inside-circle">
      <CountUp 
      style={{ fontSize:'1rem'}}
      end={50000} duration={10} separator="," />
      </div>
    </div>
  </div>
  <h3>social points analyzed.</h3>
</div>
    <div className='progress_2'>
        <h3 className='over_text'>Over</h3>
    <div className="circle-wrap">
      <div className="circle">
        <div className="mask full-1">
          <div className="fill-1"></div>
        </div>
        <div className="mask half">
          <div className="fill-1"></div>
        </div>
        <div className="inside-circle">
        <CountUp 
        style={{ fontSize:'1rem'}}
        end={1000000} duration={10} separator="," />
        </div>
      </div>
    </div>
    <h3>predictions evaluated.</h3>
    </div>
    
</div>
  )
}

//   export default Progress1 

