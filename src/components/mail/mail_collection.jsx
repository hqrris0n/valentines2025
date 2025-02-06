import Image from "next/image";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Head from 'next/head';

const Mail_collection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const envelopeL = useRef(null);
  const envelopeM = useRef(null);
  const envelopeR = useRef(null);
  const letter = useRef(null);
  const yes1 = useRef(null);
  const yes2 = useRef(null);
  const everything = useRef(null);
  const router = useRouter();


  const openMail = () => {
    if (!isOpen) {
      setIsOpen(true);
      envelopeL.current.className += " open";
      envelopeM.current.className += " open";
      envelopeR.current.className += " open";
      envelopeM.current.classList.remove("shake-mid");
      envelopeM.current.classList.remove("cursor-pointer");

      letter.current.className += " open-mail";
      yes1.current.className += " open-mail-answer";
      yes2.current.className += " open-mail-answer";
      envelopeL.current.classList.remove("pointer-events-none");
      envelopeR.current.classList.remove("pointer-events-none");
      console.log('open');
    }
  }

  const sheSaidYes = () => {
    everything.current.className = "flex hide -mt-36";
    document.title = "SHE SAID YES";
    setTimeout(() => {
      router.push("/success"); // Navigate after 2 seconds
    }, 1000);
  }

  return (
  <div ref={everything} className="flex -mt-36">
      <div ref={envelopeL} className={`w-[280px] h-[146px] rounded-b-md mx-auto bg-[#EEE2B1] shadow-lg z-20 -rotate-45 pointer-events-none`}>
        <div className="sm-front sm-flap"></div>
        <div className="sm-front sm-pocket"></div>
        <Image
          src="/valentines2025/stamp.png"
          alt="stamp"
          width="600"
          height="600"
          className="absolute -ml-4 -mt-28 z-30"
        />
        <Image
          src="/valentines2025/yes.png"
          alt="yes"
          width="100"
          height="100"
          className="absolute ml-[90px] shadow-lg cursor-pointer"
          onClick={sheSaidYes}
          ref={yes1}
        />
      </div>
      <div ref={envelopeM} onClick={openMail} className={`w-[560px] h-[352px] rounded-b-md mx-auto bg-[#EEE2B1] shadow-lg z-30 shake-mid cursor-pointer`}>
      <Image
          src="/valentines2025/stamp.png"
          alt="stamp"
          width="600"
          height="600"
          className="absolute -ml-9 -mt-48 z-40"
        />
        <div className="front flap"></div>
        <div className="front pocket"></div>
        <Image
          src="/valentines2025/letter.png"
          alt="the question"
          width="200"
          height="200"
          className="absolute ml-[180px] shadow-lg"
          ref={letter}
        />
      </div>
      <div ref={envelopeR} className={`w-[280px] h-[146px] rounded-b-md mx-auto bg-[#EEE2B1] shadow-lg z-20 rotate-45 pointer-events-none`}>
        <div className="sm-front sm-flap"></div>
        <div className="sm-front sm-pocket"></div>
        <Image
          src="/valentines2025/stamp.png"
          alt="stamp"
          width="600"
          height="600"
          className="absolute -ml-4 -mt-28 z-30"
        />
        <Image
            src="/valentines2025/yes.png"
            alt="yes"
            width="100"
            height="100"
            className="absolute ml-[90px] shadow-lg cursor-pointer"
            onClick={sheSaidYes}
            ref={yes2}
        />
      </div>
    </div>
  );
};

export default Mail_collection;