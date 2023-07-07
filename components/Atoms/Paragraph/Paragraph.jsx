import PropTypes from 'prop-types';

function Paragraph({ text }) {
  return (
    <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] font-light max-w-[1036px]">{ text }</p>
  )
}

Paragraph.propTypes = {
  texy: PropTypes.string.isRequired
};

export default Paragraph