import { create } from "zustand";
// state management with Zustand

// define the type of the state
type Counter = {
    count: number;
    increment: () => void;
    decrement: () => void;
};

// create the store with Zustand
export const useCounter = create<Counter>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));
