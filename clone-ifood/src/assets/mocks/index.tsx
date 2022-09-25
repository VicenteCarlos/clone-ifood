import { IPizzaMocks } from "./interfaces";

const filtersMocks: Array<string> = [
  "Pra retirar",
  "Entrega Grátis",
  "Vale-refeição",
  "Limpar",
];

const selectOptionMocks: Array<string> = [
  "Início",
  "Restaurantes",
  "Mercados",
  "Bebidas",
  "Farmácias",
  "Pets",
];

const pizzaMocks: Array<string> = [
  "https://img.itdg.com.br/tdg/images/blog/uploads/2022/07/5-itens-necessarios-para-se-tornar-um-pizzaiolo-neste-Dia-da-Pizza.jpg?mode=crop&width={:width=%3E150,%20:height=%3E130}",
  "https://media-cdn.tripadvisor.com/media/photo-s/19/6a/b1/5d/savori-pizza-sao-luis.jpg",
  "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3277542:1663012513/Pizza%20de%20Calabresa.jpg?f=16x9&h=240&w=425&$p$f$h$w=4bfebf0",
];

const pedidosMocks: IPizzaMocks[] = [
  {
    url_image:
      "https://www.calimp.com.br/wp-content/uploads/2016/01/J.Heler_Pizza-de-p%C3%A3o-s%C3%ADrio-630x315.jpg",
    title: "Pizza artesanal grande de calabresa com bordar de cheddar",
    description: "Pizza grande, 8 fatias, borda recheada de cheddar.",
    subtitle: "Serve 4 pessoas",
    price: 59.99,
  },
  {
    url_image:
      "https://aloalobahia.com/images/p/hutboxdiadasmaes_alo_alo_bahia.png",
    title: "Box Família",
    description: "Pizza Família, 8 fatias.",
    subtitle: "Serve 4 pessoas",
    price: 89.99,
  },
  {
    url_image:
      "https://i.pinimg.com/736x/3f/ec/b1/3fecb15e855f0a3ca39c109d0e48dd51.jpg",
    title: "Box Festa",
    description: "Pizza grande, 12 fatias.",
    subtitle: "Serve 8 pessoas",
    price: 100.9,
  },
  {
    url_image:
      "https://www.calimp.com.br/wp-content/uploads/2016/01/J.Heler_Pizza-de-p%C3%A3o-s%C3%ADrio-630x315.jpg",
    title: "Pizza artesanal grande de calabresa com bordar de cheddar",
    description: "Pizza grande, 8 fatias, borda recheada de cheddar.",
    subtitle: "Serve 4 pessoas",
    price: 59.99,
  },
  {
    url_image:
      "https://aloalobahia.com/images/p/hutboxdiadasmaes_alo_alo_bahia.png",
    title: "Box Família",
    description: "Pizza Família, 8 fatias.",
    subtitle: "Serve 4 pessoas",
    price: 89.99,
  },
  {
    url_image:
      "https://i.pinimg.com/736x/3f/ec/b1/3fecb15e855f0a3ca39c109d0e48dd51.jpg",
    title: "Box Festa",
    description: "Pizza grande, 12 fatias.",
    subtitle: "Serve 8 pessoas",
    price: 100.9,
  },
];

export { filtersMocks, selectOptionMocks, pizzaMocks, pedidosMocks };
