import PropTypes from "prop-types";

function HeadingH5({ text }) {
  return (
    <h5 className="font-HeronSans text-[#87FF4F] text-[18px] capitalize leading-[30px]">
      {text}
    </h5>
  );
}

HeadingH5.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadingH5;
