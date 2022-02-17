function Card({
    imgSrc,
}) {
    return (
        <div className="rounded-xl overflow-hidden bg-gray-111" >
            <div>
                <img src={imgSrc} alt="NFT" />
            </div>
            <div className="space-y-2 p-5 bg-white" >
                <div className="flex items-center justify-between text-xs uppercase">
                    <span className="text-orange-500" >Gloop Series</span>
                    <span className="text-gray-777" >Top bid</span>
                </div>
                <div className="flex items-center justify-between text-[19px] font-semibold text-gray-111">
                    <h3 className="shrink-0" >Purple Man</h3>
                    <div className="flex items-center justify-end gap-2 grow" >
                        <img src="/img/eth.svg" width={15} alt="ETH" />
                        <span>2.99 ETH</span>
                    </div>
                </div>

                <div className="flex items-center justify-between text-base text-gray-777">
                    <span>#12983</span>
                    <span>1 day left</span>
                </div>
            </div>
        </div>
    )
}

export default Card
