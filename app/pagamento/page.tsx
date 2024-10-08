'use client'

import React from 'react';
export default function PreviewPage () {
  React.useEffect( () => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams( window.location.search );
    if ( query.get( 'success' ) ) {
      console.info( 'Order placed! You will receive an email confirmation.' );
    }

    if ( query.get( 'canceled' ) ) {
      console.info( 'Order canceled -- continue to shop around and checkout when you’re ready.' );
    }
  }, [] );

  return (
    <form action="/api/v1/checkout_sessions" method="POST">
      <section>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        { `
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
}