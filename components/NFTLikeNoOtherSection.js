import Image from "next/image";
import Button from "./Button";

function NFTLikeNoOtherSection() {
    return (
        <section className="mt-10" >
            <div className="container">
                <div className="grid md:grid-cols-[auto,500px] gap-10 place-items-center">
                    <div>
                        <p className="text-pink-500 font-semibold uppercase mb-4">Launching soon</p>
                        <h2 className="heading_lg text-[40px] md:text-[60px]">An NFT like no other</h2>
                        <p className="text-gray-eee md:w-[80%] mt-4 mb-8">
                            Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live.
                        </p>
                        <Button>Read More</Button>
                    </div>
                    <div>
                        <div>
                            <Image src="/img/mystiquepng.png" width={2500} height={3000} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NFTLikeNoOtherSection
