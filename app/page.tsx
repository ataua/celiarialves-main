'use client'

import 'dotenv/config'
import Celia from "@public/celia2.png"
import Image from "next/image";
import Link from "next/link";
import Card from "@components/Card";
import { WindSong, Goudy_Bookletter_1911 } from "next/font/google";
import Social from "@components/Social";
import ContactForm from '@components/ContactForm';

const windS = WindSong( { subsets: [ "latin" ], weight: "400" } );
const goudy = Goudy_Bookletter_1911( { subsets: [ "latin" ], weight: "400" } );

export default function Home () {

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
            <p>Sou atriz, produtora, professora e terapeuta. Ao longo de cerca de trinta anos de atividade artística e terapêutica, desenvolvi um método eficaz de preparo para psicólogas se comunicarem melhor com seu público, seja ao vivo (presencialmente) ou através de uma câmera.</p>
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
              <p>Destrave seu potencial para falar em público ou para a câmera.</p>
              <Link
                href="/mentorias"
                className='btn ok m-auto mb-0'
              >Saiba mais</Link>
            </Card>
            {/* <Card>
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
            </Card> */}
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
              <p>Conheça essa especialidade e desenvolva seu potencial criativo.</p>
              <Link
                href="/teatro-terapeutico"
                className='btn ok m-auto mb-0'
              >Saiba mais</Link>
            </Card>
          </div>
        </div>
      </section>

      <Social />

      <ContactForm />

    </ >
  );
}
