import Image from "next/image";
import { HiArrowRight } from 'react-icons/hi';
import LinkWithIcon from "./LinkWithIcon";
function AboutWhitePaper() {
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-[35%,65%] gap-y-10 bg-white/20 px-4 py-10 md:px-16 md:py-20 rounded-2xl">
                    <div className="flex flex-col justify-between">
                        <h3 className="heading_md">Text</h3>
                        <p className="text-white my-7" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sollicitudin tellus, sit amet venenatis ante. Curabitur id fermentum est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sollicitudin tellus, sit amet venenatis ante. Curabitur id fermentum est.</p>
                        <LinkWithIcon text=" Read Whitepaper" icon={<HiArrowRight size={16} />} href="#" />
                    </div>

                    <div className="grid gap-y-6 md:grid-cols-2">
                        <div className="scale-[1.15] md:origin-left md:-mt-10 md:translate-x-12 md:w-[300px]" ><Image src="/img/punkpng.png" width={2500} height={3000} /></div>
                        <div className="flex flex-col justify-between relative z-10">
                            <h3 className="heading_md">Text</h3>
                            <p className="text-white my-7" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sollicitudin tellus, sit amet venenatis ante. Curabitur id fermentum est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sollicitudin tellus, sit amet venenatis ante. Curabitur id fermentum est.</p>
                            <LinkWithIcon text=" Read Whitepaper" icon={<HiArrowRight size={16} />} href="#" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutWhitePaper
