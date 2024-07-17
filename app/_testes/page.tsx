"use client";

import triggerSubscribeEmail from "@/netlify/functions/triggerSubscribeEmail";

const Teste = () => {


  return (
    <div>
      <h1>Página de testes</h1>
      <form action="triggerSubscribeEmail">
        <input type="text" name="subscriberName" id="subscriberName" placeholder="nome"/>
        <input type="text" name="subscriberEmail" id="subscriberEmail" placeholder="email"/>
        <button type="button">Send E-mail</button>
      </form>

    </div>
  );
};

export default Teste;