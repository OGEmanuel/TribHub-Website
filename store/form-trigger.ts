import { create } from "zustand";

interface formTriggerState {
  open: boolean;
  success: boolean;
  setOpen: (when: boolean) => void;
  setSuccess: (when: boolean) => void;
}

export const useFormTriggerStore = create<formTriggerState>()((set) => ({
  open: false,
  success: false,
  setOpen: (when) => set((state) => ({ open: (state.open = when) })),
  setSuccess: (when) => set((state) => ({ success: (state.success = when) })),
}));
