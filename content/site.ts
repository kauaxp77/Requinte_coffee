/**
 * Conteudo editorial do site.
 * Tudo que for texto, imagem ou dado da marca vive aqui — nunca dentro dos componentes.
 *
 * ATENCAO: marcadores [INSERIR ...] / [INFORMACAO A CONFIRMAR] sao propositais.
 * Substitua-os por informacao oficial antes de publicar. Nada aqui foi inventado.
 */

export const brand = {
  name: 'Requinte Coffee Buffet',
  legalName: 'Requinte Coffee e Buffet',
  instagramHandle: '@requintecoffeebuffet',
  instagramUrl: 'https://www.instagram.com/requintecoffeebuffet/',
  logo: '/images/requinte/logo-requinte.jpg',
  // Preencha no .env.local — nao ha telefone fixo no codigo.
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.requintecoffeebuffet.com.br',
  address: '[INSERIR ENDERECO OFICIAL]',
  hours: '[INSERIR HORARIO DE ATENDIMENTO]',
  areaServed: 'Brasilia e Distrito Federal',
} as const

export const whatsappMessage =
  'Ola! Conheci o Requinte Coffee Buffet pelo site e gostaria de solicitar um orcamento para meu evento.'

/* ------------------------------------------------------------------ */
/* Imagens                                                             */
/* ------------------------------------------------------------------ */

export type GalleryCategory = 'gastronomia' | 'eventos' | 'ambientes' | 'detalhes'

export interface Photo {
  src: string
  alt: string
  category: GalleryCategory
  orientation: 'portrait' | 'landscape'
}

export const photos = {
  mesaPanoramica: {
    src: '/images/requinte/requinte-01-mesa-panoramica.jpg',
    alt: 'Mesa de buffet montada em toda a extensao de um salao com vista para o jardim',
    category: 'ambientes',
    orientation: 'landscape',
  },
  mesaAzulFrutas: {
    src: '/images/requinte/requinte-02-mesa-azul-frutas.jpg',
    alt: 'Mesa com toalha azul, salada de frutas em cristal, folhados e xicaras de cafe',
    category: 'eventos',
    orientation: 'portrait',
  },
  mesaAzulAmpla: {
    src: '/images/requinte/requinte-03-mesa-azul-ampla.jpg',
    alt: 'Mesa de coffee break com arranjos de flores brancas e travessas de cristal',
    category: 'eventos',
    orientation: 'landscape',
  },
  salgadosQuentes: {
    src: '/images/requinte/requinte-04-salgados-quentes.jpg',
    alt: 'Rechauds com coxinhas e quibes ao lado de sanduiches e folhados',
    category: 'gastronomia',
    orientation: 'portrait',
  },
  frutasDetalhe: {
    src: '/images/requinte/requinte-05-frutas-detalhe.jpg',
    alt: 'Taca de cristal com salada de frutas ao lado de arranjo floral',
    category: 'detalhes',
    orientation: 'landscape',
  },
  mesaRose: {
    src: '/images/requinte/requinte-06-mesa-rose.jpg',
    alt: 'Mesa com toalha rose, pasteis, folhados e arranjo de magnolias brancas',
    category: 'ambientes',
    orientation: 'portrait',
  },
  miniHamburgueres: {
    src: '/images/requinte/requinte-07-mini-hamburgueres.jpg',
    alt: 'Mini hamburgueres, empadinhas e salada de frutas em mesa de evento corporativo',
    category: 'gastronomia',
    orientation: 'portrait',
  },
  folhados: {
    src: '/images/requinte/requinte-08-folhados.jpg',
    alt: 'Travessas de cristal com folhados, mini hamburgueres e bolo em cubos',
    category: 'gastronomia',
    orientation: 'portrait',
  },
  canapesPreparo: {
    src: '/images/requinte/requinte-09-canapes-preparo.jpg',
    alt: 'Bandejas de canapes finalizados na cozinha antes do servico',
    category: 'detalhes',
    orientation: 'portrait',
  },
  eventoExterno: {
    src: '/images/requinte/requinte-10-evento-externo.jpg',
    alt: 'Mesa de coffee break em area externa com convidados ao fundo',
    category: 'eventos',
    orientation: 'portrait',
  },
  ambienteNoturno: {
    src: '/images/requinte/requinte-11-ambiente-noturno.jpg',
    alt: 'Mesa com toalha preta e arranjo de flores brancas em salao com painel de madeira',
    category: 'ambientes',
    orientation: 'portrait',
  },
  vistaPanoramica: {
    src: '/images/requinte/requinte-12-vista-panoramica.jpg',
    alt: 'Mesa de buffet diante de janelas com vista panoramica da cidade',
    category: 'ambientes',
    orientation: 'portrait',
  },
  frutasCristal: {
    src: '/images/requinte/requinte-13-frutas-cristal.jpg',
    alt: 'Duas tacas de cristal com salada de frutas ao lado de copos de leite e bolo marmore',
    category: 'detalhes',
    orientation: 'portrait',
  },
  coffeeBreak: {
    src: '/images/requinte/requinte-14-coffee-break.jpg',
    alt: 'Xicaras de porcelana, pao de queijo e bolos em mesa com vista panoramica',
    category: 'gastronomia',
    orientation: 'portrait',
  },
  boloVista: {
    src: '/images/requinte/requinte-15-bolo-vista.jpg',
    alt: 'Bolo em fatias, pasteis e sanduiches em mesa diante de janela panoramica',
    category: 'gastronomia',
    orientation: 'portrait',
  },
  docesSalgados: {
    src: '/images/requinte/requinte-16-doces-salgados.jpg',
    alt: 'Detalhe de bolo, enroladinhos e salada de frutas em travessas de cristal',
    category: 'detalhes',
    orientation: 'portrait',
  },
} satisfies Record<string, Photo>

export const allPhotos: Photo[] = Object.values(photos)

export const heroPhoto: Photo = photos.mesaPanoramica

/* ------------------------------------------------------------------ */
/* Navegacao                                                           */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: 'Eventos', href: '#eventos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Gastronomia', href: '#gastronomia' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#orcamento' },
]

/* ------------------------------------------------------------------ */
/* Hero + posicionamento                                               */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: 'Requinte Coffee Buffet',
  headline: ['Experiencias que transformam', 'momentos em memorias.'],
  description:
    'Da apresentacao dos sabores ao cuidado com cada detalhe, criamos experiencias pensadas para tornar sua celebracao ainda mais especial.',
  primaryCta: 'Solicitar orcamento',
  secondaryCta: 'Conhecer o Requinte',
}

export const positioning = {
  eyebrow: 'Posicionamento',
  headline: ['Mais do que servir.', 'E cuidar de cada detalhe.'],
  paragraphs: [
    'O Requinte Coffee Buffet monta a experiencia inteira: a gastronomia, a mesa, a louca, os arranjos e a equipe que serve. Cada evento e planejado a partir do espaco, do publico e do tempo que voce tem.',
    'O resultado e uma mesa que se sustenta sozinha — bonita de longe, correta de perto, servida do inicio ao fim sem que voce precise administrar nada.',
  ],
}

/* ------------------------------------------------------------------ */
/* Eventos                                                             */
/* ------------------------------------------------------------------ */

export const eventsSection = {
  eyebrow: 'Eventos',
  title: 'Para cada ocasiao, uma experiencia a altura.',
  cta: 'Planejar meu evento',
}

export const events = [
  {
    id: 'casamentos',
    title: 'Casamentos',
    description: 'Uma experiencia sofisticada para um dos momentos mais importantes da vida.',
    photo: photos.ambienteNoturno,
  },
  {
    id: 'quinze-anos',
    title: '15 anos',
    description: 'Gastronomia, apresentacao e cuidado para uma celebracao inesquecivel.',
    photo: photos.frutasCristal,
  },
  {
    id: 'formaturas',
    title: 'Formaturas',
    description: 'Uma conquista merece ser celebrada com estilo.',
    photo: photos.mesaRose,
  },
  {
    id: 'corporativos',
    title: 'Eventos corporativos',
    description: 'Receba clientes, equipes e parceiros com profissionalismo e excelencia.',
    photo: photos.mesaAzulFrutas,
  },
  {
    id: 'aniversarios',
    title: 'Aniversarios e celebracoes',
    description: 'Momentos especiais merecem uma experiencia especial.',
    photo: photos.eventoExterno,
  },
  {
    id: 'coffee-break',
    title: 'Coffee break',
    description: 'Servico de cafe, paes e salgados para reunioes, treinamentos e auditorios.',
    photo: photos.coffeeBreak,
  },
]

/* ------------------------------------------------------------------ */
/* Gastronomia                                                         */
/* ------------------------------------------------------------------ */

export const gastronomy = {
  eyebrow: 'Gastronomia',
  title: 'O sabor tambem faz parte da experiencia.',
  intro:
    'Salgados assados e fritos, folhados, mini sanduiches, bolos, frutas e o cafe servido quente do primeiro ao ultimo convidado.',
  captions: [
    'Sabores cuidadosamente preparados.',
    'Apresentacao que impressiona.',
    'Detalhes que fazem diferenca.',
  ],
  cta: 'Conhecer as possibilidades',
}

/* ------------------------------------------------------------------ */
/* Carrossel "Uma experiencia Requinte"                                */
/* ------------------------------------------------------------------ */

export const experienceCarousel = {
  eyebrow: 'Uma experiencia Requinte',
  title: 'Uma experiencia que comeca antes do primeiro sabor.',
  slides: [
    { photo: photos.mesaPanoramica, word: 'Composicao' },
    { photo: photos.ambienteNoturno, word: 'Elegancia' },
    { photo: photos.canapesPreparo, word: 'Preparo' },
    { photo: photos.frutasDetalhe, word: 'Detalhes' },
    { photo: photos.vistaPanoramica, word: 'Ambiente' },
    { photo: photos.eventoExterno, word: 'Celebracao' },
    { photo: photos.coffeeBreak, word: 'Cafe' },
  ],
}

/* ------------------------------------------------------------------ */
/* Diferenciais                                                        */
/* ------------------------------------------------------------------ */

export const differentials = {
  eyebrow: 'Diferenciais',
  title: 'O requinte esta nos detalhes.',
  items: [
    {
      icon: 'MessageCircle' as const,
      title: 'Atendimento personalizado',
      description:
        'Cada evento e conversado antes de ser orcado. O cardapio e o servico saem do seu contexto, nao de um pacote fechado.',
    },
    {
      icon: 'Sparkles' as const,
      title: 'Apresentacao impecavel',
      description:
        'Cristal, porcelana, arranjos e alturas trabalhadas. A mesa e montada para ser fotografada e para funcionar.',
    },
    {
      icon: 'ChefHat' as const,
      title: 'Gastronomia propria',
      description:
        'Salgados, folhados, bolos e canapes preparados pela nossa cozinha e finalizados o mais perto possivel do horario do servico.',
    },
    {
      icon: 'Users' as const,
      title: 'Equipe uniformizada',
      description:
        'Profissionais que montam, servem, repoem e desmontam — voce nao administra nada durante o evento.',
    },
    {
      icon: 'CalendarCheck' as const,
      title: 'Organizacao e pontualidade',
      description:
        'Montagem programada com antecedencia e servico que comeca na hora combinada, inclusive em predios com acesso controlado.',
    },
    {
      icon: 'Building2' as const,
      title: 'Experiencia institucional',
      description:
        'Rotina de atendimento a orgaos publicos e auditorios, com as exigencias de acesso, horario e protocolo que esse tipo de evento pede.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Onde ja atendemos                                                   */
/* ------------------------------------------------------------------ */

export const clients = {
  eyebrow: 'Onde ja atendemos',
  title: 'Instituicoes que ja receberam o Requinte.',
  items: [
    'Tribunal Superior do Trabalho',
    'Conselho da Justica Federal',
    'DNIT',
    'Defensoria Publica',
  ],
}

/* ------------------------------------------------------------------ */
/* Processo                                                            */
/* ------------------------------------------------------------------ */

export const processSection = {
  eyebrow: 'Como funciona',
  title: 'Do primeiro contato ao ultimo convidado.',
  steps: [
    { number: '01', title: 'Conversa', description: 'Conte como sera o seu evento.' },
    { number: '02', title: 'Planejamento', description: 'Entendemos suas necessidades.' },
    { number: '03', title: 'Personalizacao', description: 'Definimos os detalhes da experiencia.' },
    { number: '04', title: 'Execucao', description: 'Nossa equipe cuida do evento.' },
    { number: '05', title: 'Celebracao', description: 'Voce aproveita o momento.' },
  ],
}

/* ------------------------------------------------------------------ */
/* Prova social                                                        */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  quote: string
  author: string
  role?: string
}

export const testimonialsSection = {
  eyebrow: 'Prova social',
  title: 'Experiencias que ficam na memoria.',
  /**
   * Nenhum depoimento foi inventado. Assim que houver depoimentos reais,
   * adicione objetos aqui e a secao passa a exibi-los automaticamente.
   */
  items: [] as Testimonial[],
  emptyState:
    '[INSERIR DEPOIMENTOS REAIS DE CLIENTES] — a secao ja esta pronta e passa a exibir os depoimentos assim que forem adicionados em content/site.ts.',
}

/* ------------------------------------------------------------------ */
/* Sobre                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  eyebrow: 'Sobre o Requinte',
  title: 'Por tras de cada evento existe um cuidado especial.',
  paragraphs: [
    '[INSERIR HISTORIA OFICIAL DA EMPRESA — quando comecou, como comecou e o que motivou a criacao do Requinte Coffee Buffet.]',
    '[INSERIR INFORMACAO OFICIAL SOBRE A EQUIPE — quantas pessoas, funcoes e formacao.]',
    'O que ja e visivel em cada evento: cozinha propria, montagem cuidada da mesa e uma equipe que acompanha o servico do inicio ao fim. Do Tribunal Superior do Trabalho ao Conselho da Justica Federal, do DNIT a Defensoria Publica, sao ambientes que nao admitem improviso.',
  ],
  photo: photos.canapesPreparo,
  facts: [
    { label: 'Atendimento', value: 'Brasilia e Distrito Federal' },
    { label: 'Servicos', value: 'Coffee break, buffet de eventos e celebracoes' },
    { label: 'Fundacao', value: '[INSERIR ANO]' },
  ],
}

/* ------------------------------------------------------------------ */
/* Secao cinematografica                                               */
/* ------------------------------------------------------------------ */

export const cinematic = {
  lines: ['Seu momento.', 'Nosso cuidado.'],
  cta: 'Quero conhecer o Requinte',
  photo: photos.vistaPanoramica,
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faq = {
  eyebrow: 'Duvidas frequentes',
  title: 'Antes de solicitar seu orcamento.',
  items: [
    {
      question: 'Quais tipos de eventos voces realizam?',
      answer:
        'Casamentos, 15 anos, formaturas, aniversarios e celebracoes, eventos corporativos e coffee breaks — inclusive em auditorios e orgaos publicos.',
    },
    {
      question: 'Como funciona o orcamento?',
      answer:
        'Voce envia o formulario ou chama no WhatsApp com tipo de evento, data, numero de convidados e cidade. A partir dessas informacoes montamos uma proposta com cardapio e servico. [INFORMACAO A CONFIRMAR: prazo medio de resposta.]',
    },
    {
      question: 'E possivel personalizar o servico?',
      answer:
        'Sim. Cardapio, montagem da mesa e formato do servico sao definidos junto com voce, a partir do espaco e do publico do evento.',
    },
    {
      question: 'Voces atendem eventos corporativos?',
      answer:
        'Sim. O Requinte ja atendeu Tribunal Superior do Trabalho, Conselho da Justica Federal, DNIT e Defensoria Publica.',
    },
    {
      question: 'Voces atendem casamentos?',
      answer:
        'Sim. [INFORMACAO A CONFIRMAR: formatos oferecidos para casamento — recepcao, mesa de doces, servico completo.]',
    },
    {
      question: 'Existe numero minimo de convidados?',
      answer: '[INFORMACAO A CONFIRMAR]',
    },
    {
      question: 'Como funciona a contratacao?',
      answer:
        '[INFORMACAO A CONFIRMAR: sinal, contrato, formas de pagamento e prazo de confirmacao da data.]',
    },
    {
      question: 'Voces atendem eventos fora da cidade?',
      answer: '[INFORMACAO A CONFIRMAR: regiao de atendimento e condicoes para deslocamento.]',
    },
    {
      question: 'Como entrar em contato?',
      answer:
        'Pelo WhatsApp, pelo formulario de orcamento desta pagina ou pelo Instagram @requintecoffeebuffet.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Formulario                                                          */
/* ------------------------------------------------------------------ */

export const quoteForm = {
  eyebrow: 'Orcamento',
  title: 'Vamos planejar seu proximo evento?',
  description:
    'Preencha os campos abaixo. As informacoes seguem direto para o nosso WhatsApp e retornamos com uma proposta.',
  eventTypes: [
    'Casamento',
    '15 anos',
    'Formatura',
    'Evento corporativo',
    'Coffee break',
    'Aniversario ou celebracao',
    'Outro',
  ],
  submitLabel: 'Solicitar orcamento',
  successTitle: 'Recebemos o seu pedido.',
  successBody:
    'Abrimos o WhatsApp com o resumo do seu evento. Se a janela nao abrir, use o botao flutuante — os dados continuam preenchidos aqui.',
}

/* ------------------------------------------------------------------ */
/* Instagram + rodape                                                  */
/* ------------------------------------------------------------------ */

export const instagram = {
  eyebrow: 'Instagram',
  title: 'Siga nossa experiencia.',
  photos: [
    photos.docesSalgados,
    photos.miniHamburgueres,
    photos.mesaAzulAmpla,
    photos.boloVista,
    photos.salgadosQuentes,
    photos.frutasCristal,
  ],
}

export const footer = {
  description:
    'Coffee break e buffet para casamentos, celebracoes e eventos corporativos. Gastronomia, montagem e equipe em um unico servico.',
  columns: [
    {
      title: 'Eventos',
      links: events.map((e) => ({ label: e.title, href: '#eventos' })),
    },
    {
      title: 'Navegar',
      links: [
        { label: 'Experiencia', href: '#experiencia' },
        { label: 'Gastronomia', href: '#gastronomia' },
        { label: 'Galeria', href: '#galeria' },
        { label: 'Sobre', href: '#sobre' },
        { label: 'Duvidas', href: '#faq' },
        { label: 'Solicitar orcamento', href: '#orcamento' },
      ],
    },
  ],
}
