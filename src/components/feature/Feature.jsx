import React from 'react';
import "./Feature.css";

 const Feature = ({title , content}) => {
  return (
    <div className='gpt3__feature-container '>
      <div className='gpt3__feature-title'>
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='gpt3__feature-content'>
        <p>{content}</p>
      </div>
    </div>
  )
}
//  const Feature1 = ({title , content}) => {
//   return (
//     <div className='gpt3__feature-container '>
//       <div className='gpt3__feature-title'>
//         <div/>
//         <h1>{title}</h1>
//       </div>
//       <div className='gpt3__feature-content'>
//         <p>{content}</p>
//       </div>
//     </div>
//   )
// }
// const FeatureSet = { Feature, Feature1 };
export default Feature;