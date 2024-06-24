import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  SortingState,
} from '@tanstack/react-table'
import { useMemo, useState } from 'preact/hooks'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import './PerformanceTable.css'
import { performanceTableData } from 'app/constants/constant'

export function PerformanceTable() {
  const data = useMemo(() => performanceTableData, [])

  const performanceColors = {
    Excellent: '#22C55E',
    'Improving Performer': '#2563EB',
    'Not Provided': '#EF4444',
  }

  const columns = useMemo<
    ColumnDef<{
      inspector: string
      inspectorPic: string
      total_inspection: string
      performance: string
    }>[]
  >(
    () => [
      {
        header: 'Inspector',
        accessorKey: 'inspector',
        cell: ({ row, getValue }) => (
          <div className="inspector-cell">
            <img
              src={row.original.inspectorPic}
              alt={row.original.inspector}
              className="inspector-img"
            />
            {getValue() as string}
          </div>
        ),
      },
      {
        header: 'Total Inspection',
        accessorKey: 'total_inspection',
      },
      {
        header: 'Performance',
        accessorKey: 'performance',
        cell: ({ row, getValue }) => (
          <div className="performance-cell">
            <div
              className="performance-circle"
              style={{ backgroundColor: performanceColors[row.original.performance] }}
            />
            {getValue() as string}
          </div>
        ),
      },
    ],
    []
  )

  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
  })

  const handleSort = (columnId: string, direction: 'asc' | 'desc') => {
    setSorting([{ id: columnId, desc: direction === 'desc' }])
  }

  return (
    <div className="performance-table">
      <div className="performance-header">
        <div style={{ color: '#010101' }}>Performance</div>
        <div className="performance-colors">
          {Object.entries(performanceColors).map(([key, color], index) => (
            <div key={index} className="color-indicator">
              <div className="color-circle" style={{ backgroundColor: color }} />
              {key}
            </div>
          ))}
        </div>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="table-header-row">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="table-header">
                    <div className="header-content">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      <div className="sort-icons">
                        <button onClick={() => handleSort(header.column.id, 'asc')}>
                          <ChevronUp
                            size="$1"
                            className={`sort-icon ${header.column.getIsSorted() === 'asc' ? 'active' : ''}`}
                          />
                        </button>
                        <button onClick={() => handleSort(header.column.id, 'desc')}>
                          <ChevronDown
                            size="$1"
                            className={`sort-icon ${header.column.getIsSorted() === 'desc' ? 'active' : ''}`}
                          />
                        </button>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="table-row">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="table-cell">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
