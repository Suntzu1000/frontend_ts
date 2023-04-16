import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import React from "react";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/page.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="paginainicial"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      <div>
        <div>
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="Img Página Inicial" />
              </div>
            </div>
            <p>Aqui será onde você vai encontrar os melhores produtos!</p>
          </div>
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Entrar
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Contato)}
              href={`#${SelectedPage.Contato}`}
            ></AnchorLink>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default Home;
