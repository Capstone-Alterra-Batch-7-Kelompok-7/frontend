import { create } from "zustand";

export const useResetStore = create((set) => ({
  email: null,
  otpFix: null,
  setEmail: (email) => set({ email }),
  setOtpFix: (otp) => set({ otp }),
}));
