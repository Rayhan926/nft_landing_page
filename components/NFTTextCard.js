import { HiArrowRight } from "react-icons/hi";
import LinkWithIcon from "./LinkWithIcon";

function NFTTextCard() {
    return (
        <div className="rounded-xl overflow-hidden bg-white/30 px-5 py-10 md:px-16 md:py-14 space-y-6" >
            <img src="/img/eth.svg" width={60} alt="ETH" />
            <h3 className="heading_md">Text</h3>
            <p className="text-gray-eee leading-[1.6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sollicitudin tellus, sit amet venenatis ante. Curabitur id fermentum est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sollicitudin tellus, sit amet venenatis ante. Curabitur id fermentum est.</p>
            <LinkWithIcon text=" Read Whitepaper" icon={<HiArrowRight size={16} />} href="#" />
        </div>
    )
}

export default NFTTextCard
