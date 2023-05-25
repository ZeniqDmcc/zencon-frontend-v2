import PropTypes from 'prop-types';

function CardParagraph({ text }) {
  return (
    <p className="w-90 leading-1.5 text-center text-justify: justify xl:text-xl md:text-md font-normal">{ text }</p>
  )
}

CardParagraph.propTypes = {
  texy: PropTypes.string.isRequired
};

export default CardParagraph