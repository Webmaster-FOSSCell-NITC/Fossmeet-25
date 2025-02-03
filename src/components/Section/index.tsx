import { ReactNode, RefObject } from "react";

/**
 * Wraps around each section of a page to provide an even padding and styling
 * 
 * @param {SectionProps} props - The props for the Section component
 * @param {ReactNode} [props.children] - Contents of the section
 * @param {string} [props.id] - Optional attribute to enable scrollTo(component) (default: undefined)
 * @param {string} [props.className] - optional expansion to expand with custom styling
 * @param {boolean} [props.borderTop] - Optional attirbute to add top border to the section (default: false)
 */
const Section = ({
    children,
    id = undefined,
    className = "",
    borderTop = false,
    ref = undefined,
}: SectionProps) => {
    return (
        <section id={id} className={`relative w-full px-4 md:px-16 flex justify-center ${borderTop ? 'border border-secondary/25 border-0 border-t-[1px]' : ''}`}>
            <div className={`w-full max-w-[1920px] ${className}`}>
                {children}
            </div>
        </section>
    )
}

export default Section;
export interface SectionProps {
    children: ReactNode,
    id?: string,
    className?: string,
    borderTop?: boolean
    ref?: RefObject<HTMLElement | null>
}