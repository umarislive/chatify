import { create } from "zustand";

export const useAuthStore = create((set) => ({
  login: () => {
    console.log("Login Successfully");
  },
}));
