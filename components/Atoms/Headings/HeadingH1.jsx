import PropTypes from 'prop-types';

const HeadingH1Style = "font-Hanson text-[#87FF4F] text-4xl uppercase font-bold leading-[40px] w-[950px]"

function HeadingH1({ text }) {
  return (
      <h1 className={ HeadingH1Style }>{ text }</h1>
  )
}

HeadingH1.propTypes = {
    text: PropTypes.string.isRequired
};

export default HeadingH1