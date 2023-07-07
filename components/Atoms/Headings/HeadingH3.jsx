import PropTypes from 'prop-types';

function HeadingH3({ text }) {
  return (
      <h3 className='font-light leading-[30px] font-HeronSans text-[26px] text-[#fff] uppercase tracking-[0.25em]'>{ text }</h3>
  )
}

HeadingH3.propTypes = {
    text: PropTypes.string.isRequired
};

export default HeadingH3