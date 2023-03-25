import React from 'react';
import "./Header.css";
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header = () => {
  return (
    <div className='gpt3__header section_padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing  with GPT-3 OpenAI</h1>
        <p>"ChatGPT is a remarkable example of how natural language processing can enable human-like interactions between machines and people." - Oren Etzioni, CEO of the Allen Institute for Artificial Intelligence (AI2)</p>
      

        <div className='gpt3__header-content__input'>
         <input type="email" placeholder='Your Email Address' />
         <button type='button'>Get Start</button>
        </div>

        <div className='gpt3__header-content__people'>
         <img src={people} alt="people"/>
         <p>1.600 people requested access a visit in last 24 hours</p>
        </div>
      

      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="ai"/>
      </div>

    </div>
  )
}

export default Header