import Link from "next/link"

const NotFound = () => (
    <section className='min-h-screen max-w-[1080px] m-auto flex flex-col gap-4'>
        <h1 className='w-full text-center py-16 '>Ops...</h1>
        <p>Sinto muito, a página solicitada não existe ou não foi encontrada.</p>
        <p>Clique <Link className="btn ok m-2" href='/'>aqui</Link> para voltar para a página inicial.</p>
    </section>
)
export default NotFound