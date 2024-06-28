import { Header } from "rsuite"
import Accordion from "rsuite/Accordion"
import AccordionPanel from "rsuite/AccordionPanel"

const Mentorias = () => {
    return (
        <section className='min-h-screen max-w-[1080px] mx-auto mb-[6rem]'>
            <h1 className='w-full text-center py-16 '>Mentoria</h1>
            <div id="content" className="max-w-[1080px] mx-auto">

                <h2>A vida acadêmica e profissional</h2>

                <p>É comum que o profissional que deseja se desenvolver na sua área <strong>aprofunde seus estudos</strong>, com cursos de pós graduação e mestrado, participando de encontros para apresentação das pesquisas acadêmicas, ou ministrando aulas do conteúdo objeto de sua pesquisa.</p>
                <p>Já no <strong>ambiente profissional</strong>, reuniões para apresentação de metas e resultados são constantes. O profissional ainda pode ser destacado para ministrar treinamentos e coordenar equipes, ou assumir um cargo de gerenciamento, atingindo uma posição de destaque no grupo.</p>
                <p>Estas e outras situações colocam o profissional em uma posição de exposição, detendo um papel que o obriga a falar em público, e, muitas vezes, não há um preparo sólido para desempenhar esse papel, o que leva muitos profissionais a evitar tais situações, podendo <strong>comprometer sua ascenção profissional</strong> em função dessa falta de preparo.</p>

                <h2>Você precisa falar em público?</h2>

                <p>A verdade é que se exige dos bons profissionais a habilidade de falar em público, mas <strong>essa habilidade não é ensinada</strong> no momento em que o profissional está em formação. Uma das provas disso é que, nos curso de licenciatura, cujo propósito é a formação dos professores, não há nenhum conteúdo relativo a técnicas de falar em público. O mesmo se pode dizer de cursos de mestrado, que têm na prática docente um componente fundamental.</p>
                <p>Ultimamente, vimos uma adesão muito grande ao ambiente digital, com aulas e encontros por videochamada. O auge desse movimento se deu na pandemia, porém isso modificou a maneira de conduzirmos reuniões no ambiente profissional, e essa ferramenta permite que o profissional participe de equipes geograficamente dispersas. As mídias sociais se tornaram uma ferramenta de trabalho, permitindo a muitos profissionais apresentar seu conhecimento e oferecer seus serviços a um público virtualmente infinito.</p>

                <h2>Comunicação como ferramenta profissional</h2>

                <p>Seja no digital ou no presencial, a comunicação é cada vez mais uma ferramenta de destaque profissional, e quem não domina a fala em público acaba perdendo oportunidades de crescimento. Muitas vezes, o profissional tem muito conhecimento e não consegue transmití-lo, por medo, timidez ou mera falta de hábito, podendo <strong>deixar uma oportunidade escapar</strong> por conta da falta dessa habilidade.</p>
                <p>Ao longo de quase trinta anos de experiência com práticas teatrais e terapêuticas, <strong>desenvolvi um método eficaz</strong> de preparo para psicólogas se comunicarem melhor em público, seja ao vivo (presencialmente) ou através de uma câmera. Essa comunicação compreende desde uma reunião por videoconferência, uma apresentação em ambiente acadêmico, como uma aula ou seminário, até mesmo uma participação em um palco, em uma palestra ou simpósio. <strong>Falar em público deixará de ser um problema</strong>, seja qual for o motivo que impeça você de se desenvolver.</p>

        <h2>Para quem é essa mentoria?</h2>
        <p>A princípio, qualquer pessoa com vontade ou necessidade de falar em público pode se beneficiar da mentoria</p>

                <h2>Pilares da mentoria</h2>

                <Accordion bordered defaultActiveKey={1} className="bg-white">
                    <AccordionPanel
                        header={<h3>Pilar 01: Mente Alinhada: Autoconhecimento</h3>}
                        eventKey={1}
                    >
                        Pilar 01 - Mente Alinhada: Autoconhecimento
                    </AccordionPanel>
                    <AccordionPanel
                        header={<h3>Pilar 02: Corpo e postura</h3>}
                        eventKey={2}
                    >
                        Pilar 02 - Corpo e postura
                    </AccordionPanel>
                    <AccordionPanel
                        header={<h3>Pilar 03: Voz e articulação</h3>}
                        eventKey={3}
                    >
                        Pilar 03 - Voz e articulação
                    </AccordionPanel>
                    <AccordionPanel
                        header={<h3>Pilar 04: Seu tema</h3>}
                        eventKey={4}
                    >
                        Pilar 04 - Seu tema
                    </AccordionPanel>
                    <AccordionPanel
                        header={<h3>Pilar 05: O que vestir</h3>}
                        eventKey={5}
                    >
                        Pilar 05 - O que vestir
                    </AccordionPanel>
                    <AccordionPanel
                        header={<h3>Pilar 06: Feedback e melhoria contínua</h3>}
                        eventKey={6}
                    >
                        Pilar 06 - Feedback e melhoria contínua
                    </AccordionPanel>
                    <AccordionPanel
                        header={<h3>Pilar 07: Personagem</h3>}
                        eventKey={7}
                    >
                        Pilar 07 - Personagem
                    </AccordionPanel>
                    <AccordionPanel
                        header={<h3>Pilar 08: Autoconfiança</h3>}
                        eventKey={8}
                    >
                        Pilar 08 - Autoconfiança
                    </AccordionPanel>
                </Accordion>

            </div>
        </section>
    )
}

export default Mentorias