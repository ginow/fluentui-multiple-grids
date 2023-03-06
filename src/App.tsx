import './App.css';
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { TwoColumnGrid } from "./TwoColumnGrid";
import { TwoColumnViewGrid } from './TwoColumnViewGrid';
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
    second: { label: "BU1", id: "1-1" }
  },
  {
    first: { label: "System Customisor", id: "2" },
    second: { label: "BU2", id: "2-1" }
  }
];
const assignedRoles: Item[] = [
  {
    first: { label: "Sales User", id: "3" },
    second: { label: "BU3", id: "3-1" }
  },
  {
    first: { label: "Manager", id: "4" },
    second: { label: "BU4", id: "4-1" }
  }
];
const removedRoles: Item[] = [
  {
    first: { label: "Supervisor", id: "5" },
    second: { label: "BU5", id: "5-1" }
  },
  {
    first: { label: "Lead", id: "6" },
    second: { label: "BU6", id: "6-1" }
  }
];
function App() {
  return (
    <FluentProvider className="grid-container" theme={webLightTheme}>
      <TwoColumnGrid className="left-grid" data={allRoles} firstColumnName="Security Role" secondColumnName="Business Unit" title="All Security Roles" />
      <TwoColumnViewGrid className="righttop-grid" data={assignedRoles} firstColumnName="Security Role" secondColumnName="Business Unit" title="Security Roles to be assigned" />
      <TwoColumnViewGrid className="rightbottom-grid" data={removedRoles} firstColumnName="Security Role" secondColumnName="Business Unit" title="Security Roles to be removed" />
    </FluentProvider>
  );
}

export default App;
