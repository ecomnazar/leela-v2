import { create } from "zustand";

type TModalType = "create-account" | "ask-question";

interface State {
  type: TModalType;
  isOpen: boolean;
  data: any;
}
interface Action {
  openModal: (type: TModalType, data?: any) => void;
  closeModal: VoidFunction;
}

export const useModal = create<State & Action>((set) => ({
  type: "create-account",
  isOpen: false,
  data: null,
  openModal: (type, data) => set(() => ({ type, isOpen: true, data })),
  closeModal: () => set(() => ({ isOpen: false })),
}));
