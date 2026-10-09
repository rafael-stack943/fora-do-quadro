
export type Artigo = {
  slug: string;
  titulo: string;
  subtitulo: string;
  categoria: string;
  diretor: string;
  ano: string;
  imagem: string;
  introducao: string;
  paragrafos: string[];
  citacao: string;
};

export const artigos: Artigo[] = [
  {
    slug: "hamnet",
    titulo: "Hamnet",
    subtitulo: "O amor que permanece depois da ausência.",
    categoria: "Drama / Crítica cinematográfica",
    diretor: "Chloé Zhao",
    ano: "2025",
    imagem:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1800",
    introducao:
      "Existem histórias que não procuram explicar a dor. Apenas nos convidam a permanecer diante dela.",
    paragrafos: [
      "Hamnet é uma história sobre aquilo que permanece quando alguém parte. Sobre o silêncio que se instala nos lugares antes preenchidos por uma presença e sobre a maneira como o amor encontra formas inesperadas de sobreviver à perda.",
      "O filme nos aproxima de uma experiência profundamente humana: a impossibilidade de transformar o luto em algo simples. Não há palavras suficientes para determinadas ausências, assim como não existe uma única maneira de continuar vivendo depois delas.",
      "É nessa delicadeza que o cinema encontra sua força. Às vezes, uma imagem consegue expressar aquilo que uma vida inteira de palavras não seria capaz de traduzir.",
    ],
    citacao:
      "Talvez a arte exista porque algumas despedidas nunca terminam.",
  },
];

export function buscarArtigo(slug: string) {
  return artigos.find((artigo) => artigo.slug === slug);
}
