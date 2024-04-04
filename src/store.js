import {create} from "zustand";

export const useStore= create((set)=>({
    count: 0,
    Increment: () => set(state => ({count: state.count + 1})),
    Decrement: () => set(state => ({count: state.count>=1 ? state.count-1 : 0})),
    Reset: () => set(state => ({count: 0})),
    IncrementAsync: async() => {
        await new Promise((resolve) => setTimeout(resolve,2000))
        set((state)=>({count: state.count + 2}))
    },
    DecrementAsync: async() => {
        await new Promise((resolve) => setTimeout(resolve,2000))
        set((state)=>({count: state.count>=1 ? state.count-2 : 0}))
    }
}))