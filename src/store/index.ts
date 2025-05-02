import { create } from "zustand"

type StoreTypes = {
    token: string;
    addtoken: (token: string) => void;
    removetoken: () => void;
}

const getInitialToken = () => {
    if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem("token") || '""');
    }
    return "";
};

export const useStore = create<StoreTypes>((set) => ({
    token: getInitialToken(),
    addtoken: (token) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("token", JSON.stringify(token));
        }
        set({ token });
    },
    removetoken: () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("token");
        }
        set({ token: "" });
    }
}))
