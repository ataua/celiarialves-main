"use client"

import { useRef } from "react";

const Teste = () => {

  const mailForm = useRef(null);

  const sendContactMessage = async () => {
    if (!mailForm.current) {
      console.log('Form not found');
      return
    };
    const formData = new FormData(mailForm.current);
    const response = await fetch('/_forms/_contact.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify(Object.fromEntries(formData))
    });

    console.log(response);
  }


  return (
    <div>
      <h1 className='py-6'>Página de testes</h1>
      <section className='p-4 bg-[#fff9] shadow-md '>
        <h2>Envio de E-mail</h2>
        {/* @ts-ignore */}
        <form ref={mailForm} data-netlify="true" netlify name="main-contact-form" method="POST" onSubmit={sendContactMessage}>
          <div className='flex flex-col gap-2'>
            <input type="hidden" name="form-name" value="main-contact-form" />
            <input type="text" name="name" id="name" placeholder="nome" autoComplete="nome" />
            <input type="text" name="email" id="email" placeholder="email" autoComplete="email" />
            <textarea name="message" id="message" placeholder="mensagem" cols={30} rows={10}></textarea>
            <button type="submit" className='btn ok ml-auto'>Send E-mail</button>
          </div>
        </form>

      </section>
    </div >
  );
};

export default Teste;