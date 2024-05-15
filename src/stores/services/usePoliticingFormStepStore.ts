import { create } from "zustand"


interface TPoliticingFormStepStore {
	totalStep: number;
	currentStep: number;
	setCurrentStep: (step: number) => void
}

export const usePoliticingFormStepStore = create<TPoliticingFormStepStore>((set) => ({
	totalStep: 3,
	currentStep: 1,
	setCurrentStep: (currentStep) => set({ currentStep })
}))