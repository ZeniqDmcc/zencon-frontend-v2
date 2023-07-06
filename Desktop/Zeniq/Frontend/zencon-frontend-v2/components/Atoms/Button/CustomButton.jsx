import Link from 'next/link';
import PropTypes from 'prop-types';

const customButtonStyle ="font-Hanson font-normal uppercase text-[16px] leading-[16.16px] text-center w-[240px] h-[52px] text-[#fff] border-2 flex justify-center items-center border-white hover:bg-[#fff] hover:text-[#121212] hover:cursor-pointer 1024px:w-[214px] 1024px:h-[45px] 1024px:text-[14px]"
function CustomButton({ href, text }) {
  
  
  return (
    <Link href={href}>
       <a className={customButtonStyle} href={href}>{text}</a> 
    </Link>
  )
}

// href={href}

CustomButton.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
}

export default CustomButton


