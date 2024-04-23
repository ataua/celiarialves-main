import Image from "next/image";

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <section id='sobre' className="h-96 w-full bg-pink-950 p-4 text-white">
        <h1>Célia Ribeiro Alves</h1>
        <p>Cursos, mentorias e projetos pessoais</p>
        <p>visando auto-conhecimento e auto-realização.</p>
        <p>Célia Ribeiro Alves é atriz, produtora, professora e terapeuta.</p>
      </section>

      <section id='mentoria' className="h-96 w-full bg-blue-950 p-4 text-white">
        <h1>Mentoria</h1>
      </section>

      <section id='contato' className="h-96 w-full bg-yellow-900 p-4 text-white">
        <h1>Contato</h1>
        <form className='flex flex-col gap-2' action="#">
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensagem" />
        </form>
      </section>

    </main>
  );
}
