import Image from "next/image";
import { useState, useRef, useLayoutEffect } from "react";

const Sm_envelope = ({isOpen, imgLocation, rotateClass}) => {
  const envelope = useRef(null);
  const letter = useRef(null);

  const openMail = () => {
    if (!isOpen) {
      isOpen = true;
      envelope.current.className += " open";
      envelope.current.classList.remove("shake");
      envelope.current.classList.remove("cursor-pointer");

      letter.current.className += " open-mail";
      console.log('open');
    }
  }

  return (
    <div ref={envelope} onClick={openMail} className={`w-[560px] h-[352px] rounded-b-md mx-auto bg-[#EEE2B1] shadow-lg z-10 ${rotateClass} cursor-pointer`}>
      <div className="front flap"></div>
      <div className="front pocket"></div>
      <Image
        src={imgLocation}
        alt="the question"
        width="200"
        height="200"
        className="absolute ml-[180px] shadow-lg"
        ref={letter}
      />
    </div>
  );
};

export default Sm_envelope;