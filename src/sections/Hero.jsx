import Button from "../components/Button";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { thumbnails } from "../constants";
import ImgCard from "../components/ImgCard";
import { thumbnailImg1 } from "../assets/images";

const Hero = () => {
  const [thumbnailImg, setThumbnailImg] = useState(thumbnailImg1);

  return (
    <section className="w-full flex xl:flex-row flex-col justify-center items-center min-h-screen gap-10 max-container px-4">
      {/* Muestra el texto de Duality */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-center xl:items-start w-full pt-0">
        <h1 className="mt-10 text-8xl max-sm:text-6xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight font-bold text-center xl:text-left">
          <span className="xl:whitespace-nowrap relative z-10 pr-10">
            Haciendo de tu <br /> imaginación
          </span>
          <br />
          <span className="text-orange-600 inline-block mt-3">realidad</span>
        </h1>
        <p className="text-gray-500 text-lg leading-8 mt-6 mb-14 max-w-full sm:max-w-sm text-center xl:text-left">
          Personalizamos todo lo que puedas imaginar. <br />
          Camperas, remeras, gorras, tazas, banderas, vos pedilo. <br />
          Lo necesitas para mañana y lo tenemos para ayer.
        </p>
        <Button
          label="Hace tu pedido"
          iconUrl={arrowRight}
          alt="Icono Flecha Derecha"
          href="#contacto"
        />
      </div>

      {/* Muestra imágenes de zapatos */}
      <div className="relative flex-1 flex flex-col justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={thumbnailImg}
          alt="product collection"
          width={400}
          height={200}
          className="object-contain relative z-10"
        />
        {/* Muestra ShoeCards debajo de la imagen del zapato */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-4 max-sm:px-6 mt-6 sm:absolute sm:-bottom-[5%] sm:left-[10%]">
          {thumbnails.map((image, index) => (
            <div key={index} className="w-1/2 sm:w-auto">
              <ImgCard
                imgUrl={image}
                changeThumbnailImage={setThumbnailImg}
                thumbnailImg={thumbnailImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
