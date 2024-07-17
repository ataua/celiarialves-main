"use client";

import triggerSubscribeEmail from "@/netlify/functions/triggerSubscribeEmail";

const Teste = () => {


  return (
    <div>
      <h1 className='py-6'>Página de testes</h1>
      <section className='p-4 bg-[#fff9] shadow-md '>
        <h2>Envio de E-mail</h2>
        <form action="triggerSubscribeEmail">
          <div className='flex flex-col gap-2'>
            <input type="text" name="subscriberName" id="subscriberName" placeholder="nome" />
            <input type="text" name="subscriberEmail" id="subscriberEmail" placeholder="email" />
            <button type="button" className='btn ok ml-auto'>Send E-mail</button>
          </div>
        </form>

      </section>
    </div >
  );
};

export default Teste;