import PropTypes from 'prop-types';

const Heading = ({ level, children }) => {
  const HeadingTag = `h${level}`;

  const getHeadingStyles = (level) => {
    switch (level) {
      case '1':
        return 'font-Hanson text-[#87FF4F] text-4xl uppercase font-normal leading-[40px] max-w-[950px] 1024px:text-3xl 767px:text-2xl 640px:text-lg 640px:leading-[22px] 480px:text-[20px] 480px:leading-6';
      case '2':
        return 'font-Hanson text-[#87FF4F] text-[32px] uppercase font-bold leading-[40px] 1024px:text-2xl 767px:text-xl 640px:text-lg 640px:leading-[22px] 480px:text-[20px] 480px:leading-6';
      case '3':
        return 'font-[500] leading-[40px] font-HeronSans text-[26px] text-[#fff] uppercase tracking-[0.25em] 1024px:text-xl 1024px:tracking-[3px] 480px:text-lg 480px:tracking-[2px]';
      case '4':
        return 'font-HeronSans sm:text-left text-center text-[#87FF4F] text-[20px] font-[500]';
      case '5':
        return 'font-HeronSans group-hover:text-black text-[18px] text-white text-left leading-[30px]';
      case '6':
        return 'text-lg text-brown';
      default:
        return '';
    }
  };

  const headingStyles = getHeadingStyles(level);

  return <HeadingTag className={headingStyles}>{children}</HeadingTag>;
};

Heading.propTypes = {
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  children: PropTypes.string
};

export default Heading;
