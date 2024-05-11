import { create } from "zustand";


type TModal = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}


export const useDepartmentModal = create<TModal>((set) => ({
	isOpen: false,
	setIsOpen: (isOpen: boolean) => set({ isOpen }),
}))