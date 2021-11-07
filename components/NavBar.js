import Link from 'next/link';
import { useState, useEffect } from 'react';

export const NavBar = ({ currentPath }) => {

    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
    const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.scrollY)
            setIsScrollValueMoreThanHeaderHeight(window.scrollY > 30);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    return (
        <>
            <div className={"shadow-md w-full bg-white " + (isScrollValueMoreThanHeaderHeight ? 'fixed py-3' : 'py-6')}>
                <div className="flex items-center justify-between">
                    {/* LOGO */}
                    <div className="flex space-x-2 items-center ">
                        <div className="md:ml-5 ml-2 h-4 w-4 bg-blueaccent"></div>
                        <Link href="/" passHref>
                        <div className="w-72 md:w-full cursor-pointer">
                            <span className="font-extrabold text-2xl tracking-wide">Abhik Ghosh</span>
                            <span className="uppercase font-light text-lg hidden md:inline"> / </span>
                            <span className="uppercase font-light text-lg inline-block md:inline">Data Solution Architect</span>
                        </div>
                        </Link>
                    </div>

                    <div className="mr-5">
                        {/* Nav Links */}
                        <div className="hidden space-x-4 md:flex">
                            <Link href="/" passHref><a className={"uppercase " + (currentPath === '/' ? 'text-blueaccent font-semibold' : '')}>About Me</a></Link>
                            <Link href="/resume" passHref><a className={"uppercase " + (currentPath === '/resume' ? 'text-blueaccent font-semibold' : '')}>Resume</a></Link>
                            <Link href="/projects" passHref><a className={"uppercase " + (currentPath === '/projects' ? 'text-blueaccent font-semibold' : '')}>Projects</a></Link>
                            <Link href="/contact" passHref><a className={"uppercase " + (currentPath === '/contact' ? 'text-blueaccent font-semibold' : '')}>Contact</a></Link>
                        </div>

                        {/* Mobile Link Toggler */}
                        <div className="md:hidden" onClick={() => setDisplayMobileMenu(!displayMobileMenu)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blueaccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                    </div>
                </div>
                {displayMobileMenu &&
                    <div className="flex flex-col mt-10 justify-center items-center">
                        <Link href="/" passHref><a className={"uppercase " + (currentPath === '/' ? 'text-blueaccent font-semibold' : '')}>About Me</a></Link>
                        <Link href="/resume" passHref><a className={"uppercase " + (currentPath === '/resume' ? 'text-blueaccent font-semibold' : '')}>Resume</a></Link>
                        <Link href="/projects" passHref><a className={"uppercase " + (currentPath === '/projects' ? 'text-blueaccent font-semibold' : '')}>Projects</a></Link>
                        <Link href="/contact" passHref><a className={"uppercase " + (currentPath === '/contact' ? 'text-blueaccent font-semibold' : '')}>Contact</a></Link>
                    </div>
                }
            </div>

        </>
    )
}
