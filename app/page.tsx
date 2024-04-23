'use client'

import { FormEvent } from "react";

export default function Home () {
  const sendContactMessage = ( ev: FormEvent<HTMLFormElement> ) => {
    ev.preventDefault();
    // limpar o formulário
    const form = ev.currentTarget;
    const formData = new FormData( form );
    const data = Object.fromEntries( formData );
    form.reset();
    console.log( "Mensagem enviada!", data );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <section id='sobre' className="h-96 w-full bg-pink-950 p-4">
        <h1 className="text-white">Célia Ribeiro Alves</h1>
        <p className="text-white">Cursos, mentorias e projetos pessoais</p>
        <p className="text-white">visando auto-conhecimento e auto-realização.</p>
        <p className="text-white">Célia Ribeiro Alves é atriz, produtora, professora e terapeuta.</p>
      </section>

      <section id='mentoria' className="h-96 w-full bg-blue-950 p-4 text-white">
        <h1 className="text-white">Mentoria</h1>
      </section>

      <section id='contato' className="h-96 w-full bg-yellow-900 p-4">
        <h1 className="text-white">Contato</h1>
        <form
          data-netlify={ true }
          name='main-contact-form'
          className='flex flex-col gap-2'
          method='POST'
          onSubmit={ ( ev ) => sendContactMessage( ev ) }
        >
          <input name="name" type="text" placeholder="Nome" className="text-yellow-900" />
          <input name="email" type="email" placeholder="Email" className="text-yellow-900" />
          <textarea name="message" placeholder="Mensagem" className="text-yellow-900" />
          <button type="submit" className='p-4 ml-auto rounded-md text-white'>Enviar</button>
        </form>
      </section>

    </main>
  );
}
