import { create } from "zustand"


interface TPoliticingFormStepStore {
	totalStep: number;
	currentStep: number;
	setCurrentStep: (step: number) => void;

	handleNextStep: () => void;
	handlePrevStep: () => void;
}

export const usePoliticingFormStepStore = create<TPoliticingFormStepStore>((set) => ({
	totalStep: 3,
	currentStep: 1,
	setCurrentStep: (currentStep) => set({ currentStep }),
	handleNextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
	handlePrevStep: () => set((state) => ({
		currentStep: state.currentStep - 1
	})
	)
}))