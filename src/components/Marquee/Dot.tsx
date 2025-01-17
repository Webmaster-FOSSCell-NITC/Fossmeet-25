import { useMemo } from "react";

const Dot = ({
    fill = "secondary",
    outline = "secondary",
}: {
    fill?: "primary" | "secondary" | "white",
    outline?: "primary" | "secondary" | "white",
}) => {
    const className = useMemo(() => `w-[32px] h-[32px] p-2 rounded-full outline outline-${outline} outline-[1px] bg-${fill}`, [outline, fill]);
    return (
        <span className={className} />
    )
}

export default Dot;