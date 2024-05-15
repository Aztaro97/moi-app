"use client";

import PoliticingService from "@/modules/politicing-services";
import { usePoliticingFormStepStore } from "@/stores/services/usePoliticingFormStepStore";
import React from "react";
import TutorialVideo from "@/components/tutorial-video";

const trafficTutorialSteps = [
  {
    title: "How to fill application info",
    description:
      "In this step, you'll learn how to fill out the application form. We'll go over each field and explain what information you need to provide.",
    thumbnail: "/images/fire.jpeg",
    video: "/videos/demo.mp4",
  },
  {
    title: "Checking restrictions",
    description:
      "This step will guide you through the process of checking for any restrictions that might apply to you. We'll show you where to find this information and how to interpret it.",
    thumbnail: "/images/driving.jpeg",
    video: "/videos/demo.mp4",
  },
  {
    title: "How to make payment",
    description:
      "In the final step, we'll walk you through the payment process. We'll explain how to choose a payment method, enter your payment details, and confirm your payment.",
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
