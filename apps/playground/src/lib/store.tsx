import create from 'zustand';

export type DemoComponent =
  | {
      (): JSX.Element;
      displayName: string;
    }
  | {
      (): JSX.Element;
      displayName: string;
    };

export interface PlaygroundState {
  activeComponentName?: string;
  ActiveComponent?: DemoComponent;
  setActiveComponent: (name: string, component: DemoComponent) => void;
}

export const useStore = create<PlaygroundState>((set) => ({
  setActiveComponent: (name, component) => {
    set({
      activeComponentName: name,
      ActiveComponent: component,
    });
  },
}));
