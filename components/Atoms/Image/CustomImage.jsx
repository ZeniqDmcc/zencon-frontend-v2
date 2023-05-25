import Image from 'next/image';
import PropTypes from 'prop-types';

function CustomImage({ src, alt }) {
  return (
    <Image src={src} alt={alt} />
  )
}

CustomImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CustomImage;
