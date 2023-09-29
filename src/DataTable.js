import React, { useState } from 'react';
import jsonData from './data';

const DataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = jsonData.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(filterText.toLowerCase())
      )
    );

  const headers = Object.keys(jsonData[0]);

  return (
    <div>
     <input className='filter-input'
        type="text"
        placeholder="Filter..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    <table className="custom-table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{item[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DataTable;