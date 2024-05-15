import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


interface ThreeDCardProps {
  serviceTitle: string; // Define prop types
  serviceDescription: string;
  onNextStep: () => void;
  onPrevStep: () => void;
  children: React.ReactNode;
}

export function ThreeDCard({
  serviceTitle,
  serviceDescription,
  onNextStep,
  onPrevStep,
  children,
}: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="border-solid border-slate-400 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {serviceTitle}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {serviceDescription}
        </CardItem>
        {children}
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            onClick={onPrevStep}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Go Back
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            onClick={onNextStep}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Next Step
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
