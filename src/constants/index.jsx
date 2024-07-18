export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/products" },
  { label: "Sobre Nosotros", href: "/sobreNosotros" },
  { label: "Contacto", href: "#contacto"},
];

import { facebook, instagram, twitter } from "../assets/icons";
import { thumbnailImg1, thumbnailImg2, thumbnailImg3 } from "../assets/images";
import { accesorio1, accesorio2, bandera1, bandera2, banner, gorra1, mochila2, ploteado1, remera2, remeraF1, remeraT1, sobreNosotros1, taza1, taza2 } from "../assets/images";
export const thumbnails = [
    {
        thumbnail: thumbnailImg1,
        bigImg: thumbnailImg1,
    },
    {
        thumbnail: thumbnailImg2,
        bigImg: thumbnailImg2,
    },
    {
        thumbnail: thumbnailImg3,
        bigImg: thumbnailImg3,
    },
];

export const products = [
    {
        imgURL: taza1,
        name: "Tazas",
        link: "/tazas"
    },
    {
        imgURL: remera2,
        name: "Remeras",
        link: "/remeras"
    },
    {
        imgURL: bandera2,
        name: "Banderas",
        link: "/banderas"
    },
    {
        imgURL: gorra1,
        name: "Gorras",
        link: "/gorras"
    },
    {
        imgURL: banner,
        name: "Banners",
        link: "/products"
    },
    {
        imgURL: ploteado1,
        name: "Ploteados",
        link: "/ploteados"
    },
    {
        imgURL: mochila2,
        name: "Botineros",
        link: "/botineros"
    },
    {
        imgURL: accesorio2,
        name: "Accesorios",
        link: "/productos"
    }
];

export const productItems = [
    { name: "Tazas", link: "/tazas" },
    { name: "Remeras", link: "/remeras" },
    { name: "Banderas", link: "/banderas" },
    { name: "Gorras", link: "/gorras" },
    { name: "Banners", link: "/banners" },
    { name: "Ploteados", link: "/ploteados" },
    { name: "Botineros", link: "/botineros" },
    { name: "Accesorios", link: "/mochilas" }
  ];
  
  {/* ADD PHOTOS FROM DIFFERENT PRODUCTS HERE, IMPORT THEM FIRST */}
  export const productData = {
    Tazas: [taza1, taza2],
    Remeras: [remeraF1, remeraT1, remera2],
    Banderas: [bandera1, bandera2],
    Gorras: [gorra1],
    Banners: [banner],
    Ploteados: [sobreNosotros1],
    Botineros: [mochila2],
    Accesorios: [accesorio1, accesorio2],
  };
export const footerLinks = [
    {
        title: "Productos",
        links: [
            { name: "Tazas", link: "/products" },
            { name: "Remeras", link: "/products" },
            { name: "Banderas", link: "/products" },
            { name: "Gorras", link: "/products" },
            { name: "Banners", link: "/products" },
            { name: "Ploteados", link: "/products" },
            { name: "Botineros", link: "/products" },
            { name: "Accesorios", link: "/products" }
          ],
    },
    {
        title: "¿Querés contarnos tu idea?",
        links: [
            { name: "duality.creative.design@gmail.com", link: "mailto:duality.creative.design@gmail.com" },
            { name: "3455-487964", link: "<tel:+5493455487964>"},
            {name: `Mandanos un WhatsApp`, link: "https://api.whatsapp.com/send/?phone=543455487964&text&type=phone_number&app_absent=0"},
            {name: "Sarmiento 851"},
            {name: "Villaguay, Entre Rios, Argentina"}
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", href:"https://www.facebook.com/profile.php?id=100083092130735"},
    { src: twitter, alt: "twitter logo", href:"https://api.whatsapp.com/send/?phone=543455487964&text&type=phone_number&app_absent=0" },
    { src: instagram, alt: "instagram logo", href:"https://www.instagram.com/duality_personaliza2/" },
];