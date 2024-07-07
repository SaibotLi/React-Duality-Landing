import { copyrightSign } from "../assets/icons";
import logo from "../assets/logo.png";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">

      {/* Logo and description */}
      <div className="flex justify-center">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-start gap-20">
        <div className="flex flex-col items-center mb-8 lg:mb-0 lg:w-1/3">
  <a className="self-center" href="/">
    <img src={logo} width={150} height={46} alt="Logo" />
  </a>
  <p className="mt-6 text-center text-base leading-7 text-white-400 sm:max-w-sm">
    Te ofrecemos una personalización de alta calidad con el mejor precio que vas a encontrar en el mercado.
  </p>
  <div className='flex justify-center items-center gap-5 mt-8'>
    {socialMedia.map((icon) => (
      <div
        className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
        key={icon.alt}
      >
        <a href={icon.href}>
        <img src={icon.src} alt={icon.alt} width={24} height={24} />
        </a>
      </div>
    ))}
  </div>
</div>

          {/* Redirect to /Products */}
          <div className='flex flex-1 flex-wrap justify-around lg:gap-10 gap-20 lg:w-1/3'>
            {footerLinks.map((section) => (
              <div key={section.title} className="mb-8 lg:mb-0 text-center">
                <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className='mt-3 font-montserrat text-base leading-normal text-white-400 text-center'
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex justify-center mt-24">
        <div className="w-full max-w-7xl lg:w-1/3 text-center text-white-400">
          <div className="flex items-center justify-center gap-2 font-montserrat cursor-pointer">
            <img
              src={copyrightSign}
              alt="copyright sign"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <p className="text-sm">Copyright. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;