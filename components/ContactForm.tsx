"use client"

import { FormEvent } from "react";
import { toast } from "react-toastify";

const sendContactMessage = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    toast.warn("Enviando...")
    const form = ev.currentTarget;
    try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData)
        const body = new URLSearchParams(data as Record<string, string>).toString()

        const res = await fetch("/contact-form.html", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body
        })
        if (res.ok) {
            toast.success("Mensagem enviada!")
        } else {
            toast.error("Erro ao enviar a mensagem!")
        }
    } catch (error) {
        toast.error("Erro ao enviar a mensagem!")
        console.log(error)
    }
    form.reset();
}

const ContactForm = () => {
    return (
        <section id='contato' className="h-96 w-full px-4 py-16 mb-[8rem]">
            <div className="m-auto max-w-[1080px]">
                <h2 className="pb-4">Contato</h2>
                <p>Utilize esse formulário para entrar em contato, ou mande um e-mail para:<br />
                    <a href="mailto:contato@celiarialves.com.br" className="text-yellow-900 hover:text-blue-600">contato@celiarialves.com.br</a>
                </p>
                <form
                // @ts-ignore
                    netlify
                    netlify-honeypot="bot-field"
                    data-netlify-recaptcha="true"
                    name='contact'
                    className='flex flex-col gap-4'
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
                        <div data-netlify-recaptcha={true}></div>
                        <button
                            type="submit"
                            className='btn ok ml-auto'
                        >Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm