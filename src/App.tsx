import React from 'react';
import './App.css';
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { TwoColumnGrid } from "./TwoColumnGrid";
type FirstCell = {
  label: string;
  id: string;
};
type SecondCell = {
  label: string;
  id: string;
};
type Item = {
  first: FirstCell;
  second: SecondCell;
};
const allRoles: Item[] = [
  {
    first: { label: "System Administrator", id: "1" },
    second: { label: "Child BU1", id: "1-1" }
  },
  {
    first: { label: "System Customisor", id: "2" },
    second: { label: "Child BU2", id: "2-1" }
  }
];
const assignedRoles: Item[] = [
  {
    first: { label: "Sales User", id: "3" },
    second: { label: "Child BU3", id: "3-1" }
  },
  {
    first: { label: "Manager", id: "4" },
    second: { label: "Child BU4", id: "4-1" }
  }
];
const removedRoles: Item[] = [
  {
    first: { label: "Supervisor", id: "5" },
    second: { label: "Child BU5", id: "5-1" }
  },
  {
    first: { label: "Lead", id: "6" },
    second: { label: "Child BU6", id: "6-1" }
  }
];
function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <TwoColumnGrid data={allRoles} enablesearch={true} />
      <TwoColumnGrid data={assignedRoles} enablesearch={false} />
      <TwoColumnGrid data={removedRoles} enablesearch={false} />
    </FluentProvider>
  );
}

export default App;
