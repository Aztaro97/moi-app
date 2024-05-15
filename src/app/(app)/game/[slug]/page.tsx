"use client";

import Progress from "@/components/Progress";
import { ThreeDCard } from "@/components/ThreeDCard";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React ,{useState} from "react";

const Page: React.FC = () => {


	const [currentStep, setCurrentStep] = useState(1);
	const [words, setWords] = useState("Step-1: Please select the vehicle from the list of vehicles and click the next step button");
	
	const handleNextStep = () => {
	
		setCurrentStep(currentStep + 1);

	  };
	const handlePrevStep = () => {
		if (currentStep > 1) {

			setCurrentStep(currentStep - 1)
		}
	}
	  
	
  
	return (
	  <div className="flex justify-center items-center h-screen overflow-hidden">
	
		<div className="w-1/3 p-4 border-r border-gray-300">
		  { currentStep === 1 && <TextGenerateEffect words="Step-1: Please select the vehicle from the list of vehicles and click the next step button" />}
		  { currentStep === 2 && <TextGenerateEffect words="Step-2: Please check and verify the vehicle and amount click on next step" />}
		  { currentStep === 3 && <TextGenerateEffect words="Step-3: Please click on the next step to go to our payment page" />}
		</div>
  
	
		<div className="w-2/3 pt-6 bg-white  flex justify-center items-center flex-col ">
		  <div className="mt-2 pt-2  text-black">
			<Progress currentStep={currentStep}/>
		  </div>  
		  {currentStep === 1 && <ThreeDCard
			serviceTitle="Select Your Vehicle"
			serviceDescription="Please Select the vehicles"
			imageUrl="/images/traffic.jpg"
			onNextStep={handleNextStep}
			onPrevStep={handlePrevStep}
			/>}
		  {currentStep === 2 && <ThreeDCard
			serviceTitle="Service Summary"
			serviceDescription="Please verify the vehicle and amount"
			imageUrl="/images/policecar.jpg"
			onNextStep={handleNextStep}
			onPrevStep={handlePrevStep}
			/>}
		  {currentStep === 3 && <ThreeDCard
			serviceTitle="Online Payment"
			serviceDescription="Please click next to our online payment portal"
			imageUrl="/images/punityservice.jpg"
			onNextStep={handleNextStep}
			onPrevStep={handlePrevStep}
			/>}
     
		</div>
	  </div>
	);
  };
  
  export default Page;