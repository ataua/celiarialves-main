'use client'

import { FormEvent } from "react";
import Celia from "@public/celia_nobg.png"
import Image from "next/image";
import Link from "next/link";
import Card from "@components/Card";
import { WindSong } from "next/font/google";

const gfont = WindSong( { subsets: [ "latin" ], weight: "400" } );

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
    <main className="flex min-h-screen flex-col items-center justify-between text-yellow-600 from-orange-200 to-red-100 bg-gradient-to-br via-red-50">

      <section id='sobre' className="min-h-96 w-full px-4 mt-8">
        <div className="max-w-[1080px] flex mx-auto my-16 gap-[5rem] items-end">
          <Image
            src={ Celia }
            alt="celia"
            className='hidden md:inline aspect-[initial] grow-0 ml-auto rounded-md -rotate-6'
            style={ { objectFit: "cover", boxShadow: "4px 4px 1px #CB8A04" } }
            // width={ 300 }
            height={ 400 }
            priority
          />
          <aside className='flex flex-col justify-center m-auto'>
            <h1 className={ `pb-14 text-center w-full ${ gfont.className } leading-none` }>Célia Ribeiro</h1>
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

      <section id='atendimento' className="min-h-96 w-full px-4 py-16">
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

      <section id='social'>
        <div className="m-auto max-w-[1080px] h-auto">
          <h2 className="text-center pb-4">Redes sociais</h2>
          <p className="hidden">Social Media Links provided by https://flowbite.com/icons/</p>
          <div className='flex flex-row flex-wrap justify-center gap-4'>

            <Link
              href="https://www.facebook.com/celiaribeiroalves"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className='rounded-full w-[5rem] h-[5rem] bg-white hover:bg-yellow-600 flex items-center justify-center text-yellow-600 hover:text-white'
            >
              <svg className="w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
              </svg>
            </Link>

            <Link
              href="https://www.instagram.com/celiarialves/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className='rounded-full w-[5rem] h-[5rem] bg-white hover:bg-yellow-600 flex items-center justify-center text-yellow-600 hover:text-white'
            >
              <svg className="w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
              </svg>

            </Link>

            <Link
              href="https://www.youtube.com/celiarialves"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
              className='rounded-full w-[5rem] h-[5rem] bg-white hover:bg-yellow-600 flex items-center justify-center text-yellow-600 hover:text-white'
            >
              <svg className="w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd" />
              </svg>

            </Link>

          </div>
        </div>
      </section>

      <section id='contato' className="h-96 w-full px-4 py-16">
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
            <button type="submit" className='btn ok ml-auto' >Enviar</button>
          </form>
        </div>
      </section>

    </main >
  );
}
