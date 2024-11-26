import { Project } from "@/types/sanity";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  open: boolean;
  project: null | Project;
};

type Actions = {
  setFalse: () => void;
  setOpen: (open: boolean) => void;
  setProject: (project: Project) => void;
  setTrue: () => void;
  toggle: () => void;
};

export const useProjectPopover = create<Actions & State>()(
  immer((set) => ({
    open: false,
    project: null,
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
    setTrue: () =>
      set((state) => {
        state.open = true;
      }),
    toggle: () =>
      set((state) => {
        state.open = !state.open;
      }),
  }))
);
