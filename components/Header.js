import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
function Header() {
    const [showSidebar, setShowSidebar] = useState(false);

    const closeSidebar = (e) => e?.target?.id === 'mobile_sidebar' && setShowSidebar(false);
    const closeSidebarForcely = () => setShowSidebar(false);
    useEffect(() => {
        document.body.style.overflow = showSidebar ? 'hidden' : 'auto';
    }, [showSidebar]);

    return (
        <header className="relative z-50" >
            <div className='container relative py-4 md:py-7 flex justify-between items-center '>
                {/* Logo Start */}
                <div className="w-[150px] md:w-[200px]" >
                    <Link href='/'>
                        <a>
                            <Image src="/img/logo.png" width={225} height={36} />
                        </a>
                    </Link>
                </div>
                {/* Logo End */}
                {/* Nav Start */}
                <div>
                    <div
                        onClick={closeSidebar}
                        id='mobile_sidebar'
                        className={`fixed pointer-events-none top-0 left-0 w-full h-screen mobile_nav_gradient md:mobile_nav_transparent z-50 md:static md:w-auto md:h-auto opacity-0 duration-200 ${showSidebar ? 'opacity-100 pointer-events-auto' : ''
                            } md:opacity-100 md:pointer-events-auto`}
                    >
                        <ul
                            className={`gap-6 font-medium text-[#555] bg-primary-900 pt-5 md:pt-0 w-[80%] md:w-auto md:flex h-full md:h-auto md:bg-transparent -translate-x-full duration-200 ${showSidebar ? 'translate-x-0' : ''
                                } md:translate-x-0`}
                        >
                            <li>
                                <a
                                    onClick={closeSidebarForcely}
                                    href="#"
                                    className='hover:text-white duration-100 px-6 py-2.5 block md:p-1'
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={closeSidebarForcely}
                                    href="#"
                                    className='hover:text-white duration-100 px-6 py-2.5 block md:p-1'
                                >
                                    Farm
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={closeSidebarForcely}
                                    href="#"
                                    className='hover:text-white duration-100 px-6 py-2.5 block md:p-1'
                                >
                                    Mine
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={closeSidebarForcely}
                                    href="#"
                                    className='hover:text-white duration-100 px-6 py-2.5 block md:p-1'
                                >
                                    Lore
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={closeSidebarForcely}
                                    href="#"
                                    className='hover:text-white duration-100 px-6 py-2.5 block md:p-1'
                                >
                                    WhitePaper
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Nav End */}

                    {/* Hamburger Icon --Start-- */}
                    <div
                        className='text-[#999] md:hidden cursor-pointer'
                        onClick={() => setShowSidebar((prev) => !prev)}
                    >
                        {showSidebar ? <IoMdClose size={25} /> : <GiHamburgerMenu size={25} />}
                    </div>
                    {/* Hamburger Icon --End-- */}
                </div>
            </div>
        </header>
    );
}

export default Header;
