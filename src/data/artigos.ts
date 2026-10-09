
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
    subtitulo: "O amor não termina onde a vida acaba.",
    categoria: "Drama / Crítica cinematográfica",
    diretor: "Chloé Zhao",
    ano: "2025",
    imagem: "/images/hamnet.jpg",

    introducao:
      "Existe algo profundamente cruel em revisitar o passado quando já conhecemos o futuro. Em Hamnet, cada gesto de carinho, cada instante de felicidade e cada silêncio parecem carregar o peso de uma despedida que ainda não aconteceu.",

    paragrafos: [
      "Chloé Zhao constrói uma história que não se limita à morte de uma criança. Hamnet é, sobretudo, um filme sobre aqueles que permanecem. Sobre o que acontece com o amor quando já não existe alguém para recebê-lo da mesma maneira. A casa continua de pé, os dias continuam passando, mas alguma coisa fundamental desaparece do mundo. E quem fica precisa aprender a existir dentro dessa ausência.",

      "Agnes vive o luto como uma presença impossível de ignorar. Sua dor não é apenas a saudade do filho, mas a violência de continuar habitando um mundo que já não o contém. Há algo devastador na maneira como o filme transforma pequenos gestos cotidianos em lembranças de uma vida interrompida. O silêncio deixa de ser a ausência de som e passa a ser a forma mais dolorosa de presença.",

      "William, por outro lado, parece procurar na criação artística um lugar onde aquilo que perdeu ainda possa existir. Não porque a arte seja capaz de desfazer a morte, mas porque algumas dores ultrapassam os limites da linguagem comum. Quando não é possível dizer o que se sente, talvez seja necessário construir um mundo inteiro para tentar expressá-lo.",

      "É impossível não pensar na história de Orfeu e Eurídice. Orfeu desce ao mundo dos mortos movido pela esperança de recuperar aquilo que ama. Mas, ao olhar para trás, perde Eurídice novamente. Existe nesse mito uma das contradições mais humanas do luto: o desejo de seguir em frente e a necessidade desesperada de olhar para aquilo que ficou. Às vezes, recordar é a única maneira que encontramos de permanecer próximos de quem partiu.",

      "Em Hamnet, o teatro se transforma nesse mesmo território entre a vida e a morte. A peça não devolve o menino à família. Não corrige o passado, não oferece uma segunda oportunidade e tampouco elimina a culpa. Mas permite que o amor encontre outra forma de existir. Diante do palco, Agnes começa a reconhecer que aquela história também pertence ao filho que perdeu.",

      "Talvez um dos momentos mais devastadores seja aquele em que William se senta atrás do palco e chora. Por um instante, desaparece o dramaturgo, o homem capaz de transformar sofrimento em versos imortais. Resta apenas um pai. Alguém que, apesar de possuir palavras para quase tudo, não consegue encontrar nenhuma que seja suficiente para trazer o filho de volta.",

      "E então chega a despedida. O palco se torna um lugar de encontro entre quem partiu e quem permaneceu. O que parecia impossível de dizer finalmente encontra uma forma de ser compartilhado. Não há cura milagrosa, nem promessa de que a dor desaparecerá. Há apenas a compreensão de que o amor pode sobreviver mesmo quando sua presença física já não é possível.",

      "O resto é silêncio. Mas talvez esse silêncio não represente o fim de tudo. Talvez seja apenas aquilo que permanece quando as palavras já cumpriram seu papel. Hamnet compreende que algumas perdas nunca serão superadas no sentido mais simples da palavra. Elas passam a fazer parte de quem somos, atravessando nossas lembranças, nossos afetos e a maneira como enxergamos o mundo.",

      "Ao final, não saímos dessa história com respostas. Saímos com a sensação de termos testemunhado algo profundamente humano: a tentativa de transformar uma ausência em memória, uma memória em arte e a arte em uma última maneira de dizer que alguém foi amado. E continuará sendo.",
    ],

    citacao:
      "A arte pode nos permitir reencontrar quem perdemos, mas jamais devolvê-lo. Talvez seja por isso que continuamos criando: para que o amor tenha onde permanecer.",
  },
];

export function buscarArtigo(slug: string) {
  return artigos.find((artigo) => artigo.slug === slug);
}
