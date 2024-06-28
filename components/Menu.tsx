import Image from "next/image"
import Link from "next/link"
// import Logo from "@public/logo.svg";
import Logo from "@public/c.png";

const Menu = () => {
    return (
        <nav className='w-full sticky top-0 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 drop-shadow-sm z-50'>
            <div className="m-auto max-w-[900px] justify-center flex pr-2">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="logo"
                        width={100}
                        className="drop-shadow-sm rounded-full"
                        priority
                    />
                </Link>

                <Link
                    href="/mentoria"
                    className='ml-auto grid place-content-center text-white font-bold'
                >Mentoria</Link>
                {/* 
                <Link
                    href="/blog"
                    className='ml-auto grid place-content-center text-white font-bold'
                >Blog</Link>
                 */}
                <Link
                    href="/#contato"
                    className='ml-auto grid place-content-center text-white font-bold'
                >Contato</Link>
            </div>
        </nav>
    )
}
export default Menu