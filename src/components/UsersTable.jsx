// Imports 
import React, { useContext } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ThemeContext } from '../context/ThemeContext'


export const UsersTable = ({ data, search }) => {
  const { muiTheme } = useContext(ThemeContext)

  const filteredData = data.filter((item) => {
    const searchQuery = search.toLowerCase();
    return (
      item.first_name.toLowerCase().includes(searchQuery) ||
      item.last_name.toLowerCase().includes(searchQuery) ||
      item.position.toLowerCase().includes(searchQuery) ||
      item.country_code.toLowerCase().includes(searchQuery) ||
      item.email.toLowerCase().includes(searchQuery)
    )
  })

  return (
    <TableContainer 
      component={Paper}
      sx={{ boxShadow: 'none' }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontFamily: 'Montserrat', color: muiTheme.palette.text.primary, fontSize: '15px', fontWeight: 500}}
            >
              ID
            </TableCell>
            <TableCell 
              align="center"
              sx={{ fontFamily: 'Montserrat', color: muiTheme.palette.text.primary, fontSize: '15px', fontWeight: 500}}
              >
                First Name
            </TableCell>
            <TableCell 
              align="center"
              sx={{ fontFamily: 'Montserrat', color: muiTheme.palette.text.primary, fontSize: '15px', fontWeight: 500}}
              >
                Last Name
            </TableCell>
            <TableCell 
              align="center"
              sx={{ fontFamily: 'Montserrat', color: muiTheme.palette.text.primary, fontSize: '15px', fontWeight: 500}}
              >
                Position
            </TableCell>
            <TableCell 
              align="center"
              sx={{ fontFamily: 'Montserrat', color: muiTheme.palette.text.primary, fontSize: '15px', fontWeight: 500}}
              >
                Country Code
            </TableCell>
            <TableCell 
              align="right"
              sx={{ fontFamily: 'Montserrat', color: muiTheme.palette.text.primary, fontSize: '15px', fontWeight: 500}}
              >
                Email
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell 
                component="th" scope="row"
                sx={{ fontFamily: 'Montserrat', color: muiTheme.palette.text.primary, fontSize: '15px', fontWeight: 400}}
              >
                {item.id}
              </TableCell>
              <TableCell 
                align="center"
                sx={{ fontFamily: 'Montserrat', color: muiTheme.palette.text.primary, fontSize: '15px', fontWeight: 400}}
              >
                {item.first_name}
              </TableCell>
              <TableCell 
                align="center"
                sx={{ fontFamily: 'Montserrat', color: muiTheme.palette.text.primary, fontSize: '15px', fontWeight: 400}}
              >
                {item.last_name}
              </TableCell>
              <TableCell 
                align="center"
                sx={{ fontFamily: 'Montserrat', color: muiTheme.palette.text.primary, fontSize: '15px', fontWeight: 400}}
              >
                {item.position}
              </TableCell>
              <TableCell 
                align="center"
                sx={{ fontFamily: 'Montserrat', color: muiTheme.palette.text.primary, fontSize: '15px', fontWeight: 400}}
              >
                {item.country_code}
              </TableCell>
              <TableCell 
                align="right"
                sx={{ fontFamily: 'Montserrat', color: muiTheme.palette.text.primary, fontSize: '15px', fontWeight: 400}}
              >
                {item.email}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
