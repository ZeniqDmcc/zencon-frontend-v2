import PropTypes from 'prop-types';

function CustomButton({ href, text }) {
  return (
    <a className="font-Hanson text-[16px] leading-[16.16px] text-center w-[240px] h-[52px] text-[#fff] border-2 flex justify-center items-center border-white hover:bg-[#fff] hover:text-[#121212] hover:cursor-pointer" href={href}>{text}</a>
  )
}

CustomButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default CustomButton


