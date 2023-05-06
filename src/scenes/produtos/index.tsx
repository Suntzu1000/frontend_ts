import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

const featuredProducts = [
  "../assets/Logo.png",
  "../assets/Logo.png",
  "../assets/Logo.png",
];

let count = 0;
let slideInterval: NodeJS.Timeout;


interface ISliderState {
  currentIndex: number;
}

export default function Slider(): JSX.Element {
  const [state, setState] = useState<ISliderState>({ currentIndex: 0 });

  const slideRef = useRef<HTMLDivElement>(null);

  const removeAnimation = () => {
    slideRef.current!.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current!.addEventListener("animationend", removeAnimation);
    slideRef.current!.addEventListener("mouseenter", pauseSlider);
    slideRef.current!.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setState({ currentIndex: count });
    slideRef.current!.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (state.currentIndex + productsLength - 1) % productsLength;
    setState({ currentIndex: count });
    slideRef.current!.classList.add("fade-anim");
  };

  return (
    <div id="produtos" ref={slideRef} className="w-full select-none relative gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <div className="aspect-w-16 aspect-h-9">
        <img src={featuredProducts[state.currentIndex]} alt="" />
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
}