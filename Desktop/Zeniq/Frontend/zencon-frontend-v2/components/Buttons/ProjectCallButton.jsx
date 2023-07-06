import Link from "next/link";

export default function ProjectCallButton({text, disabled, classes, link, newTab, query, onClick, active}) {
    return (
        newTab ?
            <a target="_blank" href={link} rel={'noreferrer'}>
                <button
                    onClick={onClick}
                    disabled={disabled}
                    className={`capitalize hover:bg-[#030423] transition-colors disabled:bg-black px-6 
                  text-white py-2 text-uppercase text-sm font-medium  font-HeroSansRegular border-[2px] border-opacity-18 border-[#fff] sm:w-auto ${classes}`}
                >
                    {text}
                </button>
            </a> :
            <Link href={{
                pathname: link,
                query: query
            }} passHref>
                <button 
                    onClick={onClick}
                    disabled={disabled}
                    className={`font-Hanson uppercase font-normal text-[16px] leading-[16.16px] text-center w-[280px] px-3 h-[52px] text-[#121212] border-2 flex justify-center items-center border-[#87FF4F] bg-[#87FF4F] hover:bg-[#fff] hover:border-[#fff] hover:cursor-pointer 1024px:w-[214px] 1024px:h-[45px] 1024px:text-[14px] ${classes}`}
                >
                    {text}
                </button>
            </Link>
    );
}
