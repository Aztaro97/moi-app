import { create } from "zustand";


type TModal = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;

	clusterSelected: string;
	setClusterSelected: (clusterSelected: string) => void;
}


export const useDepartmentModal = create<TModal>((set) => ({
	isOpen: false,
	setIsOpen: (isOpen: boolean) => set({ isOpen }),

	clusterSelected: "",
	setClusterSelected: (clusterSelected: string) => set({
		clusterSelected
	}),
}));