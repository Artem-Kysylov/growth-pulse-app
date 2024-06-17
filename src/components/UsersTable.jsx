// Imports 
import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(userName, id, date, position, email) {
  return { userName, id, date, position, email };
}

const rows = [
  createData('John Smith', 1, '22.05.24', 'Manager', 'john.smith@mail.com'),
  createData('Alice Johnson', 2, '23.06.25', 'Developer', 'alice.johnson@mail.com'),
  createData('Michael Brown', 3, '24.07.26', 'Designer', 'michael.brown@mail.com'),
  createData('Emma Wilson', 4, '25.08.27', 'Analyst', 'emma.wilson@mail.com'),
  createData('Olivia Davis', 5, '26.09.28', 'Engineer', 'olivia.davis@mail.com'),
  createData('Noah Miller', 6, '27.10.29', 'Consultant', 'noah.miller@mail.com'),
  createData('Liam Martinez', 7, '28.11.30', 'Product Manager', 'liam.martinez@mail.com'),
  createData('Sophia Anderson', 8, '29.12.31', 'Marketing', 'sophia.anderson@mail.com'),
  createData('Isabella Thomas', 9, '30.01.32', 'HR', 'isabella.thomas@mail.com'),
  createData('Mason Lee', 10, '31.02.33', 'Sales', 'mason.lee@mail.com'),
  createData('Ethan Taylor', 11, '01.03.34', 'Support', 'ethan.taylor@mail.com'),
]


export const UsersTable = () => {
  return (
    <TableContainer 
      component={Paper}
      sx={{ boxShadow: 'none' }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 500}}
            >
              Name
            </TableCell>
            <TableCell 
              align="right"
              sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 500}}
              >
                ID
            </TableCell>
            <TableCell 
              align="right"
              sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 500}}
              >
                Date
            </TableCell>
            <TableCell 
              align="right"
              sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 500}}
              >
                Position
            </TableCell>
            <TableCell 
              align="right"
              sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 500}}
              >
                Email
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.userName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell 
                component="th" scope="row"
                sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 400}}
              >
                {row.userName}
              </TableCell>
              <TableCell 
                align="right"
                sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 400}}
              >
                {row.id}
              </TableCell>
              <TableCell 
                align="right"
                sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 400}}
              >
                {row.date}
              </TableCell>
              <TableCell 
                align="right"
                sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 400}}
              >
                {row.position}
              </TableCell>
              <TableCell 
                align="right"
                sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 400}}
              >
                {row.email}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
