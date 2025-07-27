import Image from "next/image"
import Link from "next/link"
// import Logo from "@public/logo.svg";
import Logo from "@public/mandala1.png";

const Menu = () => {
    return (
        <nav className='w-full md:sticky top-0 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 drop-shadow-sm z-50 font-menu'>
            <div className="m-auto max-w-[900px] justify-center flex flex-col items-center md:flex-row pr-2">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="logo"
                        width={100}
                        className="drop-shadow-sm rounded-full h-auto"
                        priority
                    />
                </Link>

                <Link
                    href="/mentoria"
                    className='md:ml-auto my-4 md:my-0 text-white font-semibold tracking-wide'
                >Mentoria</Link>
                <Link
                    href="/atendimento"
                    className='md:ml-auto my-4 md:my-0 text-white font-semibold tracking-wide'
                >Atendimento</Link>
                <Link
                    href="/palestras"
                    className='md:ml-auto my-4 md:my-0 text-white font-semibold tracking-wide'
                >Palestras</Link>
                {/* 
                <Link
                    href="/blog"
                    className='md:ml-auto my-4 md:my-0 text-white font-semibold tracking-wide'
                >Blog</Link>
                 */}
                <Link
                    href="/#contato"
                    className='md:ml-auto my-4 md:my-0 text-white font-semibold tracking-wide'
                >Contato</Link>
            </div>
        </nav>
    )
}
export default Menu