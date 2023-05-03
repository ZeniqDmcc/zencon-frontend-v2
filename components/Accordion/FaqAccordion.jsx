"use client"
import { useState } from 'react';

const FaqAccordion = ({ title, content, social_media, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-[#A1E285] border-2 my-4 rounded">
      <button onClick={toggleAccordion}>
        <h3 className="text-[#fff] text-left font-bold text-lg tracking-wide px-3 py-3">{title}</h3>
      </button>
      {
        isOpen &&
        <div className="text-[#fff] tracking-wide text-[17px]">
          <p className='py-2 px-3 pt-0'>{content}</p>

          {social_media && social_media.length > 0 && (
            <ul className='list-disc pl-8 pb-2'>
              {social_media && social_media.map((item, index) => (
                <li key={index}>
                  {item.platform}: <a href={item.url}>{item.url}</a>
                </li>
              ))}
            </ul>
          )}

          {list && list.length > 0 && (
            <ul className='list-disc pl-8 pb-3'>
              {list && list.map((item, index) => (
                <li key={index}>
                  {item.item}
                </li>
              ))}
            </ul>
          )

          }
        </div>}
    </div>
  );
};

export default FaqAccordion;
