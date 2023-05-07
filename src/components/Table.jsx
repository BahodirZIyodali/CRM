import React from 'react'

const Table = () => {
  return (
    <table className='table table-hover'>
      <thead className='bg-primary text-white'>
        <tr>
          <th>N^</th>
          <th>O'quvchi ismi</th>
          <th>Telefon nomer</th>
          <th>Yo'nalish</th>
          <th>Ota-ona(F.I.Sh)</th>
          <th>Ota-ona(tel)</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>+998949813606</td>
          <td>Frontend</td>
          <td>Jane Doe</td>
          <td>+998956585566</td>
        </tr>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>+998949813606</td>
          <td>Frontend</td>
          <td>Jane Doe</td>
          <td>+998956585566</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table