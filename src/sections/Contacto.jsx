const Contacto = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full" id="contacto">
      <h2 className="text-white mb-2">Contanos, ¿Qué necesitás?</h2>
      <form className="w-full max-w-lg px-4">
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
          <textarea name="mensaje" id="mensaje" cols="30" rows="6" placeholder="Me gustaria una remera que diga..." className="w-full p-4 bg-transparent border-2 border-amber-500 outline-none rounded-md my-3 text-white" autoComplete="off" required></textarea>
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
