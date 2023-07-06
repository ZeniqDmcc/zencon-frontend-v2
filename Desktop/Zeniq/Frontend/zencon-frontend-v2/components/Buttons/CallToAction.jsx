import Link from "next/link";

export default function CallToAction({text, disabled, classes, link, newTab, query, onClick, active}) {

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
                    className={`capitalize 1170px:max-w-[180px] 1170px:h-[40px] 1024px:text-[18px] items-center mx-auto flex justify-center hover:text-[#000000] hover:bg-white transition-colors disabled:bg-black 
                  text-white  font-HeroSansRegular font-[400] px-6 laptop:px-2  lg:py-[8px] text-uppercase text-sm lg:text-[18px] laptop:text-xs border-[2px] border-opacity-18 border-[#fff]  sm:w-auto ${classes}`}
                >
                    {text}
                </button>
            </Link>
    );
}
