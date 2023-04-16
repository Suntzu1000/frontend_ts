export enum SelectedPage{
    PaginaInicial = "paginainicial",
    Sobre = "sobre",
    Produtos = "produtos",
    Benefícios = "beneficios",
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