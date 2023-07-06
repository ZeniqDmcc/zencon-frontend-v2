import PropTypes from 'prop-types';
import Heading from "../../Atoms/Headings/Heading";
import HeadingH1 from "../../Atoms/Headings/HeadingH1";
import Paragraph from "../../Atoms/Paragraph/Paragraph";

const ContentM1Style = "flex flex-col 2xl:w-[70%] xl:w-[85%] lg:w-[95%] items-center gap-6 1024px:gap-3 640px:gap-3"

function BannerContent({ labelText, headingText, paragraphText }) {
  return (
    <div className={ContentM1Style}>
        <Heading level="3">{labelText}</Heading>
        <Heading level="1">{headingText}</Heading>
        <Paragraph text={paragraphText} />
    </div>
  )
}

BannerContent.propTypes = {
  labelText: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired,
};

export default BannerContent