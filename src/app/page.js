import ImageCarousel from "../components/ImageCarousel";
import Image from "next/image";
import "./style.css";

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
    );
  }

  function productSectionItem(items) {
    return items.map(({ imgs, description }, index) => (
      <li key={`key-${index}`} className="bg-white rounded shadow p-4">
        {imgs && (
          <ImageCarousel
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
        className="text-purple-500 hover:text-purple-700 transform hover:translate-y-1 transition-all duration-200"
      >
        <Image src={src} alt={text} width={width} height={height} />
      </a>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-serif">
      {/* menu */}
      <div className="w-full">
        <la className="text-gray-600 p-2 flex justify-center font-sans">
          <a className="p-2 cursor-pointer" href="#sobre">
            Sobre
          </a>
          <a className="p-2 cursor-pointer" href="#historia">
            História
          </a>
          <a className="p-2 cursor-pointer" href="#produtos">
            Produtos
          </a>
          <a className="p-2 cursor-pointer absolute right-5">
            <div id="social" className="flex space-x-4">
              {renderSocial(
                "https://www.facebook.com/gusloseimas.cookies",
                "/facebook.png",
                "Facebeook",
                20,
                10
              )}
              {renderSocial(
                "https://www.instagram.com/gusloseimas",
                "/instagram.png",
                "Instagram",
                20,
                10
              )}
              {renderSocial(
                "https://api.whatsapp.com/send?phone=5545988214352&fbclid=PAAabaHtAwzbeeED42Ho_xvyZXH_5bEOVxvUtHlFGOms50S0QGviZc_31YDTE",
                "/whatsapp.png",
                "Whatsapp",
                20,
                10
              )}
              {renderSocial(
                "https://www.tiktok.com/@gusloseimas?lang=pt-BR",
                "/tiktok.png",
                "Tiktok",
                20,
                10
              )}
            </div>
          </a>
        </la>
      </div>

      {/* banner */}
      <div className="w-full bg-rose-100 py-40 justify-center flex">
        <Image src={logo} alt="Banner" className="w-auto h-80 flex" />
      </div>

      {/* Parallax 1 */}
      <section class="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img">
        <div class="p-5 text-2xl text-white bg-red-300 bg-opacity-50 rounded-xl">
          Deixando sua vida ainda mais doce! 😋😋
        </div>
      </section>

      {/* sobre e história */}
      <div className="container mx-auto px-4 py-8 font-sans">
        <section className="mb-8">
          <h2 id="sobre" className="text-3xl font-bold mb-4 text-gray-700">
            Sobre Nós
          </h2>
          <p className="text-gray-600">
            Oi, Eu sou a <b>Kátia</b>, mãe do Gus, esposa do Luiz além de
            mulher, psicóloga, de peixes, terráqueo e apaixonada por cozinhar.
            <br />
            <br />
            A Gusloseimas foi criada por uma mãe que ama cozinhar e decidiu
            estudar e se aprimorar na confeitaria.
            <br />
            Nosso objetivo é levar doçura e felicidade em cada mordida, deixando
            a vida de nossos clientes ainda mais doce.
          </p>
          <br />
          <h3 id="historia" className="text-3xl font-bold mb-4 text-gray-700">
            História do Cookie
          </h3>
          <p className="text-gray-600 text-justify">
            Os cookies têm uma história fascinante que remonta à Idade Média.
            <br />
            <br />
            Naquela época, os biscoitos já eram apreciados como pequenos pães
            crocantes, assados duas vezes para prolongar sua vida útil.
            <br />O termo &quot;biscoito&quot; deriva do latim, onde &quot;bis&quot; significa dois
            e &quot;coctus&quot; significa cozido.
            <br />
            No século XVII, na Inglaterra, os cozinheiros descobriram por acaso
            que um pedaço de massa usado para testar a temperatura do forno se
            transformava em deliciosos biscoitos. Logo, esses &quot;pequenos bolos&quot;
            passaram a ser feitos intencionalmente, evitando o desperdício de
            massa.
            <br />
            <br />O termo <b>&quot;cookie&quot;</b> tem origem na palavra holandesa
            &quot;koekje&quot;, que significa &quot;pequeno bolo&quot;.
            <br />
            Os cookies se tornaram populares na Europa e, posteriormente, foram
            levados para os Estados Unidos pelos colonizadores ingleses. Foi lá
            que eles evoluíram para a receita de cookies que conhecemos e amamos
            hoje.
            <br />
            Já os cookies com gotas de chocolate foram inventados pela americana
            Ruth Wakefield, em 1930. Ela e seu marido tinham um pequeno
            restaurante em Boston e Ruth resolveu experimentar uma nova receita
            de bolo colocando pedacinhos de chocolate meio amargo.
          </p>
        </section>
      </div>

      {/* Parallax 2 */}
      <section class="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img-2">

      </section>

      {/* produtos */}
      <div className="container mx-auto px-4 py-8 font-sans bg-red-200">
        <section className="mb-8">
          <h2 id="produtos" className="text-3xl font-bold mb-4 text-gray-700">
            Produtos
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

      <footer>
        <a className="text-gray-300">
          <a href="www.7aps.com.br" target="_blank">
            7APS
          </a>
          - Copyright © Todos os direitos reservados.
        </a>
      </footer>
    </div>
  );
}
