import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  SortingState,
} from "@tanstack/react-table";
import { useMemo, useState } from "preact/hooks";
import { ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import "./UpcomingInspectionTable.css";
import { upcomingInspectionTableData } from "app/constants/constant";

export function UpcomingInspectionTable () {
  const data = useMemo(() => upcomingInspectionTableData, []);

  const columns = useMemo<
    ColumnDef<{
      inspector: string;
      inspectorPic: string;
      clients: string;
      address: string;
    }>[]
  >(
    () => [
      {
        header: "Inspector",
        accessorKey: "inspector",
        cell: ({ row, getValue }) => (
          <div className="inspector-cell">
            <img
              src={row.original.inspectorPic}
              alt={row.original.inspector}
              className="inspector-img"
            />
            {getValue()}
          </div>
        ),
      },
      {
        header: "Clients",
        accessorKey: "clients",
      },
      {
        header: "Address",
        accessorKey: "address",
      },
    ],
    []
  );

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleSort = (columnId: string, direction: "asc" | "desc") => {
    setSorting([{ id: columnId, desc: direction === "desc" }]);
  };

  return (
    <div className="upcoming-inspection-table">
      <div className="upcoming-inspection-header">Upcoming Inspection</div>
      <div className="table-container">
        <table className="table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="table-header-row">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="table-header"
                  >
                    <div className="header-content">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      <div className="sort-icons">
                        <ChevronUp
                          size="$1"
                          onClick={() => handleSort(header.column.id, "asc")}
                          className={`sort-icon ${header.column.getIsSorted() === "asc" ? "active" : ""}`}
                        />
                        <ChevronDown
                          size="$1"
                          onClick={() => handleSort(header.column.id, "desc")}
                          className={`sort-icon ${header.column.getIsSorted() === "desc" ? "active" : ""}`}
                        />
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="table-body">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="table-row">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="table-cell"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

