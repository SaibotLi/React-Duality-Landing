import { bigShoe1 } from "../assets/images"
const AboutUs = () => {
  return (
    <section className="w-full h-screen">
        <div className="w-full bg-gray-500 grid grid-rows-2 grid-cols-2">
          <div className="w-full bg-white">
          <h1 className="flex justify-start w-2/4 text-black">Sobre nosotros</h1>
          <p></p>
          </div>
          <div className="w-full">
          <img className='w-2/4 h-[282px] bg-none max-sm:w-[200px] max-sm:h-[200px]' src={bigShoe1} />
          </div>
</div>
<div className="w-full bg-gray-500 grid grid-rows-2 grid-cols-2">
<div className="w-full">
          <img className='w-2/4 h-[282px] bg-none max-sm:w-[200px] max-sm:h-[200px]' src={bigShoe1} />
          </div>
          <div className="w-full bg-white">
          <h1 className="flex justify-start w-2/4 text-black">Sobre nosotros</h1>
          <p></p>
          </div>
</div>

<div className="w-full bg-gray-500 grid grid-rows-2 grid-cols-2">
          <div className="w-full bg-white">
          <h1 className="flex justify-start w-2/4 text-black">Sobre nosotros</h1>
          <p></p>
          </div>
          <div className="w-full">
          <img className='w-2/4 h-[282px] bg-none max-sm:w-[200px] max-sm:h-[200px]' src={bigShoe1} />
          </div>
</div>
        </section>
  )
}

export default AboutUs