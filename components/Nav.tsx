import Image from "next/image"
import Link from "next/link"
import Logo from "@public/vercel.svg";

const Nav = () => {
    return (
        <nav className='w-full flex p-2 bg-slate-100 sticky top-0'>
            <Link href="/">
                <Image
                    src={ Logo }
                    alt="logo"
                    width={ 100 }
                />
            </Link>
            <Link href="/#mentoria" className='ml-auto'>Mentoria</Link>
            <Link href="/blog" className='ml-auto'>Blog</Link>
            <Link href="/#contato" className='ml-auto'>Contato</Link>
        </nav>
    )
}
export default Nav