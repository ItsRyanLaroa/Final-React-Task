// src/Employees.js

import React from 'react'
import Employee from './Employee'

const Employees = () => {
  // 3. Data Setup
  const employees = [
    { name: 'Lapiz', position: 'Manager', salary: 20000, status: 'Active' },
    {
      name: 'Ryan',
      position: 'Developer',
      salary: 18000,
      status: 'Active',
    },
    {
      name: 'Gian',
      position: 'Designer',
      salary: 15000,
      status: 'Active',
    },
    {
      name: 'Lebron James',
      position: 'Manager',
      salary: 18000,
      status: 'Active',
    },
    {
      name: 'Ernest James ',
      position: 'Developer',
      salary: 18000,
      status: 'Active',
    },
    {
      name: 'Creshell',
      position: 'Designer',
      salary: 16000,
      status: 'Active',
    },
    { name: 'Mike', position: 'Manager', salary: 18000, status: 'Active' },
    {
      name: 'Kyle',
      position: 'Developer',
      salary: 18000,
      status: 'Active',
    },
    {
      name: 'Travis',
      position: 'Designer',
      salary: null,
      status: 'Not Active',
    },
    {
      name: 'Bastida',
      position: 'Manager',
      salary: null,
      status: 'Not Active',
    },
  ]

  return (
    <div>
      <h1>Employees</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Employee Names</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <Employee key={index} index={index} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Employees
