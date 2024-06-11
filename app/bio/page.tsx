
import { WindSong, Goudy_Bookletter_1911 } from "next/font/google";
import Image from "next/image";
import Juca from "@public/juca.jpeg";
import CPazello from "@public/celiapazello.jpeg"
import CSilvia from "@public/celiasilvia.jpeg"

const windS = WindSong( { subsets: [ "latin" ], weight: "400" } );
const goudy = Goudy_Bookletter_1911( { subsets: [ "latin" ], weight: "400" } );

const Bio = () => {

    return (
        <section id='sobre' className="min-h-96 w-full px-4 mt-8">
            <div className="max-w-[1080px] flex mx-auto my-16 gap-[5rem] items-end">
                <div className='flex flex-col justify-center m-auto'>
                    <h1 className={ `pb-14 text-center w-full ${ windS.className } leading-none` }>Celia Ribeiro</h1>
                </div>
            </div>
            <div id="content" className="max-w-[1080px] mx-auto">
                <figure className="w-full min-w-[300px] mx-2 sm:w-[30%] sm:float-left p-4 bg-white shadow-sm rounded-md" >
                    <Image
                        src={ CPazello }
                        alt="Célia Ribeiro como o ator e diretor Luiz Carlos Pazello"
                        className=""
                    />
                    <figcaption className="">Eu e Luiz Carlos Pazello</figcaption>
                </figure>
                <p>Minha jornada começou em 1995, em Curitiba. Enquanto ainda cursava o curso técnico (atual ensino médio profissionalizante) de Ator do Colégio Estadual do Paraná, já trabalhava profissionalmente no teatro, em peças como … com Luiz Carlos Pazello e Sílvia Monteiro, no grupo Confraria Cênica.</p>



                <p className="clear-end">Eu já possuía alguma experiência como atriz em 2003, quando recebi o convite para ser professora de teatro no curso do grupo Confraria Cênica, e, mesmo com medo, assumi o desafio, por conta de um empurrão do mestre e amigo Pazello, que viu em mim algo que eu mesma não via. A partir desse momento, juntamente à prática como atriz, eu me tornaria professora, atividade que mantenho até os dias atuais.</p>

                <figure className="w-full sm:w-[30%] min-w-[300px]  sm:float-left p-4 bg-white shadow-sm rounded-md" >
                    <Image
                        src={ CSilvia }
                        alt="Célia Ribeiro com a atriz e diretora Sílvia Monteiro"
                        className=""
                    />
                    <figcaption className="">Eu e Sílvia Monteiro</figcaption>
                </figure>
                <p>Paralelamente ao teatro, participei do Coral de Curitiba e, posteriormente, entre 2006 e 20…, do Coro do Guaíra, porém as demandas cotidianas acabaram por me afastar da música, com exceção de uma breve incursão na ópera Sidéria, em 2014.</p>

                <figure className="w-full sm:w-[30%] min-w-[300px]  sm:float-right p-4 bg-white shadow-sm rounded-md" >
                    <Image
                        src={ Juca }
                        alt="Célia Ribeiro como o personagem 'Juca' na peça infantil 'Juca na caixa'"
                        className=""
                    />
                    <figcaption className="">Cena da peça &quot;Juca na Caixa&quot; (1998)</figcaption>
                </figure>
                <br />
                { "<Spin movies>" }
                <br />
                <p>Trabalhando em uma produtora entre 20.. e 20.., conheci o universo da publicidade e do vídeo, e nesse período fiz algumas incursões pelo cinema, com filmes como O Sal da Terra (2008) (imdb.com/title/tt1557653/), (https://www.imdb.com/title/tt1789868/) O Coro (2010) e O Traste (20..) - que me rendeu o prêmio de melhor atriz no Festival…</p>
                <p>O amor de Catarina (2016) (https://www.imdb.com/title/tt6133482/?ref_=fn_al_tt_1)</p>
                <p>Em … comecei a trabalhar com media training, inicialmente como assistente de direção, e posteriormente como diretora de cena, atividade que desenvolvi por cerca de … anos, produzindo vídeo-aulas no IESDE, Red Balloon e UNINTER. Nessa atividade, uma das minhas funções era preparar os professores para gravar as vídeo-aulas, e percebi uma grande dificuldade dessas pessoas - que eu imaginava terem uma maior desenvoltura no vídeo, por estarem habituadas a falar em público - de falarem para a câmera. Alguns deles eram professores de Doutorado, tinham um curriculum extenso, que incluía participação em palestras e simpósios, e me intrigou o fato de muitos participantes desse grupo demonstrarem medo de falar para a câmera, e até mesmo de falar em público.</p>
                <p>Impelida por essa curiosa dicotomia entre expectativa e realidade, surgiu a vontade de estudar questões como o medo e o comportamento humano, e resolvi estudar Parapsicologia, tendo me formado em 20… na Faculdade Espírita, tendo buscado outras especializações dentro do mesmo universo, como Cromoterapia, Theta Healing e Bio Energética, pŕaticas que conjuguei para oferecer tratamento terapêutico em um consultório que abri no centro de Curitiba.</p>

                <p>ciência e espiritualidade...</p>

                <p>Tendo já alguma experiência terapêutica, sendo que ainda me mantinha atuante no teatro, cinema e publicidade, fui convidada, em 2017, pela também atriz e terapeuta Léa Albuquerque, a participar do seu projeto chamado Teatro Terapêutico.</p>
                <br />
                { "<falar sobre o Teatro Terapêutico>" }
                <br />
                <p>Ainda nessa busca de conhecer o outro, cursei Filosofia na UFPR, tendo me formado em 2020. O tema escolhido para o TCC foi filósofo William James, que se debruçou sobre temas como a vontade de crer; por conta dos seus estudos, me conectei com a neurociência e, em 2021, cursei pós graduação em Neurociência e a Física da Consciência, na Uninter.</p>
                <p>Em 2023, iniciei uma graduação em Psicologia na Faculdade Inspirar, como uma nova etapa na busca por conhecer melhor o outro, e ajudar as pessoas a se conhecerem.</p>
                <p>Tendo uma extensa experiência no teatro, na terapia, e no ambiente acadêmico, percebi nos colegas uma dificuldade na comunicação, habilidade não desenvolvida nos cursos. Isso é uma realidade tanto agora, onde serão formados psicólogos, quanto na Filosofia, que era um curso de Licenciatura, e não há nenhum preparo para os alunos se apresentarem para um público, seja no formato que for. Durante a pandemia, …..</p>

                <p>para o futuro: escola parapsi + projeto treinamentos empresas parceira instit historia viva { ">" } comunicação com historias + teatro</p>
            </div>
        </section >
    )
}

export default Bio