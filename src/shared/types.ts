export enum SelectedPage{
    PaginaInicial = "inicial",
    Sobre = "sobre",
    Produtos = "produtos",
    Benefícios = "benefícios",
    Contato = "contato"
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }
  
  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }

 export const product = [
    {
      image: "https://via.placeholder.com/150",
      name: "Produto 1",
      price: 99.99,
      category: "Categoria 1",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Produto 2",
      price: 49.99,
      category: "Categoria 2",
    },
    // ...more products
  ];