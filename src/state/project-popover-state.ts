import { Project } from "@/types/project";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  open: boolean;
  project: Project | null;
};

type Actions = {
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
  setOpen: (open: boolean) => void;
  setProject: (project: Project) => void;
};

export const useProjectPopover = create<State & Actions>()(
  immer((set) => ({
    open: false,
    project: null,
    toggle: () =>
      set((state) => {
        state.open = !state.open;
      }),
    setTrue: () =>
      set((state) => {
        state.open = true;
      }),
    setFalse: () =>
      set((state) => {
        state.open = false;
      }),
    setOpen: (open) =>
      set((state) => {
        state.open = open;
      }),
    setProject: (project) =>
      set((state) => {
        state.project = project;
      }),
  }))
);
