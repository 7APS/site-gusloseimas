import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <div className="w-full bg-white py-20">
        <img
          src="/banner1.jpeg"
          alt="Banner"
          className="w-full"
        />
      </div>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Sobre</h2>
          <p className="text-gray-600">
            Bem-vindo à Gusloseimas, a loja de doces mais doce do mundo! Temos uma ampla
            variedade de doces deliciosos para satisfazer todos os seus desejos açucarados.
            Visite nossa loja online e desfrute de uma explosão de sabores!
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Produtos</h2>
          {/* Lista de produtos */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Item de produto */}
            <li className="bg-white rounded shadow p-4">
              <img
                src="/bolo1.jpg"
                alt="Produto 1"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold mb-2">Nome do Produto 1</h3>
              <p className="text-gray-600">Descrição do Produto 1</p>
            </li>
            <li className="bg-white rounded shadow p-4">
              <img
                src="/bolo1.jpg"
                alt="Produto 1"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold mb-2">Nome do Produto 1</h3>
              <p className="text-gray-600">Descrição do Produto 1</p>
            </li>
            <li className="bg-white rounded shadow p-4">
              <img
                src="/bolo1.jpg"
                alt="Produto 1"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold mb-2">Nome do Produto 1</h3>
              <p className="text-gray-600">Descrição do Produto 1</p>
            </li>
            <li className="bg-white rounded shadow p-4">
              <img
                src="/bolo1.jpg"
                alt="Produto 1"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold mb-2">Nome do Produto 1</h3>
              <p className="text-gray-600">Descrição do Produto 1</p>
            </li>
            <li className="bg-white rounded shadow p-4">
              <img
                src="/bolo1.jpg"
                alt="Produto 1"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold mb-2">Nome do Produto 1</h3>
              <p className="text-gray-600">Descrição do Produto 1</p>
            </li>
            {/* Adicione mais itens de produto aqui */}
          </ul>
        </section>
        <section className="mb-8 bg:white">
          <h2 className="text-3xl font-bold mb-4">Redes Sociais</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/docesgus"
              className="text-purple-500 hover:text-purple-700 transform hover:translate-y-1 transition-all duration-200"
            >
              <img
                src="/face.png"
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
