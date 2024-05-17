'use client'

import 'dotenv/config'
import { FormEvent } from "react";
import Celia from "@public/celia2.png"
import Image from "next/image";
import Link from "next/link";
import Card from "@components/Card";
import { WindSong, Goudy_Bookletter_1911 } from "next/font/google";
import Social from "@components/Social";

const windS = WindSong( { subsets: [ "latin" ], weight: "400" } );
const goudy = Goudy_Bookletter_1911( { subsets: [ "latin" ], weight: "400" } );

export default function Home () {
  const sendContactMessage = ( ev: FormEvent<HTMLFormElement> ) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const formData = new FormData( form );
    const data = Object.fromEntries( formData );
    const res = fetch( "/api/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( data ),
    } )
    // TODO: enviar a mensagem para o back-end
    // limpar o formulário
    form.reset();
    console.log( "Mensagem enviada!", data );
  }

  return (
    <>
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
            <h1 className={ `mb-10 text-center w-full ${ windS.className } leading-none` }>Célia Ribeiro</h1>
            <h2 className={ `max-w-[550px] mx-auto text-[2rem] leading-10 mb-6 ${ goudy.className }` }>Eu ajudo pessoas a se comunicarem usando o corpo e a voz</h2>
            <p className="leading-6 mb-[1rem]">Sou atriz, produtora, professora e terapeuta. Ao longo de cerca de trinta anos de atividade artística e terapêutica, desenvolvi um método eficaz de preparo para atores e não atores se comunicarem melhor com seu público, seja ao vivo (presencialmente) ou através de uma câmera.</p>
            <p>Saiba um pouco mais da minha história clicando em
              <Link
                href="/bio"
                className='btn ok ml-2'
              >bio</Link>
            </p>

          </aside>
        </div>
      </section >

      <section id='servicos' className="min-h-96 w-full px-4 py-16">
        <div className="m-auto max-w-[1080px] h-auto">
          <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-4'>
            <Card>
              <h2 className='w-full text-center pb-2'>Mentorias</h2>
              <p>Conteúdo de Mentorias</p>
              <Link
                href="/mentorias"
                className='btn ok m-auto mb-0'
              >Saiba mais</Link>
            </Card>
            <Card>
              <h2 className='w-full text-center pb-2'>Palestras</h2>
              <p>Conteúdo de Palestras</p>
              <Link
                href="/palestras"
                className='btn ok m-auto mb-0'
              >Saiba mais</Link>
            </Card>
            <Card>
              <h2 className='w-full text-center pb-2'>Cursos</h2>
              <p>Conteúdo de Cursos</p>
              <Link
                href="/cursos"
                className='btn ok m-auto mb-0'
              >Saiba mais</Link>
            </Card>
            <Card>
              <h2 className='w-full text-center pb-2'>Atendimento terapêutico</h2>
              <p>Sessões de terapia individual, presencial (em Curitiba) ou online.</p>
              <Link
                href="/atendimento"
                className='btn ok m-auto mb-0'
              >Saiba mais</Link>
            </Card>
            <Card>
              <h2 className='w-full text-center pb-2'>Teatro terapêutico</h2>
              <p>Conheça essa especialidade e destrave seu potencial criativo.</p>
              <Link
                href="/teatro-terapeutico"
                className='btn ok m-auto mb-0'
              >Saiba mais</Link>
            </Card>
          </div>
        </div>
      </section>

      <Social />

      <section id='contato' className="h-96 w-full px-4 py-16">
        <div className="m-auto max-w-[1080px]">
          <h2 className="pb-4">Contato</h2>
          <form
            data-netlify={ true }
            name='main-contact-form'
            className='flex flex-col gap-4'
            method='POST'
            onSubmit={ ( ev ) => sendContactMessage( ev ) }
          >
            <input name="name" type="text" placeholder="Nome" className="text-yellow-900 rounded-md" />
            <input name="email" type="email" placeholder="Email" className="text-yellow-900 rounded-md" />
            <textarea name="message" placeholder="Mensagem" className="text-yellow-900 rounded-md" />
            <button type="submit" className='btn ok ml-auto' >Enviar</button>
          </form>
        </div>
      </section>
    </ >
  );
}
