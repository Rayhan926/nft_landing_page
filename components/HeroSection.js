import Image from "next/image";
import Button from "./Button";

function HeroSection() {
    return (
        <section className="pt-10 md:pt-0 pb-5 md:pb-0" >
            <div className="container grid grid-cols-1 md:grid-cols-2 place-items-center">

                <div className="md:-mt-20">
                    <HeroSectionLeftBox />
                </div>
                <div className="md:-mt-20" >
                    <div >
                        <Image src="/img/punkpng.png" width={2500} height={3000} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection


export const HeroSectionLeftBox = (params) => {
    return (
        <div>
            <p className="text-pink-500 font-semibold uppercase tracking-widest text-sm" >Launching Soon</p>
            <h1 className="heading_lg mt-6 mb-4">TEXT TEXT</h1>
            <p className="text-[#ccc] text-sm md:text-base md:w-[80%] mb-10" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sollicitudin tellus, sit amet venenatis ante. Curabitur id fermentum est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sollicitudin tellus, sit amet venenatis ante. Curabitur id fermentum est. </p>
            <Button>Read More</Button>
        </div>
    )
}