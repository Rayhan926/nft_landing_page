import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
function Footer() {
    return (
        <footer className="pt-14" >
            <div className="container">
                <div className="flex flex-col md:flex-row gap-y-16 md:justify-between">
                    <div className="shrink-0" >
                        <div className="w-[150px] md:w-[200px]" >
                            <Image src="/img/logo.png" width={225} height={36} />
                        </div>
                        <p className="text-white/40 my-4" >Exclusive NFT Collection</p>
                        <ul className="flex items-center gap-5 mt-6 text-white/50" >
                            <li>
                                <a href="#" className="hover:text-white duration-150">
                                    <BsFacebook size={22} />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white duration-150">
                                    <BsTwitter size={22} />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white duration-150">
                                    <BsInstagram size={22} />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white duration-150">
                                    <FaTiktok size={22} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16" >
                        <div>
                            <h6 className="text-base font-semibold text-white/40 uppercase" >About</h6>
                            <ul className="text-white/30 mt-5 space-y-1.5" >
                                <li>
                                    <a href="#" className="hover:text-white/70 duration-150">About</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white/70 duration-150">Term</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white/70 duration-150">Legal</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-base font-semibold text-white/40 uppercase" >NFT</h6>
                            <ul className="text-white/30 mt-5 space-y-1.5" >
                                <li>
                                    <a href="#" className="hover:text-white/70 duration-150">OpenSea</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white/70 duration-150">Maker</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white/70 duration-150">Learn</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-base font-semibold text-white/40 uppercase" >Contact</h6>
                            <ul className="text-white/30 mt-5 space-y-1.5" >
                                <li>
                                    <a href="#" className="hover:text-white/70 duration-150">Press</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white/70 duration-150">Support</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-base font-semibold text-white/40 uppercase" >Social</h6>
                            <ul className="text-white/30 mt-5 space-y-1.5" >
                                <li>
                                    <a href="#" className="hover:text-white/70 duration-150">Twitter</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white/70 duration-150">Instagram</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom --Start-- */}
            <div className="text-center py-4 md:py-6 mt-10 border-t border-white/10 text-white/40 text-sm" >
                © Copyright 2022 NFTlanding
            </div>
            {/* Footer Bottom --End-- */}
        </footer>
    )
}

export default Footer
