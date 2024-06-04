import GMap from "@components/GMap"

const center: google.maps.LatLngLiteral = {
    "lat": -25.42746791879314,
    "lng": -49.26759117178875
};

const TeatroTerapeutico = () => {
    return (
        <section className='min-h-screen max-w-[1080px] m-auto'>
            <h1 className='w-full text-center py-16 '>Teatro Terapêutico</h1>
            <div className="bg-white rounded-md p-4 mt-4">

                <p className="pb-4">O Teatro Terapêutico é uma iniciativa da amiga, atriz e terapeuta Lea Albuquerque, que, em parceria com o Teatro Barracão Encena, lançou esse belo projeto em 2002.</p>
                <p className="pb-4">Trata-se de uma modalidade de terapia em grupo, onde os participantes trazem os temas para discussão, e o grupo tenta encontrar soluções para cada tema. Assim, por meio de exercícios teatrais e da prática de sociabilização e discussão das suas dificuldades, o participante consegue reelaborar seus conflitos internos, lidando melhor consigo e com seu ambiente.</p>
                <p className="pb-4">Em 2012, fui convidada para participar do projeto Teatro Terapêutico como professora-terapeuta, e desde então tenho tratado temas como sociabilização, introspecção, fala, timidez, medos e fobias, com um público variado, tanto em idades como em contextos.</p>
                <p className="pb-4">As aulas acontecem no Teatro Barracão Encena, em um ponto central de Curitiba, onde contamos com salas de ensaio e o palco principal, onde, a final de cada ciclo, o grupo apresenta uma peça criada sob medida, a partir dos temas que os participantes escolheram.</p>
            </div>


            <div className="w-screen h-[400px]">
                <GMap center={ center } />
            </div>
        </section>
    )
}
export default TeatroTerapeutico