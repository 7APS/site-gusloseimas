"use client";

import React from "react";

import ImageCarousel from "../components/ImageCarousel";
import SocialShare from "../components/SocialShare";
import Image from "next/image";
import "./style.css";

import icon from "./favicon.ico";
import logo from "../../public/logoBigger.png";
import bichoDePe_1 from "../../public/products/bichoDePe_1.jpg";
import bichoDePe_2 from "../../public/products/bichoDePe_2.jpg";
import newYorkCity_1 from "../../public/products/newYorkCity_1.1.jpg";
import newYorkCity_2 from "../../public/products/newYorkCity_2.1.jpg";
import triploChocolate_2 from "../../public/products/triploChocolate_2.1.jpg";
import triploChocolate_3 from "../../public/products/triploChocolate_3.jpg";
import triploChocolate_4 from "../../public/products/triploChocolate_4.jpg";
import nutella_1 from "../../public/products/nutella_1.jpg";
import nutella_2 from "../../public/products/nutella_2.jpg";
import milhoCoco_1 from "../../public/products/milhoCoco_1.jpg";
import pacoquinha_1 from "../../public/products/pacoquinha_1.jpg";
import pacoquinha_2 from "../../public/products/pacoquinha_2.jpg";
import katia from "../../public/katia.jpeg";
// import noImage from "../../public/products/noImage.png";

export default function Home() {

    function productSection(imgSrx, imgAlt, itemsList) {
        return (
            <>
                {/*<div className="flex justify-center pt-8 pb-10">*/}
                {/*  <Image*/}
                {/*    src={imgSrx}*/}
                {/*    alt={imgAlt}*/}
                {/*    width={320}*/}
                {/*    height={112}*/}
                {/*    className="flex w-80 object-cover mb-4 rounded"*/}
                {/*  />*/}
                {/*</div>*/}
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
                    {productSectionItem(itemsList)}
                </ul>
            </>
        );
    }

    function productSectionItem(items) {
        return items.map(({imgs, description}, index) => (
            <li
                key={`key-${index}`}
                className="bg-white rounded shadow p-4 text-center"
            >
                {imgs && (
                    <ImageCarousel
                        description={description}
                        images={imgs.map((i) => {
                            return {
                                src: i.imgSrc,
                                name: i.name,
                            };
                        })}
                    />
                )}

                <h3 className="text-lg mb-2 mt-3 text-red-400 font-bold">
                    {imgs?.[0]?.name}
                </h3>
                <p className="text-gray-600">{description}</p>
            </li>
        ));
    }

    function renderSocial(href, src, text, width = 100, height = 50) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visite nossa página no ${text}`}
                className="text-purple-500 hover:text-purple-700 transform hover:translate-y-1 transition-all duration-200"
            >
                <Image src={src} alt={`Ícone do ${text}`} width={width} height={height}/>
            </a>
        );
    }

    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">
            {/* WhatsApp Floating Button */}
            <a
                href="https://api.whatsapp.com/send?phone=5545988214352&text=Olá! Gostaria de fazer um pedido."
                target="_blank"
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
                aria-label="Fazer pedido pelo WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path
                        d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span className="ml-2 hidden sm:inline">Fazer Pedido</span>
            </a>

            {/* Mobile header with title */}
            <div className="mobile-header md:hidden">
                <Image
                    src={icon}
                    alt="Gusloseimas Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                />
                <span className="mobile-header-title">Gusloseimas</span>

                {/* Mobile menu button */}
                <button
                    className="mobile-menu-button md:hidden ml-auto"
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* menu */}
            <nav className={`main-nav ${menuOpen ? 'menu-open' : 'menu-closed'}`} aria-label="Navegação principal">
                <button
                    className="mobile-menu-button md:hidden absolute right-4 top-4"
                    onClick={toggleMenu}
                    aria-label="Fechar menu"
                    style={{zIndex: 70}}
                >
                    ✕
                </button>
                <ul>
                    <li>
                        <a
                            href="#sobre"
                            aria-label="Ir para seção Sobre"
                            onClick={() => setMenuOpen(false)}
                        >
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a
                            href="#historia"
                            aria-label="Ir para seção História"
                            onClick={() => setMenuOpen(false)}
                        >
                            História
                        </a>
                    </li>
                    <li>
                        <a
                            href="#produtos"
                            aria-label="Ir para seção Produtos"
                            onClick={() => setMenuOpen(false)}
                        >
                            Produtos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#eventos"
                            aria-label="Ir para seção Festas e Eventos"
                            onClick={() => setMenuOpen(false)}
                        >
                            Festas e Eventos
                        </a>
                    </li>
                </ul>
            </nav>

            {/* banner */}
            <div className="w-full h-screen bg-rose-100 py-40 justify-center flex">
                <Image
                    src={logo}
                    alt="Banner"
                    className="w-auto h-96 flex transition duration-300 transform hover:scale-110"
                />
            </div>

            {/* Parallax 1 */}
            <section className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img">
                <div className="p-5 text-2xl text-white bg-red-300 bg-opacity-50 rounded-xl">
                    Deixando sua vida ainda mais doce! 😋😋
                </div>
            </section>

            {/* sobre e história */}
            <section className="bg-rose-100 mb-8 container">
                <div className="container mx-auto px-4 py-8 font-sans max-w-screen-md">
                    <h2 id="sobre"
                        className="text-4xl font-bold mb-4 text-red-500 font-pacifico text-center relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-red-300 after:rounded-full">
                        Sobre Nós
                    </h2>
                    <div className="grid sm:flex justify-items-center">
                        <p className="text-gray-600 pt-3">
                            Oi, Eu sou a <b>Kátia</b>, mãe do Gus, esposa do Luiz além de
                            mulher, psicóloga, de peixes, terráqueo e apaixonada por cozinhar.
                            <br/>
                            <br/>
                            A Gusloseimas foi criada por uma mãe que ama cozinhar e decidiu
                            estudar e se aprimorar na confeitaria.
                            <br/>
                            Nosso objetivo é levar doçura e felicidade em cada mordida,
                            deixando a vida de nossos clientes ainda mais doce.
                        </p>
                        <br/>
                        <Image
                            src={katia}
                            alt="Foto da Kátia, proprietária da Gusloseimas"
                            width={160}
                            height={160}
                            className="!w-40 !h-40 object-fill mt-4 rounded-full "
                        />
                    </div>
                    <br/>
                    <br/>
                    <h3 id="historia"
                        className="text-4xl font-bold mb-4 text-red-500 font-pacifico text-center relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-red-300 after:rounded-full">
                        História do Cookie
                    </h3>
                    <div className="grid sm:flex justify-items-center">
                        <p className="text-gray-600 text-justify">
                            Os cookies têm uma história fascinante que remonta à Idade Média.
                            <br/>
                            <br/>
                            Naquela época, os biscoitos já eram apreciados como pequenos pães
                            crocantes, assados duas vezes para prolongar sua vida útil.
                            <br/>O termo &quot;biscoito&quot; deriva do latim, onde
                            &quot;bis&quot; significa dois e &quot;coctus&quot; significa
                            cozido.
                            <br/>
                            No século XVII, na Inglaterra, os cozinheiros descobriram por
                            acaso que um pedaço de massa usado para testar a temperatura do
                            forno se transformava em deliciosos biscoitos. Logo, esses
                            &quot;pequenos bolos&quot; passaram a ser feitos intencionalmente,
                            evitando o desperdício de massa.
                            <br/>
                            <br/>O termo <b>&quot;cookie&quot;</b> tem origem na palavra
                            holandesa &quot;koekje&quot;, que significa &quot;pequeno
                            bolo&quot;.
                            <br/>
                            Os cookies se tornaram populares na Europa e, posteriormente,
                            foram levados para os Estados Unidos pelos colonizadores ingleses.
                            Foi lá que eles evoluíram para a receita de cookies que conhecemos
                            e amamos hoje.
                            <br/>
                            Já os cookies com gotas de chocolate foram inventados pela
                            americana Ruth Wakefield, em 1930. Ela e seu marido tinham um
                            pequeno restaurante em Boston e Ruth resolveu experimentar uma
                            nova receita de bolo colocando pedacinhos de chocolate meio
                            amargo.
                        </p>
                    </div>
                    <br/>
                </div>
            </section>

            {/* Parallax 2 */}
            <section className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img-2"></section>

            {/* Galeria de Fotos */}
            <div className="container mx-auto px-4 py-12 font-sans bg-purple-50 ">
                <section className="mb-8">
                    <h2 id="galeria"
                        className="text-4xl font-bold mb-8 text-red-500 text-center font-pacifico relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-red-300 after:rounded-full">
                        Galeria de Eventos
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="relative group">
                            <Image
                                src="/products/triploChocolate_3.jpg"
                                alt="Mesa de doces para aniversário"
                                width={300}
                                height={300}
                                className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:opacity-90"
                                loading="lazy"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                                <p className="text-white opacity-0 group-hover:opacity-100 font-semibold text-center px-4">Aniversário de 15 anos</p>
                            </div>
                        </div>

                        <div className="relative group">
                            <Image
                                src="/products/nutella_1.jpg"
                                alt="Mesa de doces para casamento"
                                width={300}
                                height={300}
                                className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:opacity-90"
                                loading="lazy"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                                <p className="text-white opacity-0 group-hover:opacity-100 font-semibold text-center px-4">Casamento ao ar livre</p>
                            </div>
                        </div>

                        <div className="relative group">
                            <Image
                                src="/products/newYorkCity_1.jpg"
                                alt="Cookies para evento corporativo"
                                width={300}
                                height={300}
                                className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:opacity-90"
                                loading="lazy"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                                <p className="text-white opacity-0 group-hover:opacity-100 font-semibold text-center px-4">Evento corporativo</p>
                            </div>
                        </div>

                        <div className="relative group">
                            <Image
                                src="/products/pacoquinha_1.jpg"
                                alt="Mesa de doces para chá de bebê"
                                width={300}
                                height={300}
                                className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:opacity-90"
                                loading="lazy"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                                <p className="text-white opacity-0 group-hover:opacity-100 font-semibold text-center px-4">Chá de bebê</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-gray-600 mb-4">
                            Veja como nossos produtos transformam qualquer evento em um momento especial.
                            Entre em contato para criar uma experiência personalizada para sua celebração!
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <a
                                href="https://api.whatsapp.com/send?phone=5545988214352&text=Olá! Vi a galeria de eventos e gostaria de mais informações."
                                className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-all duration-300"
                                target="_blank"
                                aria-label="Solicitar informações sobre eventos pelo WhatsApp"
                            >
                                Quero um evento assim!
                            </a>

                            <div className="mt-4 md:mt-0">
                                <SocialShare
                                    url="https://www.gusloseimas.com.br/#galeria"
                                    title="Confira os deliciosos produtos da Gusloseimas para eventos!"
                                    description="Cookies e bolos artesanais para tornar seu evento ainda mais especial. Confira a galeria de eventos da Gusloseimas."
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Festas e Eventos */}
            <div className="container mx-auto px-4 py-12 font-sans bg-pink-100">
                <section className="mb-8">
                    <h2 id="eventos"
                        className="text-4xl font-bold mb-6 text-red-500 text-center font-pacifico relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-red-300 after:rounded-full">
                        Festas e Eventos
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-bold mb-4 text-red-400">Serviços Personalizados</h3>
                            <p className="text-gray-600 mb-4">
                                Transforme sua celebração em um momento inesquecível com nossos doces artesanais.
                                Oferecemos opções personalizadas para diversos tipos de eventos:
                            </p>
                            <ul className="list-disc inline-block text-left text-gray-600 mb-4">
                                <li>Aniversários e festas infantis</li>
                                <li>Casamentos e noivados</li>
                                <li>Eventos corporativos</li>
                                <li>Chás de bebê</li>
                                <li>Formaturas e comemorações</li>
                            </ul>
                            <p className="text-gray-600">
                                Todos os nossos produtos são feitos com ingredientes selecionados e muito carinho,
                                garantindo sabor e qualidade excepcionais para seu evento.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-bold mb-4 text-red-400">Como Encomendar</h3>
                            <p className="text-gray-600 mb-4">
                                Fazer seu pedido é simples e rápido:
                            </p>
                            <ol className="list-decimal inline-block text-left text-gray-600 mb-4">
                                <li>Entre em contato pelo WhatsApp</li>
                                <li>Informe a data e tipo do evento</li>
                                <li>Escolha os produtos desejados</li>
                                <li>Defina a quantidade necessária</li>
                                <li>Combine a entrega ou retirada</li>
                            </ol>
                            <div className="mt-6">
                                <a
                                    href="https://api.whatsapp.com/send?phone=5545988214352&text=Olá! Gostaria de fazer um orçamento para um evento."
                                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center w-full"
                                    target="_blank"
                                    aria-label="Solicitar orçamento pelo WhatsApp"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="mr-2">
                                        <path
                                            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                    </svg>
                                    Solicitar Orçamento
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* produtos */}
            <div className="container mx-auto px-4 py-8 font-sans bg-red-200">
                <section className="mb-8">
                    <h2 id="produtos"
                        className="text-4xl font-bold mb-4 text-red-500 text-center font-pacifico relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-red-300 after:rounded-full">
                        Cookies
                    </h2>

                    {/* Cookies */}
                    {productSection("/products/separators/cookies.png", "cookies", [
                        {
                            imgs: [
                                {
                                    imgSrc: nutella_1,
                                    name: "Nutella",
                                },
                                {
                                    imgSrc: nutella_2,
                                    name: "Nutella por dentro",
                                },
                            ],
                            description:
                                "Massa tradicional de baunilha, amanteigada, com gotas de chocolate e muita, mais muita Nutella. Sensacional! O queridinho por onde passa.",
                        },
                        {
                            imgs: [
                                {
                                    imgSrc: newYorkCity_1,
                                    name: "New York City",
                                },
                                {
                                    imgSrc: newYorkCity_2,
                                    name: "New York City por dentro",
                                },
                            ],
                            description:
                                "O queridinho americano, massa de baunilha, amanteigada, com muitas gotas de chocolate meio amargo e castanhas, extremamente crocante por fora e cremoso por dentro.",
                        },
                        {
                            imgs: [
                                {
                                    imgSrc: triploChocolate_3,
                                    name: "Triplo Chocolate",
                                },
                                {
                                    imgSrc: triploChocolate_2,
                                    name: "Triplo Chocolate por dentro",
                                },
                                {
                                    imgSrc: triploChocolate_4,
                                    name: "Triplo Chocolate por dentro",
                                },
                            ],
                            description:
                                "Massa de cacau black com muitas gotas de chocolate branco e recheado com chocolate ao leite. A união perfeita de chocolates. Também temos a versão com gotas de chocolate ao leite e recheio de chocolate branco. Não tem como não amar esse trio.",
                        },
                        {
                            imgs: [
                                {
                                    imgSrc: pacoquinha_1,
                                    name: "Paçoquita",
                                },
                                {
                                    imgSrc: pacoquinha_2,
                                    name: "Paçoquita por dentro",
                                },
                            ],
                            description:
                                "Massa com farinha de amendoim, cheia de dadinhos, recheada com brigadeiro de paçoca. É amendoim que não acaba mais, delicioso.",
                        },
                        {
                            imgs: [
                                {
                                    imgSrc: bichoDePe_1,
                                    name: "Bicho de pé",
                                },
                                {
                                    imgSrc: bichoDePe_2,
                                    name: "Bicho de pé por dentro",
                                },
                            ],
                            description:
                                "Massa cor de rosa repleta de gotas de chocolate branco recheada com brigadeiro bicho de pé. Uma perfeição só.",
                        },
                        {
                            imgs: [
                                {
                                    imgSrc: milhoCoco_1,
                                    name: "Milho com Coco",
                                },
                            ],
                            description:
                                "Massa de duba com gotas de chocolate, recheado com brigadeiro de milho verde com coco. Ele te surpreende em cada mordida.",
                        },
                    ])}
                </section>
            </div>

            {/* Depoimentos */}
            <div className="container mx-auto px-4 py-12 font-sans bg-yellow-50">
                <section className="mb-8">
                    <h2 id="depoimentos"
                        className="text-4xl font-bold mb-8 text-red-500 text-center font-pacifico relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-red-300 after:rounded-full">
                        O Que Nossos Clientes Dizem
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="h-12 w-12 rounded-full bg-red-200 flex items-center justify-center text-red-500 font-bold text-xl">
                                    M
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-semibold text-lg text-red-300">Maria Silva</h3>
                                    <div className="flex text-yellow-400">
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                &ldquo;Os cookies da Gusloseimas foram o destaque da festa de aniversário do meu filho!
                                Todos os convidados pediram o contato. O de Nutella é simplesmente divino!&rdquo;
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-500 font-bold text-xl">
                                    J
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-semibold text-lg text-blue-300">João Oliveira</h3>
                                    <div className="flex text-yellow-400">
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                &ldquo;Encomendei para um evento corporativo e foi um sucesso absoluto.
                                Atendimento impecável, entrega pontual e produtos de altíssima qualidade.
                                Recomendo fortemente!&rdquo;
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center text-green-500 font-bold text-xl">
                                    C
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-semibold text-lg text-green-300">Carla Mendes</h3>
                                    <div className="flex text-yellow-400">
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                &ldquo;Fiz uma surpresa para meu marido com os cookies de triplo chocolate e ele amou!
                                O sabor é incrível e o atendimento da Kátia é sempre carinhoso e atencioso.
                                Cliente fiel!&rdquo;
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* social */}
            <section className="mb-8 bg:white pt-10">
                <div id="social" className="flex space-x-4">
                    {renderSocial(
                        "https://www.facebook.com/gusloseimas.cookies",
                        "/facebook.png",
                        "Facebeook"
                    )}
                    {renderSocial(
                        "https://www.instagram.com/gusloseimas",
                        "/instagram.png",
                        "Instagram"
                    )}
                    {renderSocial(
                        "https://api.whatsapp.com/send?phone=5545988214352&fbclid=PAAabaHtAwzbeeED42Ho_xvyZXH_5bEOVxvUtHlFGOms50S0QGviZc_31YDTE",
                        "/whatsapp.png",
                        "Whatsapp"
                    )}
                    {renderSocial(
                        "https://www.tiktok.com/@gusloseimas?lang=pt-BR",
                        "/tiktok.png",
                        "Tiktok"
                    )}
                </div>
            </section>

            <footer className="py-4 text-center">
                <p className="text-gray-500">
                    <a href="https://www.luizcasara.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
                        7APS
                    </a>
                    {" - Copyright © "}{new Date().getFullYear()}{" Gusloseimas. Todos os direitos reservados."}
                </p>
            </footer>
        </div>
    );
}
