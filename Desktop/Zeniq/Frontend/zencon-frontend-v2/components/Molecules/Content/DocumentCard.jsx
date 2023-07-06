import Image from "next/image";
import PropTypes from 'prop-types';
import CardHeading from "../../Atoms/Headings/CardHeading";
import CardParagraph from "../../Atoms/Paragraph/CardParagraph";

function DocumentCard({ HeadingText, ParagraphText, ImageSrc, ImageAlt }) {
  return (
    <div className="flex flex-col gap-8 1280px:gap-4 lg:px-[24px] lg:py-[38px] px-[16px] py-[28px] text-center 1024px:gap-3 767px:gap-2">
        <Image src={ImageSrc} alt={ImageAlt} width={60} height={60} />
        <CardHeading text={HeadingText} />
        <CardParagraph text={ ParagraphText } />
    </div>
  )
}

DocumentCard.propTypes = {
  ImageSrc: PropTypes.object,
  ImageAlt: PropTypes.string,
  HeadingText: PropTypes.string,
  ParagraphText: PropTypes.string,
};

export default DocumentCard
