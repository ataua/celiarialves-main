import { FormEvent } from "react";
import { toast } from "react-toastify";

const ContactForm = ({ target = "/api/v1/contact" }) => {
    const sendContactMessage = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        toast.warn("Enviando...")
        const form = ev.currentTarget;
        const formData = new FormData(form);
        const res = await fetch(target, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData,
        })
        if (res.ok) {
            toast.success("Mensagem enviada!")
        } else {
            toast.error("Erro ao enviar a mensagem!")
        }
        form.reset();
    }
    return (
        <section id='contato' className="h-96 w-full px-4 py-16 mb-[8rem]">
            <div className="m-auto max-w-[1080px]">
                <h2 className="pb-4">Contato</h2>
                <p>Utilize esse formulário para entrar em contato, ou mande um e-mail para:<br />
                    <a href="mailto:contato@celiarialves.com.br" className="text-yellow-900 hover:text-blue-600">contato@celiarialves.com.br</a>
                </p>
                <form
                    data-netlify={true}
                    netlify-honeypot="bot-field"
                    data-netlify-recaptcha="true"
                    name='contact'
                    className='flex flex-col gap-4'
                    method='POST'
                    onSubmit={sendContactMessage}
                >
                    <div className='flex flex-col gap-2'>
                        <input type="hidden" name="form-name" value="contact" />
                        <input
                            name="name"
                            required
                            type="text"
                            placeholder="Nome"
                            className="text-yellow-900 rounded-md"
                        />
                        <input
                            name="email"
                            required
                            type="email"
                            placeholder="E-mail"
                            className="text-yellow-900 rounded-md"
                        />
                        <textarea
                            name="message"
                            required
                            placeholder="Mensagem"
                            className="text-yellow-900 rounded-md"
                        />
                        <button
                            type="submit"
                            className='btn ok ml-auto'
                        >Enviar</button>
                    </div>
                    <div data-netlify-recaptcha={true}></div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm