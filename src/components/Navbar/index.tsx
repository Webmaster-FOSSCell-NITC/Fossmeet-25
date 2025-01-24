import { lato } from '@/fonts';
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="z-[1000] h-16 px-4 w-full border-b-[1px] fixed top-0 left-0 flex items-center justify-between bg-white">
            <div className='flex items-center gap-2'>
                <Image src="/navbar/logo.svg" alt="navbar-logo" height={25} width={25} />
                <h2 className={`text-2xl font-bold ${lato.className}`} > FOSSMeet&apos;25 </h2>
            </div>
        </nav>
    )
}

export default Navbar;