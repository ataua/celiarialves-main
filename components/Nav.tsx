import Image from "next/image"
import Link from "next/link"
import Logo from "@public/logo.svg";

const Nav = () => {
    return (
        <nav className='w-fullbg-slate-100 sticky top-0 bg-blue-200 drop-shadow-sm z-50'>
            <div className="m-auto max-w-[900px] justify-center flex pr-2">
                <Link href="/">
                    <Image
                        src={ Logo }
                        alt="logo"
                        width={ 100 }
                        className="drop-shadow-sm"
                        priority
                    />
                </Link>

                <Link
                    href="/#mentoria"
                    className='ml-auto grid place-content-center'
                >Mentoria</Link>

                <Link
                    href="/blog"
                    className='ml-auto grid place-content-center'
                >Blog</Link>

                <Link
                    href="/#contato"
                    className='ml-auto grid place-content-center'
                >Contato</Link>
            </div>
        </nav>
    )
}
export default Nav