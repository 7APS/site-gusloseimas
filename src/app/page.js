import ImageCarousel from "../components/ImageCarousel";

import bolo1 from "../../public/products/bolo1.png";
import bolo2 from "../../public/products/bolo2.jpg";
import bolo3 from "../../public/products/bolo3.png";
import boloVulcao1 from "../../public/products/boloVulcao1.png";
import brownie2 from "../../public/products/brownie2.png";
import docinhos1 from "../../public/products/docinhos1.png";

export default function Home() {
  function productSection(imgSrx, imgAlt, itemsList) {
    return (
      <>
        <div className="flex justify-center">
          <img
            src={imgSrx}
            alt={imgAlt}
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
    return items.map(({ imgs, description }) => (
      <li className="bg-white rounded shadow p-4">
        {/* <img
          src={imgSrc}
          alt={name}
          className="w-full h-48 object-cover mb-4 rounded"
        /> */}
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-serif">
      <div className="w-full bg-rose-100 py-16 justify-center flex">
        <img
          src="/logoBigger.png"
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
                imgSrc: bolo3,
                name: "Bolo Kinder Bueno",
              }],
              description: "Massa fofinha de chocolate 50% e recheio, Creme Kinder Bueno da casa e brigadeiro de ninho, coberto por ganache de chocolate branco e decorado com kinder bueno.",
            },
            {
              imgs: [{
                imgSrc: bolo3,
                name: "Quatro Leites com }]Morango",
              }],
              description: "Massa branca, úmida, sabor baunilha,  recheada com morangos picados e creme 4 leites bem cremoso.",
            },
            {
              imgs: [{
                imgSrc: bolo3,
                name: "Dois Amores",
              }],
              description: "Massa fofinha recheada com os tradicionais brigadeiro branco e brigadeiro preto. Ambos feitos com chocolate nobre. Coberta com ganache branca e preta.",
            }
          ])}

          {/* BOLOS Vulcao*/}
          {productSection("/products/separators/bolos_volcao.png", "bolos volcao", [
            {
              imgs: [{
                imgSrc: bolo3,
                name: "Red Velvett",
              }],
              description: "Massa vermelhinha e fofinha coberta por creme de cream cheese.",
            },
            {
              imgs: [{
                imgSrc: boloVulcao1,
                name: "Ninho com Nutella"
              }],
              description: "Massa de chocolate 50% cacau com vulcão cheio de Nutella e cobertura de brigadeiro de leite ninho.",
            },
            {
              imgs: [{
                imgSrc: bolo3,
                name: "Chocolate",
              }],
              description: "Massa de cacau 100% coberto por brigadeiro de chocolate nobre ao leite e raspas de chocolate.",
            }
          ])}

          {/* Brownie*/}
          {productSection("/products/separators/brownie.png", "Brownie", [
            {
              imgs: [{
                imgSrc: bolo3,
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
                imgSrc: bolo3,
                name: "Pavê",
              }],
              description: "creme 4 leites, bolacha champagne e cobertura de ganache de chocolate blend.",
            },
            {
              imgs: [{
                imgSrc: bolo3,
                name: "Bombom aberto de U}]va ou morango",
              }],
              description: "Creme branco coberto por uvas verdes ou morangos (conforme preferir) e ganache de chocolate blend.",
            },
            {
              imgs: [{
                imgSrc: bolo3,
                name: "Meio a meio",
              }],
              description: "Creme de leite ninho com ganache de chocolate ao leite.",
            }
          ])}

          {/* Trufas*/}
          {productSection("/products/separators/trufas.png", "Trufas", [
            {
              imgs: [{
                imgSrc: bolo3,
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
                name: "Trufas de vários sabores",
              }],
              description: "Brigadeiro, Maracujá, Morango, Café, Sensação, Ninho, Ninho c/ nutella, Meio amargo.",
            },
          ])}

          {/* Informações extra
          {productSection("/products/separators/info.png", "Informações", [
            {
              imgSrc: null,
              name: "Trufas de vários sabores",
              description: "Brigadeiro, Maracujá, Morango, Café, Sensação, Ninho, Ninho c/ nutella, Meio amargo.",
            },
          ])} */}
        </section>

        <section className="mb-8 bg:white">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Redes Sociais</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/docesgus"
              className="text-purple-500 hover:text-purple-700 transform hover:translate-y-1 transition-all duration-200"
            >
              <img
                src="/facebook.png"
                className="w-16 h-16 fill-current"
                alt="face"
              />
            </a>
            <a
              href="https://www.instagram.com/gusloseimas/"
              className="text-purple-500 hover:text-purple-700 transform hover:translate-y-1 transition-all duration-200"
            >
              <img
                src="/instagram.png"
                className="w-16 h-16 fill-current"
                alt="instagram"
              />
            </a>
            <a
              href="https://www.tiktok.com/@gusloseimas?lang=pt-BR"
              className="text-purple-500 hover:text-purple-700 transform hover:translate-y-1 transition-all duration-200"
            >
              <img
                src="/tiktok.png"
                className="w-16 h-16 fill-current"
                alt="tiktok"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5545988214352&fbclid=PAAabaHtAwzbeeED42Ho_xvyZXH_5bEOVxvUtHlFGOms50S0QGviZc_31YDTE"
              className="text-purple-500 hover:text-purple-700 transform hover:translate-y-1 transition-all duration-200"
            >
              <img
                src="/whatsapp.png"
                className="w-16 h-16 fill-current"
                alt="whatsapp"
              />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
