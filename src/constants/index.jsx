export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/products" },
  { label: "Sobre Nosotros", href: "/sobreNosotros" },
  { label: "Contacto", href: "/contacto"},
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
        name: "Tazas"
    },
    {
        imgURL: shoe5,
        name: "Remeras"
    },
    {
        imgURL: shoe6,
        name: "Banderas"
    },
    {
        imgURL: shoe7,
        name: "Gorras"
    },
    {
        imgURL: shoe4,
        name: "Banners"
    },
    {
        imgURL: shoe5,
        name: "Ploteados"
    },
    {
        imgURL: shoe6,
        name: "Botineros"
    },
    {
        imgURL: shoe7,
        name: "Mochilas"
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
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];