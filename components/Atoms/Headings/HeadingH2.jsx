import PropTypes from "prop-types";

function HeadingH2({ text }) {
  return (
    <h2 className="font-Hanson text-[#87FF4F] text-[32px] uppercase font-bold leading-[40px]">
      {text}
    </h2>
  );
}

HeadingH2.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadingH2;
