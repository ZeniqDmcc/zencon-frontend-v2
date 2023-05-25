import Image from 'next/image';
import rio023 from "../../assets/Assets_home/rio023.svg"
import BannerLabel from '../Atoms/Label/BannerLabel';

function Rio023() {
  return (
    <div className="container px-10 mx-auto">
        <div className='rio023  flex flex-col justify-start mx-0 gap-[36px] py-40 bg-no-repeat pl-28'>
            <div>
                <Image src={rio023} alt="ZENCON 023" />
            </div>
            <div className='max-w-[667px]'>
                <BannerLabel text="Fairmont Rio de Janeiro Copacabana Rio de Janeiro, Brazil" />
            </div>
        </div>
    </div>
  )
}

export default Rio023

