"use client";

import PoliticingService from "@/modules/politicing-services";
import { usePoliticingFormStepStore } from "@/stores/services/usePoliticingFormStepStore";
import React from "react";
import TutorialVideo from "@/components/tutorial-video";

const trafficTutorialSteps = [
  {
    title: "How to fill application info",
    description: " ",
    thumbnail: "/images/fire.jpeg",
    video: "/videos/demo.mp4",
  },
  {
    title: "Checking restrictions",
    description: "",
    thumbnail: "/images/driving.jpeg",
    video: "/videos/demo.mp4",
  },
  {
    title: "How to make payment",
    description: "",
    thumbnail: "/images/gun.jpeg",
    video: "/videos/demo.mp4",
  },
];

const Page: React.FC = () => {
  const { setCurrentStep, currentStep } = usePoliticingFormStepStore();

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_5fr] justify-center items-center min-h-screen">
      <TutorialVideo steps={trafficTutorialSteps} currentStep={currentStep} />
      <PoliticingService />
    </div>
  );
};

export default Page;
