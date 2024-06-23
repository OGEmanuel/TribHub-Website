import { create } from "zustand";

interface formTriggerState {
  open: boolean;
  setOpen: (when: boolean) => void;
}

export const useFormTriggerStore = create<formTriggerState>()((set) => ({
  open: false,
  setOpen: (when) => set((state) => ({ open: (state.open = when) })),
}));
