export const metadata = {
    title: "Gusloseimas - Cookies e Bolos Artesanais",
    description: "Confeitaria gourmet especializada em cookies e bolos para festas e eventos. Deixando sua vida ainda mais doce!",
    keywords: "cookies, bolos, confeitaria, doces, festas, eventos, Gusloseimas, confeitaria artesanal",

    // Open Graph / Facebook
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://www.gusloseimas.com",
        siteName: "Gusloseimas",
        title: "Gusloseimas - Cookies e Bolos Artesanais",
        description: "Confeitaria gourmet especializada em cookies e bolos para festas e eventos. Deixando sua vida ainda mais doce!",
        images: [
            {
                url: "/logoBigger.png",
                width: 800,
                height: 600,
                alt: "Gusloseimas Logo",
            },
        ],
    },

    // Twitter
    twitter: {
        cardType: "summary_large_image",
        handle: "@gusloseimas",
        site: "@gusloseimas",
        title: "Gusloseimas - Cookies e Bolos Artesanais",
        description: "Confeitaria gourmet especializada em cookies e bolos para festas e eventos. Deixando sua vida ainda mais doce!",
        images: ["/logoBigger.png"],
    },

    // Canonical URL
    alternates: {
        canonical: "https://www.gusloseimas.com",
    },

    // Additional metadata
    robots: "index, follow",
    creator: "Gusloseimas",
    publisher: "Gusloseimas",
};

// Viewport export for Next.js 14
export const viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#FFC0CB", // Pink theme color
};
