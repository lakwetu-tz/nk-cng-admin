import React, { ReactNode } from 'react';

interface TableProps<T> {
    columns: { key: keyof T; header: string }[];
    data: T[];
    onSelect?: (selectedItems: T[]) => void;
}

export const Table = <T extends {}>({ columns, data, onSelect }: TableProps<T>) => {
    const [selectedItems, setSelectedItems] = React.useState<T[]>([]);

    const handleSelectItem = (item: T) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(item)
                ? prevSelected.filter((i) => i !== item)
                : [...prevSelected, item]
        );
    };

    React.useEffect(() => {
        if (onSelect) {
            onSelect(selectedItems);
        }
    }, [selectedItems, onSelect]);

    const renderCell = (value: any): ReactNode => {
        return value !== null && value !== undefined ? String(value) : '';
    };

    return (
        <>
            {selectedItems.length > 0 && (
                <div className="mb-4 flex justify-between">
                    <div>
                        <button className="mr-2 px-4 py-2 bg-blue-600 text-white rounded">View Form</button>
                        <button className="mr-2 px-4 py-2 bg-green-600 text-white rounded">Approve Form</button>
                        <button className="mr-2 px-4 py-2 bg-red-600 text-white rounded">Delete Form</button>
                    </div>
                </div>
            )}
            <div className="overflow-x-auto pb-4 mt-16">
                <div className="min-w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg border-gray-300">
                        <table className="table-auto min-w-full rounded-xl">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">
                                        <input
                                            type="checkbox"
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedItems(data);
                                                } else {
                                                    setSelectedItems([]);
                                                }
                                            }}
                                            checked={selectedItems.length === data.length}
                                        />
                                    </th>
                                    {columns.map((column) => (
                                        <th key={String(column.key)} className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">
                                            {column.header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300">
                                {data.map((item, idx) => (
                                    <tr key={idx} className="bg-white transition-all duration-500 hover:bg-gray-50">
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                            <input
                                                type="checkbox"
                                                checked={selectedItems.includes(item)}
                                                onChange={() => handleSelectItem(item)}
                                            />
                                        </td>
                                        {columns.map((column) => (
                                            <td key={String(column.key)} className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                                {renderCell(item[column.key])}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
