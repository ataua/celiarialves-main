import 'dotenv/config'
import Celia from "@public/celia2.png"
import Image from "next/image";
import Link from "next/link";
import Card from "@components/Card";
import { WindSong, Goudy_Bookletter_1911 } from "next/font/google";
import Social from "@components/Social";
import ContactForm from '@components/ContactForm';

// Mantendo as fontes especiais para elementos específicos da home
const windS = WindSong({ subsets: ["latin"], weight: "400" });
const goudy = Goudy_Bookletter_1911({ subsets: ["latin"], weight: "400" });

const services = {
  // alterar conforme páginas forem sendo atualizadas
  bio: false,
  mentoria: true,
  palestras: true,
  cursos: false,
  atendimentoTerapeutico: true,
  teatroTerapeutico: false
}

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
          <div className='flex flex-col justify-center m-auto'>
            <h1 className={`mb-10 text-center w-full ${windS.className} leading-none`}>Célia Ribeiro</h1>
            <h2 className={`max-w-[550px] mx-auto text-[2rem] leading-10 mb-6 ${goudy.className}`}>Eu ajudo profissionais da saúde a destravarem na gravação de vídeos e a realizarem comunicações e palestras com confiança, sem medo de errar.</h2>
            <p>Sou atriz, produtora, professora e terapeuta. Ao longo de cerca de trinta anos de atividade artística e terapêutica, desenvolvi um método eficaz de preparo para psicólogas se comunicarem melhor com seu público, seja ao vivo (presencialmente) ou através de uma câmera.</p>

            {!!services.bio && (
              <p>Saiba um pouco mais da minha história clicando em
                <Link
                  href="/bio"
                  className='btn ok ml-2'
                >bio</Link>
              </p>
            )}

          </div>
        </div>
      </section >

      <section id='servicos' className="min-h-96 w-full px-4 py-16 mb-[4rem]">
        <div className="m-auto max-w-[1080px] h-auto">
          <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-4'>

            {!!services.mentoria && (
              <Card>
                <h2 className='w-full text-center pb-2'>Mentoria</h2>
                <p className="highlight">Destrave seu potencial para falar em público ou para a câmera.</p>
                <Link
                  href="/mentoria"
                  className='btn ok m-auto mb-0'
                >Saiba mais</Link>
              </Card>
            )}

            {!!services.palestras && (
              <Card>
                <h2 className='w-full text-center pb-2'>Palestras</h2>
                <p className="highlight">Palestras empresariais sobre comunicação</p>
                <Link
                  href="/palestras"
                  className='btn ok m-auto mb-0'
                >Saiba mais</Link>
              </Card>
            )}

            {!!services.cursos && (
              <Card>
                <h2 className='w-full text-center pb-2'>Cursos</h2>
                <p className="highlight">Cursos sobre comunicação</p>
                <Link
                  href="/cursos"
                  className='btn ok m-auto mb-0'
                >Saiba mais</Link>
              </Card>
            )}

            {!!services.atendimentoTerapeutico && (
              <Card>
                <h2 className='w-full text-center pb-2'>Atendimento terapêutico</h2>
                <p className="highlight">Sessões de terapia individual, presencial (em Curitiba) ou online.</p>
                <Link
                  href="/atendimento"
                  className='btn ok m-auto mb-0'
                >Saiba mais</Link>
              </Card>
            )}

            {!!services.teatroTerapeutico && (
              <Card>
                <h2 className='w-full text-center pb-2'>Teatro terapêutico</h2>
                <p className="highlight">Conheça essa especialidade e desenvolva seu potencial criativo.</p>
                <Link
                  href="/teatro-terapeutico"
                  className='btn ok m-auto mb-0'
                >Saiba mais</Link>
              </Card>
            )}

          </div>
        </div>
      </section >

      <Social />

      <h2 className="pb-4">Contato</h2>
      <ContactForm />

    </>
  );
}
