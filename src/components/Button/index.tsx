import { JSX, MouseEventHandler, ReactNode } from "react";


/**
 * global button component for a consistent design across pages
 * @param {ButtonProps} props - props to be passed to the component
 * @param {ReactNode} [props.children] - content to be displayed within the button
 * @param {MouseEventHandler<HTMLButtonElement>} [props.onClick] - onClick action for the button
 * @param {string} [props.className] - className extension for customization (defaults to none)
 * @param {boolean} [props.disabled] - set to true if button is to be disabled (defaults to false)
 * 
 * 
 * @returns {JSX.Element} - The component to be rendered
 * 
 * @author Diljith P D
 */
const Button = ({
    children,
    onClick = undefined,
    className = "",
    disabled = false,
}: ButtonProps): JSX.Element => {
    return (
        <button onClick={onClick} className={`relative flex items-center justify-center py-[7px] px-[48px] bg-primary ${className}`} disabled={disabled}>
            <div>
                {children}
            </div>
            <span className="absolute right-[12px] top-[calc(50%-8px)] h-[16px] w-[16px] flex items-center justify-center">
                &rarr;
            </span>
        </button>
    )
}

export default Button;

export interface ButtonProps {
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    className?: string,
    disabled?: boolean,
}