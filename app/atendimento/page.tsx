import GMap from "@components/GMap"
import Link from "next/link";
const center: google.maps.LatLngLiteral = {
    "lat": -25.430724647902036,
    "lng": -49.26883555364751
};

const Atendimento = () => {

    return (
        <section className='min-h-screen max-w-[1080px] m-auto pb-12'>
            <h1 className='w-full text-center py-16 '>Atendimento terapêutico</h1>
            <p>Ofereço atendimento terapêutico desde 2018, com diversas técnicas como Reiki, ThetaHealing, Cromoterapia, entre outras. Para quem está em Curitiba, podemos marcar atendimento presencial, ou, se você está fora de Curitiba (ou prefere essa modalidade), temos a opção de agendamento online.</p>

            <article>
                <h2>Atendimento presencial</h2>
                <div className="flex flex-col">
                    <div className="w-full">
                        {/* <h3>Clínica Tal</h3> */}
                        <p>Rua Barão do Rio Branco, n° 63 - sala 211</p>
                        <p>Agende seu horário, por telefone ou WhatsApp: <strong>(41) 98835-6020</strong></p>
                    </div>

                    <div className="w-screen h-[400px]">
                        <GMap center={center} />
                    </div>
                </div>
            </article>

            <br />

            <article>
                <h2>Atendimento online</h2>
                <h3>Se você não mora em Curitiba, ou prefere o atendimento online, podemos nos encontrar pela plataforma Google Meet.</h3>
                <p>Para agendar atendimento online, entre em contato por telefone, WhatsApp ou e-mail:</p>
                <p className='flex flex-row gap-8'>
                    <Link href="https://wa.me/5541988356020" className='btn ok '>WhatsApp</Link>
                    <Link href="https://web.whatsapp.com/send?phone/5541988356020" className='btn ok '>WhatsApp Web</Link>
                </p>
            </article>

        </section>
    )
}
export default Atendimento