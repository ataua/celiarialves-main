import { FormEvent } from "react";
import { Bounce, toast } from "react-toastify";

const ContactForm = () => {
    const sendContactMessage = ( ev: FormEvent<HTMLFormElement> ) => {
        ev.preventDefault();
        const form = ev.currentTarget;
        const formData = new FormData( form );
        const data = Object.fromEntries( formData );
        const res = fetch( "/api/v1/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( data ),
        } )
        // TODO: enviar a mensagem para o back-end
        // limpar o formulário
        form.reset();
        toast.success( "Mensagem enviada!" )
    }
    return (
        <section id='contato' className="h-96 w-full px-4 py-16">
            <div className="m-auto max-w-[1080px]">
                <h2 className="pb-4">Contato</h2>
                <form
                    data-netlify={ true }
                    name='main-contact-form'
                    className='flex flex-col gap-4'
                    method='POST'
                    onSubmit={ ( ev ) => sendContactMessage( ev ) }
                >
                    <input name="name" type="text" placeholder="Nome" className="text-yellow-900 rounded-md" />
                    <input name="email" type="email" placeholder="Email" className="text-yellow-900 rounded-md" />
                    <textarea name="message" placeholder="Mensagem" className="text-yellow-900 rounded-md" />
                    <button type="submit" className='btn ok ml-auto' >Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm