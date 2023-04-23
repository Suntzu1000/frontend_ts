import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { useForm } from "react-hook-form";
import HText from "@/shared/Htext";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contato = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
    px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contato" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contato)}>
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">FALE CONOSCO,</span> QUAL PRODUTO
            DESEJA?
          </HText>
          <p className="my-5">
            Se você está buscando um produto específico em nosso E-commerce e
            não o encontrou, não se preocupe! Temos uma equipe de atendimento ao
            cliente pronta para ajudar a encontrar o produto que você está
            procurando. Basta acessar a página "Fale Conosco" e nos informar
            qual produto você deseja adquirir.
          </p>
        </motion.div>

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/gabrielfootze@gmail.com"
              method="POST"
            ></form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contato;
