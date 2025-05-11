import Image from "next/image"

function CardReview({ msg, image }) {

    console.log({image});

    return (
        <div className="flex items-center justify-between shadow md:gap-20 gap-2 h-36 md:h-[400px]">
            
            <div className="flex items-center justify-center w-[50%] relative h-full">
                <Image src={image} alt={msg} width={500} height={500}/>
            </div>
            <div className="flex flex-col gap-2 pr-7 md:items-left md:justify-center md:w-[50%]">
                <p className="font-main text-2xl md:text-5xl lg:text-7xl">&quot;{msg}&quot;</p>
                <Image src="/yellow5star.png" width={250} height={250} alt="5 Stars"/>
            </div>
        </div>
    )
}

export default CardReview;