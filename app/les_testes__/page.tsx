"use client"

import { useRef } from "react";
import { toast } from "react-toastify";

const Teste = () => {

  const mailForm = useRef(null);

  const sendContactMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!mailForm.current) {
      console.log('Form not found');
      return
    };
    const formData = new FormData(mailForm.current);
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: formData
    });

    if (response.ok) {
      toast.done('Form enviado com sucesso!');
    } else {
      toast.error('Erro ao enviar o formulário');
    }

  }

  return (
    <div>
      <h1 className='py-6'>Página de testes</h1>
      <section className='p-4 bg-[#fff9] shadow-md '>
        <h2>Envio de E-mail</h2>
        <form
          ref={mailForm}
          name="main-contact-form"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <div className='flex flex-col gap-2'>
            <input type="hidden" name="form-name" value="main-contact-form" />
            <input type="text" name="name" id="name" placeholder="nome" autoComplete="nome" />
            <input type="text" name="email" id="email" placeholder="email" autoComplete="email" />
            <textarea name="message" id="message" placeholder="mensagem" cols={30} rows={10}></textarea>
            <button type="submit" className='btn ok ml-auto'>Send E-mail</button>
          </div>
          <div data-netlify-recaptcha="true"></div>
        </form>

      </section>
    </div >
  );
};

export default Teste;