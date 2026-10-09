
export type Reflexao = {
  slug: string;
  numero: string;
  categoria: string;
  titulo: string;
  descricao: string;
  leitura: string;
  introducao: string;
  paragrafos: string[];
  citacao: string;
};

export const reflexoes: Reflexao[] = [
  {
    slug: "o-que-permanece-quando-alguem-parte",
    numero: "01",
    categoria: "Sobre a ausência",
    titulo: "O que permanece quando alguém parte",
    descricao:
      "Há pessoas que continuam habitando nossos dias, mesmo quando já não fazem parte deles.",
    leitura: "4 min",
    introducao:
      "Algumas ausências não significam o desaparecimento de alguém. Significam aprender a viver com aquilo que permanece.",
    paragrafos: [
      "Existem pessoas que deixam marcas tão profundas que a distância não consegue apagá-las. Continuam presentes nas músicas que ouvimos, nos lugares que frequentamos e nas pequenas lembranças que surgem sem aviso.",
      "Talvez a parte mais difícil de uma despedida seja compreender que o mundo continua seguindo seu curso, mesmo quando alguma coisa dentro de nós parece ter parado.",
      "Com o tempo, aprendemos que recordar não significa necessariamente permanecer preso ao passado. Às vezes, recordar é apenas reconhecer que alguma coisa foi importante.",
    ],
    citacao:
      "Nem toda ausência representa o fim de uma presença.",
  },
  {
    slug: "a-delicadeza-das-coisas-que-nao-voltam",
    numero: "02",
    categoria: "Sobre o tempo",
    titulo: "A delicadeza das coisas que não voltam",
    descricao:
      "Talvez crescer seja aprender a conviver com versões de nós mesmos que ficaram pelo caminho.",
    leitura: "5 min",
    introducao:
      "O tempo não nos transforma de uma só vez. Ele nos modifica silenciosamente.",
    paragrafos: [
      "Crescer também significa descobrir que determinadas experiências não poderão ser repetidas. Algumas tardes, conversas e encontros pertencem a versões nossas que já não existem.",
      "Existe uma melancolia particular em perceber que o passado permanece intacto na memória, enquanto tudo ao nosso redor continua mudando.",
      "Mas talvez seja justamente essa impossibilidade de retornar que torna certos momentos tão preciosos. Sua beleza está também no fato de terem acontecido uma única vez.",
    ],
    citacao:
      "Algumas coisas são eternas justamente porque não podem voltar.",
  },
  {
    slug: "entre-aquilo-que-somos-e-o-que-sentimos",
    numero: "03",
    categoria: "Sobre existir",
    titulo: "Entre aquilo que somos e o que sentimos",
    descricao:
      "Nem sempre encontramos palavras para explicar o que acontece dentro de nós.",
    leitura: "3 min",
    introducao:
      "Existe uma distância silenciosa entre aquilo que mostramos ao mundo e aquilo que realmente sentimos.",
    paragrafos: [
      "Nem sempre sabemos explicar nossas próprias emoções. Há dias em que uma lembrança parece pesar mais do que deveria, enquanto em outros encontramos beleza nas coisas mais simples.",
      "Talvez não sejamos definidos por um único sentimento, por uma decisão ou por uma fase da vida. Somos também as contradições que carregamos e as possibilidades que ainda não conhecemos.",
      "Existir não exige compreender tudo imediatamente. Algumas respostas chegam com o tempo; outras dão lugar a perguntas diferentes.",
    ],
    citacao:
      "Somos maiores do que os sentimentos de um único instante.",
  },
];

export function buscarReflexao(slug: string) {
  return reflexoes.find((reflexao) => reflexao.slug === slug);
}
