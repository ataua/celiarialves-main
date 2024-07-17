import Link from "next/link"
import Accordion from "rsuite/Accordion"
import AccordionPanel from "rsuite/AccordionPanel"
import Apresentacao from "@public/apresentacao.png"
import Image from "next/image"

const Mentorias = () => {
    return (
        <section className='min-h-screen max-w-[1080px] mx-auto mb-[6rem]'>
            <h1 className='w-full text-center py-16 '>Comunicação Assertiva: Domine a Palavra em Público</h1>
            <div id="content" className="max-w-[1080px] mx-auto">

                <h2>A vida acadêmica e profissional</h2>

                <p>É comum que o profissional que deseja se desenvolver na sua área <strong>aprofunde seus estudos</strong>, com cursos de pós graduação e mestrado, participando de encontros para apresentação das pesquisas acadêmicas, ou ministrando aulas do conteúdo objeto de sua pesquisa.</p>
                <p>Já no <strong>ambiente profissional</strong>, reuniões para apresentação de metas e resultados são constantes. O profissional ainda pode ser destacado para ministrar treinamentos e coordenar equipes, ou assumir um cargo de gerenciamento, atingindo uma posição de destaque no grupo.</p>
                <p>Estas e outras situações colocam o profissional em uma posição de exposição, detendo um papel que o obriga a falar em público, e, muitas vezes, não há um preparo sólido para desempenhar esse papel, o que leva muitos profissionais a evitar tais situações, podendo <strong>comprometer sua ascenção profissional</strong> em função dessa falta de preparo.</p>

                <figure className="pb-4">
                    <Image src={Apresentacao} alt="Apresentação" height="400" className="w-full" />
                    <figcaption>Apresentações em atividades profissionais e acadêmicas são um desafio.</figcaption>
                </figure>

                <h2>Você precisa falar em público?</h2>

                <p>A verdade é que se exige dos bons profissionais a habilidade de falar em público, mas <strong>essa habilidade não é ensinada</strong> no momento em que o profissional está em formação. Uma das provas disso é que, nos curso de licenciatura, cujo propósito é a formação dos professores, não há nenhum conteúdo relativo a técnicas de falar em público. O mesmo se pode dizer de cursos de mestrado, que têm na prática docente um componente fundamental.</p>
                <p>Ultimamente, vimos uma adesão muito grande ao ambiente digital, com aulas e encontros por videochamada. O auge desse movimento se deu na pandemia, porém isso modificou a maneira de conduzirmos reuniões no ambiente profissional, e essa ferramenta permite que o profissional participe de equipes geograficamente dispersas. As mídias sociais se tornaram uma ferramenta de trabalho, permitindo a muitos profissionais apresentar seu conhecimento e oferecer seus serviços a um público virtualmente infinito.</p>

                <h2>Comunicação como ferramenta profissional</h2>

                <p>Seja no digital ou no presencial, a comunicação é cada vez mais uma ferramenta de destaque profissional, e quem não domina a fala em público acaba perdendo oportunidades de crescimento. Muitas vezes, o profissional tem muito conhecimento e não consegue transmití-lo, por medo, timidez ou mera falta de hábito, podendo <strong>deixar uma oportunidade escapar</strong> por conta da falta dessa habilidade.</p>
                <p>Ao longo de quase trinta anos de experiência com práticas teatrais e terapêuticas, <strong>desenvolvi um método eficaz</strong> de preparo para psicólogas se comunicarem melhor em público, seja ao vivo (presencialmente) ou através de uma câmera. Essa comunicação compreende desde uma reunião por videoconferência, uma apresentação em ambiente acadêmico, como uma aula ou seminário, até mesmo uma participação em um palco, em uma palestra ou simpósio. <strong>Falar em público deixará de ser um problema</strong>, seja qual for o motivo que impeça você de se desenvolver.</p>

                <h2>Conteúdo da mentoria</h2>

                <Accordion bordered defaultActiveKey={1} className="bg-white">
                    <AccordionPanel
                        header={<h3>Módulo 1 - Mente Alinhada: Autoconhecimento</h3>}
                        eventKey={1}

                    >
                        <p>Neste módulo, vamos trabalhar o autoconhecimento e alinhamento mental para desenvolver a confiança necessária para falar em público. Serão abordados temas como lidar com ansiedade, deixar o ego de lado e manter uma mentalidade positiva e grata.</p>
                    </AccordionPanel>
                    <AccordionPanel
                        header={<h3>Módulo 2 - Corpo Alinhado: Postura e Respiração</h3>}
                        eventKey={2}
                    >
                        <p>No módulo 2, ensino técnicas de postura, respiração e relaxamento para controlar a ansiedade e transmitir segurança ao falar em público. Vamos trabalhar a linguagem corporal, que é fundamental para reforçar a mensagem verbal.</p>
                    </AccordionPanel>
                    <AccordionPanel
                        header={<h3>Módulo 3 - Voz Alinhada: Projeção e Dicção</h3>}
                        eventKey={3}
                    >
                        <p>Aqui, iremos trabalhar aspectos da voz, como projeção, dicção, entonação e ritmo. O objetivo é aprimorar a clareza e expressividade ao falar, mantendo a atenção da audiência.</p>
                    </AccordionPanel>
                    <AccordionPanel
                        header={<h3>Módulo 4 - Conteúdo Alinhado: Organização e Preparo</h3>}
                        eventKey={4}
                    >
                        <p>Nesta etapa, o foco é preparar um conteúdo claro, objetivo e alinhado com o público-alvo. São dadas dicas de planejamento, uso de imagens e exemplos para tornar a apresentação mais impactante.</p>
                    </AccordionPanel>
                    <AccordionPanel
                        header={<h3>Módulo 5 - Presença Alinhada: Conexão e Empatia</h3>}
                        eventKey={5}
                    >
                        <p>O módulo 5 aborda técnicas para estabelecer conexão e empatia com a audiência, como fazer perguntas, gerar expectativa e transmitir paixão pelo assunto. A autenticidade é fundamental para inspirar confiança.</p>
                    </AccordionPanel>
                    <AccordionPanel
                        header={<h3>Módulo 6 - Superação de Barreiras</h3>}
                        eventKey={6}
                    >
                        <p>Este módulo é dedicado a identificar e superar barreiras mentais e emocionais que dificultam falar em público, como medo do julgamento, perfeccionismo e insegurança. São ensinadas estratégias de autoconfiança e mentalidade de crescimento.</p>
                    </AccordionPanel>
                    <AccordionPanel
                        header={<h3>Módulo 7 - Personagem e Persona</h3>}
                        eventKey={7}
                    >
                        <p>Vamos explorado o conceito de persona e como usá-la para se comunicar de forma mais assertiva em diferentes contextos. Também é abordada a expressão clara de sentimentos e opiniões.</p>
                    </AccordionPanel>
                    <AccordionPanel
                        header={<h3>Módulo 8 - Autoconfiança e Feedback</h3>}
                        eventKey={8}
                    >
                        <p>No último módulo, reforçamos a importância da autoconfiança e autenticidade ao falar em público. Também são dadas dicas de como solicitar e lidar com feedbacks construtivos para aprimorar continuamente a comunicação.</p>
                    </AccordionPanel>
                </Accordion>

            </div>

            <p>Gostou do conteúdo? Aproveite e faça sua inscrição hoje mesmo!.</p>

            <div className="w-full p-6 flex">
                <Link href="https://ribeiro-celinha.hotmart.host/pagina-de-vendas-13c89dde-30ae-47eb-a97c-81f6b5548c27" className="btn bg-yellow-400 hover:bg-yellow-500 text-red-900 py-6 px-8 mx-auto my-6" >Gostei! Quero participar!</Link>
            </div>

            <h2>Para quem é essa mentoria?</h2>
            <p>A mentoria Comunicação Assertiva foi elaborada para você que deseja:</p>
            <ul className="list-disc list-inside flex flex-col gap-4">
                <li>Conquistar mais oportunidades de crescimento profissional</li>
                <li>Transmitir suas ideias com clareza e convicção</li>
                <li>Superar o medo de falar em público</li>
                <li>Desenvolver uma comunicação assertiva em qualquer ambiente</li>
            </ul>

            <div className="w-full p-6 flex">
                <Link href="https://ribeiro-celinha.hotmart.host/pagina-de-vendas-13c89dde-30ae-47eb-a97c-81f6b5548c27" className="btn bg-yellow-400 hover:bg-yellow-500 text-red-900 py-6 px-8 mx-auto my-6" >Sim! Quero me aprimorar!</Link>
            </div>


        </section>
    )
}

export default Mentorias