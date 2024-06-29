import { create } from "zustand";

interface formTriggerState {
  open: boolean;
  success: boolean;
  index: number;
  setIndex: (when: number) => void;
  setOpen: (when: boolean) => void;
  setSuccess: (when: boolean) => void;
}

export const useFormTriggerStore = create<formTriggerState>()((set) => ({
  open: false,
  success: false,
  index: 0,
  setIndex: (when) => set((state) => ({ index: (state.index = when) })),
  setOpen: (when) => set((state) => ({ open: (state.open = when) })),
  setSuccess: (when) => set((state) => ({ success: (state.success = when) })),
}));
