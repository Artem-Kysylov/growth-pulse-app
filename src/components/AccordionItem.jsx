// Imports 
import React, { useContext} from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { accordionData } from '../data/accordionData'
import { ThemeContext } from '../context/ThemeContext'

export const AccordionItem = () => {
    const { muiTheme } = useContext(ThemeContext)

  return (
    <div>
        {accordionData.map((item) => (
            <Accordion 
                key={item.id}
                sx={{ boxShadow: 'none' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: muiTheme.palette.primary.main}} />}
                    aria-controls={`panel${item.id}-content`}
                    id={item.id}
                    sx={{ color: muiTheme.palette.text.primary, fontSize: '16px', fontWeight: 500}}
                >
                    {item.summary}
                </AccordionSummary>
                <AccordionDetails
                    sx={{ color: muiTheme.palette.text.primary, fontSize: '15px',}}
                >
                    {item.details}
                </AccordionDetails>
            </Accordion>
        ))}
    </div>    
  )
}
