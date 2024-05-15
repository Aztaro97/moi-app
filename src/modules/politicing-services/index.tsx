import React from "react";

import PoliticingFormStepOne from "@/modules/politicing-services/politicing-services-form/politicing-form-step-one";
import PoliticingFormStepThree from "@/modules/politicing-services/politicing-services-form/politicing-form-step-three";
import PoliticingFormStepTwo from "@/modules/politicing-services/politicing-services-form/politicing-form-step-two";
import { usePoliticingFormStepStore } from "@/stores/services/usePoliticingFormStepStore";
import Progress from "@/components/Progress";
import PoliticingProgressBar from "./politicing-progress-bar";

export default function PoliticingService() {
  const { setCurrentStep, currentStep } = usePoliticingFormStepStore();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PoliticingFormStepOne />;
      case 2:
        return <PoliticingFormStepTwo />;
      case 3:
        return <PoliticingFormStepThree />;
      default:
        return null;
    }
  };
  return (
    <div className="">
      <PoliticingProgressBar currentStep={currentStep} />
      <h1>Service Description</h1>
      <p className="text-sm">
        By this service, you may apply to create a new traffic file "First
        time", or apply to create another traffic file "To obtain a new traffic
        category license", Please note that once the application is approved,
        you must return to the service page to complete your application.
      </p>
      <div className="w-full mt-10">{renderStep()}</div>
    </div>
  );
}
