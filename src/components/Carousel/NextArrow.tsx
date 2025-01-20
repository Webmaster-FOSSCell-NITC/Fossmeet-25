import { MouseEventHandler } from "react"

const NextArrow = ({
    onClick
}: {
    onClick?: MouseEventHandler<HTMLButtonElement>
}) => {
    return (
        <button onClick={onClick} className="bg-secondary absolute top-[calc(50%-25px)] right-0 w-[50px] h-[50px] p-[7px] flex items-center justify-center hidden md:block">
            <img src="/carousel/right-arrow.svg" alt="left-arrow" height={25} width={25} />
        </button>
    )
}

export default NextArrow