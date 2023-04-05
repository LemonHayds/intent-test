import Image, { StaticImageData } from "next/image";
import React from "react";
import BlurGradientBackground from "../ui/BlurGradientBackground";

type TopicCardProps = {
  icon: StaticImageData;
  title: string;
  summary: string;
};

const TopicCard = ({ icon, title, summary }: TopicCardProps) => {
  return (
    <div className="bg-white flex flex-col items-center justify-center h-full w-full py-4 px-6 mb-1 hover:cursor-pointer hover:scale-105 transition-all">
      <div className="flex justify-center items-center relative mt-6 mb-8">
        <Image className="z-10" src={icon} alt={title} />
        <BlurGradientBackground />
      </div>
      <h1 className="my-2 font-avenirHeavy">{title}</h1>
      <p className="font-avenirMedium text-wealthTxtBlack leading-6 text-[16px] lg:px-8">
        {summary}
      </p>
    </div>
  );
};

export default TopicCard;
