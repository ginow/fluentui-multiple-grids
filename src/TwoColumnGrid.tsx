import {
  DataGridBody,
  DataGridRow,
  DataGrid,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridCell,
  DataGridProps,
  TableColumnDefinition,
  createTableColumn,
  Input,
  Label
} from "@fluentui/react-components";
import { Search24Filled } from "@fluentui/react-icons";
import * as React from "react";
import { ChangeEvent, useState } from "react";

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
type InputOnChangeData = {
  value: string;
};
interface GridProps {
  className?: string;
  data: Item[];
  firstColumnName: string;
  secondColumnName: string;
  title: string;
}

export const TwoColumnGrid = (props: GridProps) => {
  const { className, data, firstColumnName, secondColumnName, title } = props;
  const [items, setItems] = useState<Item[]>(data);
  const columns: TableColumnDefinition<Item>[] = [
    createTableColumn<Item>({
      columnId: "firstColumnId",
      compare: (a, b) => {
        return a.first.label.localeCompare(b.first.label);
      },
      renderHeaderCell: () => {
        return firstColumnName;
      },
      renderCell: (item) => {
        return item.first.label;
      }
    }),
    createTableColumn<Item>({
      columnId: "secondColumnId",
      compare: (a, b) => {
        return a.first.label.localeCompare(b.first.label);
      },
      renderHeaderCell: () => {
        return secondColumnName;
      },
      renderCell: (item) => {
        return item.second.label;
      }
    })
  ];
  function onChangeSearchInput(
    ev: ChangeEvent<HTMLInputElement>,
    text: InputOnChangeData
  ) {
    if (text.value === "" || text.value === null || text.value === undefined)
      setItems(data);
    else
      setItems(
        data.filter((x) =>
          x.first.label.toLowerCase().includes(text.value.toLowerCase())
        )
      );
  }
  const defaultSortState = React.useMemo<
    Parameters<NonNullable<DataGridProps["onSortChange"]>>[1]
  >(() => ({ sortColumn: "firstColumnId", sortDirection: "ascending" }), []);

  return (
    <div className={className}>
      <Label style={{ marginBottom: "10px" }} size="medium" weight="semibold" >{title}</Label>
      <br />
      <Input
        placeholder="Search"
        contentBefore={<Search24Filled />}
        id="search"
        type="search"
        onChange={onChangeSearchInput}
      />
      <DataGrid
        items={items}
        columns={columns}
        sortable
        defaultSortState={defaultSortState}
        selectionMode="multiselect"
        getRowId={(item) => item.first.id}
        onSelectionChange={(e, data) => console.log(data)}
      >
        <DataGridHeader>
          <DataGridRow selectionCell={{ "aria-label": "Select all rows" }}>
            {({ renderHeaderCell }) => (
              <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
            )}
          </DataGridRow>
        </DataGridHeader>
        <DataGridBody<Item>>
          {({ item, rowId }) => (
            <DataGridRow<Item>
              key={rowId}
              selectionCell={{ "aria-label": "Select row" }}
            >
              {({ renderCell }) => (
                <DataGridCell>{renderCell(item)}</DataGridCell>
              )}
            </DataGridRow>
          )}
        </DataGridBody>
      </DataGrid>
    </div>
  );
};
