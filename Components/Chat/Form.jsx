import React, { useEffect, useState } from 'react';
import { BiMenu } from "react-icons/bi";
import { MdSend } from 'react-icons/md';
import { AiFillAudio, AiFillPicture } from 'react-icons/ai';
import { Chat } from './Chat'; 

const Form = ({ close, proMember, address, freeTrail }) => {
  const [input, setInput] = useState('');


  const handleSubmit = async (prompt) => {
    try {
      const response = await fetch('http://localhost:4000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      console.log("API Response:", data.bot);
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return; 

    await handleSubmit(input); 
    setInput(''); 
    close && close(e); 
  };

  useEffect(() => {
    console.log("Input changed:", input);
  }, [input]);

  return (
    <form id="form_input_data" className="msger-inputarea" onSubmit={handleFormSubmit}>
      {proMember?.addressUser === address && (
        <>
          <button
            className="navbar-toggler d-lg-none d-block msger-send-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainnavbarNav"
            aria-controls="mainnavbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <BiMenu className="icon-size" />
          </button>
          <input
            type="text"
            name="prompt"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="msger-input"
            placeholder="Ask any question here.."
          />
          <a href="#" className="mic-icon" style={{ display: 'flex', gap: '20px', margin: '0 30px' }}>
            <AiFillPicture className="scan-size" />
          </a>
          <a href="#" className="mic-icon">
            <AiFillAudio className="icon-size" />
          </a>
          <button className="msger-send-btn" type="submit">
            <MdSend className="icon_size" />
          </button>
        </>
      )}
      {freeTrail <= 4 && (
        <>
          <input
            type="text"
            name="prompt"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="msger-input"
            placeholder="Ask any question here.."
          />
          <button className="msger-send-btn" type="submit">
            <MdSend className="icon_size" />
          </button>
        </>
      )}
    </form>
  );
};

export default Form;
