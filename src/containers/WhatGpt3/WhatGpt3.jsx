import React from 'react';
import { Feature } from '../../components';
import Feature1 from '../../components/feature/Feature1';
import "./WhatGpt3.css";

const WhatGpt3 = () => {
  return (
    <div className='gpt3__whatgpt3 ' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature1  title = "What is GPT-3" content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possiblities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title = "Chatbots" content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
        <Feature title = "Knowledgebase" content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
        <Feature title = "Education" content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
      </div>
    </div>
  )
}

export default WhatGpt3;