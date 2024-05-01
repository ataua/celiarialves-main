'use client'

import { FormEvent } from "react";
import Celia from "@public/celia_nobg.png"
import Image from "next/image";
import Link from "next/link";
import Card from "@components/Card";

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
    <main className="flex min-h-screen flex-col items-center justify-between text-yellow-600">

      <section id='sobre' className="min-h-96 w-full bg-pink-50 px-4">
        <h1 className="py-16 text-center w-full bg-pink-50">Célia Ribeiro Alves</h1>
        <div className="max-w-[1080px] flex m-auto gap-10">
          <Image
            src={ Celia }
            alt="celia"
            className='hidden sm:inline mix-blend-multiply !max-w-full'
            height={ 300 }
          />
          <aside className='flex flex-col justify-center'>
            <p className="">Cursos, mentorias e projetos pessoais</p>
            <p className="">visando auto-conhecimento e auto-realização.</p>
            <p className="">Célia Ribeiro Alves é atriz, produtora, professora e terapeuta.</p>
            <Link
              href="/#sobre"
              className='btn mr-auto mt-4 primary'
            >Saiba mais</Link>

          </aside>
        </div>
      </section >

      <section id='atendimento' className="min-h-96 w-full bg-green-50 px-4 py-16">
        <div className="m-auto max-w-[1080px] h-auto">
          <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-4'>
            <Card>
              <h2 className='w-full text-center pb-2'>Mentorias</h2>
              <p>Conteúdo de Mentorias</p>
            </Card>
            <Card>
              <h2 className='w-full text-center pb-2'>Palestras</h2>
              <p>Conteúdo de Palestras</p>
            </Card>
            <Card>
              <h2 className='w-full text-center pb-2'>Cursos</h2>
              <p>Conteúdo de Cursos</p>
            </Card>
            <Card>
              <h2 className='w-full text-center pb-2'>Atendimento</h2>
              <p>Conteúdo de Atendimento</p>
            </Card>
          </div>
        </div>
      </section>

      <section id='contato' className="h-96 w-full bg-yellow-50 px-4 py-16">
        <div className="m-auto max-w-[1080px]">
          <h2 className="pb-4">Contato</h2>
          <form
            data-netlify={ true }
            name='main-contact-form'
            className='flex flex-col gap-2'
            method='POST'
            onSubmit={ ( ev ) => sendContactMessage( ev ) }
          >
            <input name="name" type="text" placeholder="Nome" className="text-yellow-900 rounded-md border-2 border-cyan-100" />
            <input name="email" type="email" placeholder="Email" className="text-yellow-900 rounded-md border-2 border-cyan-100" />
            <textarea name="message" placeholder="Mensagem" className="text-yellow-900 rounded-md border-2 border-cyan-100" />
            <button type="submit" className='px-4 py-2 ml-auto rounded-full bg-cyan-100 hover:bg-cyan-200 border-2 border-cyan-100' >Enviar</button>
          </form>
        </div>
      </section>

    </main >
  );
}
