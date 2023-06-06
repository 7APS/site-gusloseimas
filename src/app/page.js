import ImageCarousel from "../components/ImageCarousel";
import Image from "next/image";

import logo from "../../public/logoBigger.png";
import bolo1 from "../../public/products/bolo1.png";
import bolo2 from "../../public/products/bolo2.png";
import bolo3 from "../../public/products/bolo3.png";
import boloVulcao1 from "../../public/products/boloVulcao1.png";
import boloVulcao2 from "../../public/products/boloVulcao2.png";
import brownie1 from "../../public/products/brownie1.png";
import brownie2 from "../../public/products/brownie2.png";
import docinhos1 from "../../public/products/docinhos1.png";
import trufas from "../../public/products/trufas.png";
import noImage from "../../public/products/noImage.png";

export default function Home() {
  function productSection(imgSrx, imgAlt, itemsList) {
    return (
      <>
        <div className="flex justify-center">
          <Image
            src={imgSrx}
            alt={imgAlt}
            width={320}
            height={112}
            className="flex w-80 object-cover mb-4 rounded"
          />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {productSectionItem(itemsList)}
        </ul>
      </>
    )
  }

  function productSectionItem(items) {
    return items.map(({ imgs, description }, index) => (
      <li key={`key-${index}`} className="bg-white rounded shadow p-4">
        {imgs &&
          <ImageCarousel images={
            imgs.map(i => {
              return {
                src: i.imgSrc,
                name: i.name
              }
            })
          } />
        }

        <h3 className="text-lg mb-2 mt-3 text-red-400 font-bold">{imgs?.[0]?.name}</h3>
        <p className="text-gray-600">{description}</p>
      </li>
    ))
  }

  function renderSocial(href, src, text) {
    return (
      <a
        href={href}
        className="text-purple-500 hover:text-purple-700 transform hover:translate-y-1 transition-all duration-200"
      >
        <Image
          src={src}
          alt={text}
          width={100}
          height={50}
        />
      </a>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-serif">
      <div className="w-full bg-rose-100 py-16 justify-center flex">
        <Image
          src={logo}
          alt="Banner"
          className="w-auto h-80 flex"
        />
      </div>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Sobre</h2>
          <p className="text-gray-600">
            {/* Bem-vindo à Gusloseimas, a loja de doces mais doce do mundo! Temos uma ampla
            variedade de doces deliciosos para satisfazer todos os seus desejos açucarados.
            Visite nossa loja online e desfrute de uma explosão de sabores! */}

            A Gusloseimas foi criada por uma mãe que ama cozinhar e decidiu estudar e se aprimorar na confeitaria.<br />
            Nosso objetivo é levar doçura e felicidade em cada mordida, deixando a vida de nossos clientes ainda mais doce.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Produtos</h2>

          {/* BOLOS */}
          {productSection("/products/separators/bolos.png", "bolos", [
            {
              imgs: [{
                imgSrc: bolo1,
                name: "Bolo Ferreira Rocher",
              },
              ],
              description: "Massa de chocolate 50%, recheado de brigadeiro crocante (chocolate nobre blend e amendoin) e coberto por creme de nutella, decorado com 4 ferrero rocher. Para quem gosta de algo menos doce é perfeito.",
            },
            {
              imgs: [{
                imgSrc: bolo2,
                name: "Bolo Kinder Bueno",
              }],
              description: "Massa fofinha de chocolate 50% e recheio, Creme Kinder Bueno da casa e brigadeiro de ninho, coberto por ganache de chocolate branco e decorado com kinder bueno.",
            },
            {
              imgs: [{
                imgSrc: noImage,
                name: "Quatro Leites com Morango",
              }],
              description: "Massa branca, úmida, sabor baunilha,  recheada com morangos picados e creme 4 leites bem cremoso.",
            },
            {
              imgs: [{
                imgSrc: noImage,
                name: "Dois Amores",
              }],
              description: "Massa fofinha recheada com os tradicionais brigadeiro branco e brigadeiro preto. Ambos feitos com chocolate nobre. Coberta com ganache branca e preta.",
            }
          ])}

          {/* BOLOS Vulcao*/}
          {productSection("/products/separators/bolos_volcao.png", "bolos volcao", [
            {
              imgs: [{
                imgSrc: boloVulcao1,
                name: "Red Velvett",
              }],
              description: "Massa vermelhinha e fofinha coberta por creme de cream cheese.",
            },
            {
              imgs: [{
                imgSrc: boloVulcao2,
                name: "Ninho com Nutella"
              }],
              description: "Massa de chocolate 50% cacau com vulcão cheio de Nutella e cobertura de brigadeiro de leite ninho.",
            },
            {
              imgs: [{
                imgSrc: noImage,
                name: "Chocolate",
              }],
              description: "Massa de cacau 100% coberto por brigadeiro de chocolate nobre ao leite e raspas de chocolate.",
            }
          ])}

          {/* Brownie*/}
          {productSection("/products/separators/brownie.png", "Brownie", [
            {
              imgs: [{
                imgSrc: brownie1,
                name: "Red Velvett",
              }],
              description: "Massa com chocolate branco nobre e creme de cream cheese.",
            },
            {
              imgs: [{
                imgSrc: brownie2,
                name: "Chocolate",
              }],
              description: "Massa com chocolate meio amargo nobre, nozes e brigadeiro ao leite.",
            }
          ])}

          {/* Sobremesas*/}
          {productSection("/products/separators/sobremesas.png", "Sobremesas", [
            {
              imgs: [{
                imgSrc: noImage,
                name: "Pavê",
              }],
              description: "creme 4 leites, bolacha champagne e cobertura de ganache de chocolate blend.",
            },
            {
              imgs: [{
                imgSrc: noImage,
                name: "Bombom aberto de Uva ou morango",
              }],
              description: "Creme branco coberto por uvas verdes ou morangos (conforme preferir) e ganache de chocolate blend.",
            },
            {
              imgs: [{
                imgSrc: noImage,
                name: "Meio a meio",
              }],
              description: "Creme de leite ninho com ganache de chocolate ao leite.",
            }
          ])}

          {/* Trufas*/}
          {productSection("/products/separators/trufas.png", "Trufas", [
            {
              imgs: [{
                imgSrc: trufas,
                name: "Trufas de vários sabores",
              }],
              description: "Chocolate, Chocolate branco, Morango, Maracujá ,Napolitano, Meio amargo.",
            },
          ])}

          {/* Docinhos*/}
          {productSection("/products/separators/docinhos.png", "Docinhos", [
            {
              imgs: [{
                imgSrc: docinhos1,
                name: "Docinhos de vários sabores",
              }],
              description: "Brigadeiro, Maracujá, Morango, Café, Sensação, Ninho, Ninho c/ nutella, Meio amargo.",
            },
          ])}
        </section>

        <section className="mb-8 bg:white">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Redes Sociais</h2>
          <div className="flex space-x-4">
            {renderSocial('https://www.facebook.com/docesgus', '/facebook.png', 'Facebeook')}
            {renderSocial('https://www.instagram.com/gusloseimas', '/instagram.png', 'Instagram')}
            {renderSocial('https://www.tiktok.com/@gusloseimas?lang=pt-BR', '/whatsapp.png', 'Whatsapp')}
            {renderSocial('https://api.whatsapp.com/send?phone=5545988214352&fbclid=PAAabaHtAwzbeeED42Ho_xvyZXH_5bEOVxvUtHlFGOms50S0QGviZc_31YDTE', '/tiktok.png', 'Tiktok')}
          </div>
        </section>
      </div>
    </div>
  )
}
