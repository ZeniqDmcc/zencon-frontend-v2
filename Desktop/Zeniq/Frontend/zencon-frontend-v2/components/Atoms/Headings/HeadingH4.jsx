import PropTypes from "prop-types";

function HeadingH4({ text }) {
  return (
    <h4 className="font-HeronSans sm:text-left text-center text-[#87FF4F] text-[20px] font-[500]">
      {text}
    </h4>
  );
}

HeadingH4.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadingH4;
