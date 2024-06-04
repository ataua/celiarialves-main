import GMap from "@components/GMap"
const center: google.maps.LatLngLiteral = {
    "lat": -25.430724647902036,
    "lng": -49.26883555364751
};

const Atendimento = () => {

    return (
        <section className='min-h-screen max-w-[1080px] m-auto'>
            <h1 className='w-full text-center py-16 '>Atendimento terapêutico</h1>
            <p>Ofereço atendimento terapêutico desde .... Para quem está em Curitiba, podemos marcar atendimento presencial na clínica ..., ou, se você está fora de Curitiba, ou prefere essa modalidade, podeos marcar atendimento online, pela plataforma ...</p>

            <article>
                <h2>Atendimento presencial</h2>
                <div className="flex flex-col">
                    <div className="w-full">
                        <h3>Clínica Tal</h3>
                        <p>Rua Barão do Rio Branco, n° 63 - sala 211</p>
                        <p>(41) 98835-6020</p>
                    </div>

                    <div className="w-screen h-[400px]">
                        <GMap center={ center } />
                    </div>
                </div>
            </article>

            <article>
                <h2>Atendimento online</h2>
                <div>agendamento online</div>
            </article>
        </section>
    )
}
export default Atendimento