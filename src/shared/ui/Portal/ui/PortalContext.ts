import * as React from "react";

interface Element {
  name: string;
  component: React.ReactNode;
}

export const PortalContext = React.createContext({
  addComponent: (element: Element) => {},
  removeComponent: (name: string) => {},
});
