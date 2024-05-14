import { create } from "zustand";


type TModal = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}


export const useDepartmentServicesModal = create<TModal>((set) => ({
	isOpen: false,
	setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));