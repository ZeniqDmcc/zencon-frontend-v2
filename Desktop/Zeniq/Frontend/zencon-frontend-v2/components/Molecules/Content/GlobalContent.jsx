import PropTypes from "prop-types";
import Anchor from "../../Atoms/Anchor/Anchor";
import Heading from "../../Atoms/Headings/Heading";
import Paragraph from "../../Atoms/Paragraph/Paragraph";

function GlobalContent({ GlobalContentHeading, Paragraph1, Paragraph2, href, text }) {
  return (
    <div className="flex flex-col gap-6 1024px:gap-3 767px:gap-[15px]">
      <Heading level="2">{GlobalContentHeading}</Heading>
      <Paragraph text={Paragraph1} />
      <Paragraph text={Paragraph2} />
      <Anchor href={href} text={text} />
    </div>
  )
}

GlobalContent.propTypes = {
  GlobalContentHeading: PropTypes.string,
  Paragraph1: PropTypes.string,
  Paragraph2: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
};

export default GlobalContent;
