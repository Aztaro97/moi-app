import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type TTutoStep = {
  title: string;
  description: string;
  thumbnail: string;
  video: string;
};

interface Props {
  steps: TTutoStep[];
  currentStep: number;
}

export default function TutorialVideo({ currentStep, steps }: Props) {
  const [currentTuto, setCurrentTuto] = useState<TTutoStep | null>(null);

  useEffect(() => {
    setCurrentTuto(steps[currentStep - 1]);
  }, [currentStep]);
  return (
    <div className="p-4 border-r h-full  bg-[#111]">
      <h1 className="text-3xl mb-5">
        <span className="text-primary leading-relaxed">Tutorial:</span>{" "}
        {currentTuto?.title}
      </h1>
      {currentTuto && currentTuto.title && (
        <ReactPlayer
          controls
          url={currentTuto.video}
          light={currentTuto.thumbnail}
        />
      )}
      <p className="mt-7">{currentTuto?.description}</p>
    </div>
  );
}
