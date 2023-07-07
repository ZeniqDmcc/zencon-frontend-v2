import Paragraph from "../../Atoms/Paragraph/Paragraph";
import PropTypes from "prop-types";
import HeadingH2 from "../../Atoms/Headings/HeadingH2";

function GlobalContent({ GlobalContentHeading, Paragraph1, Paragraph2 }) {
  return (
    <div className="flex flex-col lg:flex-1 lg:gap-12">
      <HeadingH2 text={GlobalContentHeading} />
      <Paragraph text={Paragraph1} />
      <Paragraph text={Paragraph2} />
    </div>
  )
}

GlobalContent.propTypes = {
  GlobalContentHeading: PropTypes.string.isRequired,
  Paragraph1: PropTypes.string.isRequired,
  Paragraph2: PropTypes.string.isRequired,
};

export default GlobalContent;
