// Imports 
import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'


export const ClientsTable = ({ data, onSelectedItemsChange }) => {
    const [checkedItems, setCheckedItems] = useState(data.map(() => false))
    const [isHeaderChecked, setHeaderChecked] = useState(false) 

    const handleHeaderCheckboxChange = (event) => {
        const newChecked = event.target.checked
        setHeaderChecked(newChecked)
        const newCheckedItems = checkedItems.map(() => newChecked)
        setCheckedItems(newCheckedItems)
        onSelectedItemsChange(data.filter((item, index) => newCheckedItems[index]))
    }

    const handleCheckboxChange = (index) => (event) => {
        const newCheckedItems = [...checkedItems]
        newCheckedItems[index] = event.target.checked
        setCheckedItems(newCheckedItems)

        const allChecked = newCheckedItems.every((item) => item)
        setHeaderChecked(allChecked)
    }

    
  return (
    <TableContainer 
        component={Paper}
        sx={{ boxShadow: 'none' }}
    >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Checkbox
                            sx={{ color: '#40A578',
                                '&.Mui-checked': {
                                    color: '#40A578',
                                  },
                            }}
                            checked={isHeaderChecked}
                            onChange={handleHeaderCheckboxChange}
                        />
                    </TableCell>
                    <TableCell
                        sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 500}}
                    >
                        ID
                    </TableCell>
                    <TableCell 
                        align="center"
                        sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 500}}
                        >
                        First Name
                    </TableCell>
                    <TableCell 
                        align="center"
                        sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 500}}
                        >
                        Last Name
                    </TableCell>
                    <TableCell 
                        align="center"
                        sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 500}}
                        >
                        Email
                    </TableCell>
                    <TableCell 
                        align="center"
                        sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 500}}
                        >
                        Credit Card
                    </TableCell>
                    <TableCell 
                        align="right"
                        sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 500}}
                        >
                        IP Address
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow
                        key={item.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell 
                            component="th" scope="row"
                            sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 400}}
                        >
                            <Checkbox
                                sx={{ color: '#40A578',
                                    '&.Mui-checked': {
                                        color: '#40A578',
                                    },
                                }}
                                checked={checkedItems[index]}
                                onChange={handleCheckboxChange(index)}
                            /> 
                        </TableCell>
                        <TableCell 
                            component="th" scope="row"
                            sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 400}}
                        >
                            {item.id}
                        </TableCell>
                        <TableCell 
                            align="center"
                            sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 400}}
                        >
                            {item.first_name}
                        </TableCell>
                        <TableCell 
                            align="center"
                            sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 400}}
                        >
                            {item.last_name}
                        </TableCell>
                        <TableCell 
                            align="center"
                            sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 400}}
                        >
                            {item.email}
                        </TableCell>
                        <TableCell 
                            align="center"
                            sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 400}}
                        >
                            {item.credit_card}
                        </TableCell>
                        <TableCell 
                            align="right"
                            sx={{ fontFamily: 'Montserrat', color: '#3B433F', fontSize: '15px', fontWeight: 400}}
                        >
                            {item.ip_address}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}
