import { MouseEventHandler } from "react"

const NextArrow = ({
    onClick
}: {
    onClick?: MouseEventHandler<HTMLButtonElement>
}) => {
    return (
        <button onClick={onClick} className="z-[2] bg-secondary absolute top-[50%] translate-y-[-50%] right-0 w-[50px] h-[50px] p-[7px] flex items-center justify-center hidden md:flex">
            <img src="/carousel/right-arrow.svg" alt="left-arrow" height={25} width={25} />
        </button>
    )
}

export default NextArrow