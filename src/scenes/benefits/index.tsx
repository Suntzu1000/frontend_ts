import {
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "@/shared/types";
import HText from "@/shared/Htext";
import Benefit from "./Benefits";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import ActionButton from "@/shared/ActionButton";

const beneficios: Array<BenefitType> = [
  {
    icon: <ArrowTrendingUpIcon className="h-6 w-6" />,
    title: "Crescimento",
    description:
      "O comércio eletrônico, ou Ecommerce, tem crescido significativamente nos últimos anos e se consolidado como uma das principais formas de compra e venda no mundo.",
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    title: "Qualidade",
    description:
      "Nosso Ecommerce tem um compromisso firme com a satisfação do cliente e isso se reflete na qualidade do nosso atendimento.",
  },
  {
    icon: <ShoppingBagIcon className="h-6 w-6" />,
    title: "Vantagens de Comprar Aqui",
    description:
      "Comprar em nosso Ecommerce é a escolha certa para quem busca praticidade, qualidade e economia. Temos uma ampla seleção de produtos das melhores marcas, preços competitivos, promoções exclusivas e entregas rápidas em todo o país!",
  },
];
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefícios)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Descubra as últimas tendências em nosso Ecommerce!</HText>
          <p className="my-5 text-sm">
            Entre na moda e encontre tudo o que você precisa para renovar seu
            estilo em nosso Ecommerce! De roupas a acessórios, temos as últimas
            tendências para você arrasar no visual. Não perca tempo e aproveite
            nossas ofertas exclusivas agora mesmo!
          </p>
        </motion.div>

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {beneficios.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img  className="mx-auto" src={BenefitsPageGraphic} alt="Benefícios" />

          <div>
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Transforme sua vida com nossos{""}{" "}
                    <span className="text-primary-500">Produtos</span>{" "}
                  </HText>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Em nosso E-commerce, oferecemos uma grande variedade de produtos
                para atender às diversas necessidades e preferências de nossos
                clientes. Temos desde produtos eletrônicos, como smartphones,
                tablets e laptops, até produtos de beleza, moda e decoração.
              </p>
              <p className="mb-5">
                oferecemos produtos para saúde e bem-estar, como suplementos
                alimentares, equipamentos de ginástica e produtos naturais. Além
                disso, temos uma ampla gama de produtos para casa e jardim,
                incluindo móveis, utensílios domésticos, ferramentas de
                jardinagem e muito mais.
              </p>
            </motion.div>

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Produtos
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
