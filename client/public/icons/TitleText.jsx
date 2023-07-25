import Image from 'next/image';
import TitleMobileSVG from '../TitleMobile.svg';
import TitleDesktopSVG from '../TitleDesktop.svg';

const TitleText = ({ isMobile = true }) => {
  return (
    <div>
      {isMobile ? (
        <div>
          <Image src={TitleMobileSVG} width={102} height={32} alt='ترخینه' />
        </div>
      ) : (
        <div>
          <Image src={TitleDesktopSVG} width={155} height={51} alt='ترخینه' />
        </div>
      )}
    </div>
  );
};

export default TitleText;
