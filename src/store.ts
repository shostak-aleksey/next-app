import create from "zustand";

interface AppState {
  count: number;
  increment: () => void;
}

export const useStore = create<AppState>(
  (
    set: (arg0: (state: { count: number }) => { count: number }) => unknown
  ) => ({
    count: 0,
    increment: () =>
      set((state: { count: number }) => ({ count: state.count + 1 })),
  })
);
