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
          alert("Duality ha recibido su correo.");
        },
        (error) => {
          alert('Ha ocurrido un error al enviar el mensaje, intente de nuevo o pruebe otra opción', error.text);
        },
      );
  };

  return (
    <form 
    id="contacto"
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


