export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/products" },
  { label: "Sobre Nosotros", href: "/sobreNosotros" },
  { label: "Contacto", href: "#contacto"},
];

import { facebook, instagram, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Tazas",
        link: "/tazas"
    },
    {
        imgURL: shoe5,
        name: "Remeras",
        link: "/remeras"
    },
    {
        imgURL: shoe6,
        name: "Banderas",
        link: "/banderas"
    },
    {
        imgURL: shoe7,
        name: "Gorras",
        link: "/gorras"
    },
    {
        imgURL: shoe4,
        name: "Banners",
        link: "/products"
    },
    {
        imgURL: shoe5,
        name: "Ploteados",
        link: "/ploteados"
    },
    {
        imgURL: shoe6,
        name: "Botineros",
        link: "/botineros"
    },
    {
        imgURL: shoe7,
        name: "Mochilas",
        link: "/mochilas"
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
    { name: "Mochilas", link: "/mochilas" }
  ];
  
  {/* ADD PHOTOS FROM DIFFERENT PRODUCTS HERE, IMPORT THEM FIRST */}
  export const productData = {
    Tazas: [shoe4, shoe4, shoe4, shoe4, shoe4, shoe4, shoe4, shoe4, shoe4, shoe4, shoe4, shoe4],
    Remeras: [shoe5, shoe5, shoe5],
    Banderas: [shoe6, shoe6, shoe6],
    Gorras: [shoe7],
    Banners: [shoe7],
    Ploteados: [shoe7],
    Botineros: [shoe7],
    Mochilas: [shoe7],
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
            { name: "Mochilas", link: "/products" }
          ],
    },
    {
        title: "¿Querés contarnos tu idea?",
        links: [
            { name: "duality.creative.design@gmail.com", link: "mailto:duality.creative.design@gmail.com" },
            { name: "3455-487964", link: "<tel:+5493455487964>"},
            {name: `Mandanos un WhatsApp`, link: "https://api.whatsapp.com/send/?phone=543455487964&text&type=phone_number&app_absent=0"},
            {name: "Sarmiento 851"},
            {name: "Villaguay, Entre Rios, Argentina."}
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", href:"https://www.facebook.com/profile.php?id=100083092130735"},
    { src: twitter, alt: "twitter logo", href:"https://api.whatsapp.com/send/?phone=543455487964&text&type=phone_number&app_absent=0" },
    { src: instagram, alt: "instagram logo", href:"https://www.instagram.com/duality_personaliza2/" },
];