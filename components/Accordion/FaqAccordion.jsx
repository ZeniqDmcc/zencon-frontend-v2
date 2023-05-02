"use client"
import { useState } from 'react';

const FaqAccordion = ({ title, content, social_media, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-[#A1E285] border-2 p-2 my-4 rounded">
      <button onClick={toggleAccordion}>
        <h3 className="text-[#fff] font-bold text-lg tracking-wide pl-4 pt-4">{title}</h3>
      </button>
      {
        isOpen && 
          <div className="text-[#fff] pt-2 tracking-wide text-[17px]">
              <p className='p-4'>{content}</p>
              <ul className='list-disc pl-4'>
                {social_media && social_media.map((item, index) => (
                  <li key={index}>
                    {item.platform}: <a href={item.url}>{item.url}</a>
                  </li>
                ))}
              </ul>

              <ul className='list-disc pl-4'>
                {list && list.map((item, index) => (
                  <li key={index}>
                    {item.item}
                  </li>
                ))}
              </ul>
          </div>}
    </div>
  );
};

export default FaqAccordion;
