import Logo from "@/assets/Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {AiFillGithub} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <AnchorLink href="#paginainicial">
            {" "}
            <img alt="logo" src={Logo} />
          </AnchorLink>
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            <a
              href="https://github.com/Suntzu1000"
              target="_blank"
              rel="noopener noreferrer"
            ><AiFillGithub/></a>
          </p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contato</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(62)9 9539-6918</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
