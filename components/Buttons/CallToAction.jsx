import Link from "next/link";

export default function CallToAction({text, disabled, classes, link, newTab, query, onClick, active}) {
    return (
        newTab ?
            <a target="_blank" href={link} rel={'noreferrer'}>
                <button
                    onClick={onClick}
                    disabled={disabled}
                    className={`capitalize hover:bg-[#f4a12f] ${active ? "route-active-button" : "bg-purple-900"} transition-colors disabled:bg-black px-6 
                  text-white py-2 rounded-md text-uppercase text-sm font-medium font-primary sm:w-auto ${classes}`}
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
                    className={`capitalize hover:bg-[#f4a12f] ${active ? "bg-purple-700" : "bg-purple-900"} transition-colors disabled:bg-black px-6 
                  text-white py-2 rounded-md text-uppercase text-sm font-medium font-primary sm:w-auto ${classes}`}
                >
                    {text}
                </button>
            </Link>
    );
}
