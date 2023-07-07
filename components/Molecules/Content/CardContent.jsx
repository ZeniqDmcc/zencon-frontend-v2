import HeadingH3 from "../../Atoms/Headings/HeadingH3"
import CardParagraph from "../../Atoms/Paragraph/CardParagraph";
import PropTypes from 'prop-types'
import Image from "next/image";

function CardContent({ HeadingText, ParagraphText, ImageSrc, ImageAlt }) {
  return (
    <div className="flex flex-col gap-4 p-8 bg-white bg-opacity-25 border-2 border-green-400 border-solid rounded-lg backdrop-filter backdrop-blur-sm xl:gap-8 2xl:p-16 xl:p-12 lg:p-8">
        <Image src={ImageSrc} alt={ImageAlt} width={80} height={80} />
        <HeadingH3 text={ HeadingText } />
        <CardParagraph text={ ParagraphText } />
    </div>
  )
}

CardContent.propTypes = {
  ImageSrc: PropTypes.string.isRequired,
  ImageAlt: PropTypes.string.isRequired,
  HeadingText: PropTypes.string.isRequired,
  ParagraphText: PropTypes.string.isRequired,
};

export default CardContent