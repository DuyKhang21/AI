import React from 'react';
import "./Feature1.css";

 const Feature1 = ({title , content}) => {
  return (
    <div className='gpt3__feature-container1 '>
      <div className='gpt3__feature-title1'>
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='gpt3__feature-content1'>
        <p>{content}</p>
      </div>
    </div>
  )
}
export default Feature1;