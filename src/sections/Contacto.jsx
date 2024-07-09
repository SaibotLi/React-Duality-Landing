import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r9xsq43', 'template_1tt3v1g', form.current, {
        publicKey: 'QdHIqa46yq6eRNvo8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form 
      ref={form} 
      onSubmit={sendEmail} 
      className="flex flex-col mx-auto rounded-md bg-gray-800 text-white justify-center min-h-min text-center w-full max-w-4xl px-6 py-8 mb-10 mt-2"
    >
      <label htmlFor="user_name" className="mb-2 text-lg">Nombre</label>
      <input
      required
        type="text" 
                    id='user_name'
        name="user_name" 
        className="mb-4 p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 w-3/4 mx-auto"
      />
      <label htmlFor="user_email" className="mb-2 text-lg">Email</label>
      <input 
            required
        type="email" 
        name="user_email" 
        id="user_email"
        className="mb-4 p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 w-3/4 mx-auto"
      />
      <label htmlFor="message" className="mb-2 text-lg">Consulta</label>
      <textarea
            required
            id='message'
        name="message"
        placeholder="Hola, ¿Cuánto me saldrían 5 remeras negras talle L personalizadas? Las necesito ya. Escribime y te paso el diseño, mi número es 3455123123."
        className="mb-4 p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 w-3/4 mx-auto"
      />
      <input 
        type="submit" 
        className="flex justify-center hover:shadow-none transition-shadow mt-4 mb-4 w-32 border-2 border-black outline-none shadow-lg shadow-amber-800 cursor-pointer mx-auto bg-amber-500 rounded-md text-white"
        value="Send" 
      />
    </form>
  );
};

export default Contacto;

{/* const Contacto = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-min mb-10 w-full">
      <h2 className="text-white mb-2">Contanos, ¿Qué necesitás?</h2>
      <form className="w-full max-w-4xl px-4">
        <div className="flex justify-between w-full mb-4">
          <div className="w-2/5">
            <input name="nombre" type="text" placeholder="Nombre Completo" id="nombre" className="w-full p-4 bg-transparent border-2 border-amber-500 outline-none rounded-md my-3 text-white" autoComplete="off" required />
            <div className="text-red-600 text-left mt-1 mb-2 hidden">Nombre Completo no puede estar vacío</div>
          </div>
          <div className="w-2/5">
            <input name="email" type="email" placeholder="Correo Electrónico" id="email" className="w-full p-4 bg-transparent border-2 border-amber-500 outline-none rounded-md my-3 text-white" autoComplete="off" required />
            <div className="text-red-600 text-left mt-1 mb-2 hidden">Email no puede estar vacío</div>
          </div>
        </div>

        <div className="flex justify-between w-full mb-4">
          <div className="w-2/5">
            <input name="celular" type="number" placeholder="Celular" id="celular" className="w-full p-4 bg-transparent border-2 border-amber-500 outline-none rounded-md my-3 text-white" autoComplete="off" required />
            <div className="text-red-600 text-left mt-1 mb-2 hidden">Núm. de celular no puede estar vacío</div>
          </div>
          <div className="w-2/5">
            <input name="titulo" type="text" placeholder="Título" id="titulo" className="w-full p-4 bg-transparent border-2 border-amber-500 outline-none rounded-md my-3 text-white" autoComplete="off" required />
            <div className="text-red-600 text-left mt-1 mb-2 hidden">Título no puede estar vacío</div>
          </div>
        </div>

        <div className="w-full mb-4">
          <textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Me gustaria una remera que diga..." className="w-full p-4 bg-transparent border-2 border-amber-500 outline-none rounded-md my-3 text-white" autoComplete="off" required></textarea>
          <div className="text-red-600 text-left mt-1 mb-2 hidden">Introduce un mensaje</div>
        </div>
        
        <div className="flex justify-center">
          <button type="submit" className="hover:shadow-none transition-shadow py-3 px-8 border-none outline-none shadow-md shadow-amber-800 cursor-pointer mt-5 bg-amber-500 rounded-md text-white">Enviar</button>
        </div>
      </form>
    </section>
  );
};

export default Contacto;

*/}


