import ContactForm from '@components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';

const Palestras = () => {
    return (
        <section className='min-h-screen max-w-[1080px] mx-auto mb-[6rem]'>
            <h1 className='w-full text-center py-16 '>Palestras: comunicação assertiva e Feedback Eficaz</h1>
            <div id="content" className="max-w-[1080px] mx-auto">
                <p className="text-center text-lg mb-8 text-xl">
                    Descubra como a comunicação assertiva e o feedback eficaz podem impulsionar o sucesso em sua equipe e organização. Nossa mentora, Célia, oferece palestras dinâmicas e práticas, com base em sua vasta experiência e conhecimento, para ajudar você com:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-md p-4">
                        <h2 className='text-center'>Comunicação Assertiva</h2>
                        <ul className="list-disc pl-6">
                            <li>
                                Compreender os diferentes estilos de comunicação: Explore os estilos passivo, agressivo e assertivo, e como identificar cada um.
                            </li>
                            <li>
                                Desenvolver habilidades de comunicação assertiva: Aprenda técnicas para expressar suas necessidades e opiniões de forma clara e respeitosa, sem ser agressivo ou passivo.
                            </li>
                            <li>
                                Lidar com conflitos de forma construtiva: Descubra como a comunicação assertiva pode ajudar a resolver conflitos de forma eficaz e manter um ambiente de trabalho positivo.
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-md p-4">
                        <h2 className='text-center'>Feedback Eficaz</h2>
                        <ul className="list-disc pl-6">
                            <li>
                                Dar feedback positivo e construtivo: Aprenda a fornecer feedback que seja útil e motivador, focando nos pontos fortes e nas áreas de desenvolvimento.
                            </li>
                            <li>
                                Receber feedback de forma receptiva: Desenvolva habilidades para receber feedback de forma construtiva, aprendendo a ouvir, refletir e agir sobre as informações recebidas.
                            </li>
                            <li>
                                Criar uma cultura de feedback positivo: Descubra como implementar uma cultura de feedback contínuo e transparente em sua organização.
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="pt-14 pb-8 max-w-[800px] text-2xl mx-auto">Nossas palestras são voltadas para líderes e para equipes, com o objetivo de desenvolver relações profissionais pautadas no respeito e no desenvolvimento mútuo. </p>

                <div className="bg-white rounded-md p-4 mt-8">
                    <h2 className="mb-4">Benefícios das Palestras</h2>
                    <ul className="list-disc pl-6">
                        <li>Melhoria da comunicação interna</li>
                        <li>Aumento da produtividade</li>
                        <li>Redução de conflitos</li>
                        <li>Desenvolvimento de talentos</li>
                    </ul>
                </div>

                <div className="bg-white rounded-md p-4 mt-8">
                    <h2 className="mb-4">Formato das Palestras</h2>
                    <ul className="list-disc pl-6">
                        <li>Palestras interativas</li>
                        <li>Conteúdo personalizado</li>
                        <li>Material de apoio</li>
                    </ul>
                </div>

                <div className="m-auto max-w-[900px] pt-10
">
                    <h2>Entre em contato para agendar sua palestra</h2>

                    <p className=''>Gostou dos temas apresentados? Tem outras ideias ou necessidades que não estão listadas aqui? Entre em contato, informe qual a sua necessidade, faça um orçamento e conheça outras opções de conteúdos institucionais que podem ser levados à sua organização e à sua equipe.</p>
                    <p>Estou radicada em Curitiba mas posso levar a palestra para sua cidade.</p>

                    <h3 className='text-2xl font-bold'>WhatsApp: (41) 98865-2148</h3>
                    <p className='flex flex-row gap-8 pt-4'>
                        <Link href="https://wa.me/5541988356020" className='btn ok '>WhatsApp</Link>
                        <Link href="https://web.whatsapp.com/send?phone/5541988356020" className='btn ok '>WhatsApp Web</Link>
                    </p>
                </div>
                <ContactForm />
            </div>

        </section>
    );
};

export default Palestras;
