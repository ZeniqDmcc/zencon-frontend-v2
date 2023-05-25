import PropTypes from 'prop-types';

function GreenButton({ href, text }) {
  return (
    <a className="font-Hanson text-[16px] leading-[16.16px] text-center w-[240px] h-[52px] text-[#121212] border-2 flex justify-center items-center border-[#87FF4F] bg-[#87FF4F] hover:bg-[#fff] hover:border-[#fff] hover:cursor-pointer" href={href}>{text}</a>
  )
}

GreenButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default GreenButton


