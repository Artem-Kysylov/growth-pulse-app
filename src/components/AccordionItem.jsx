// Imports 
import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// Accordion data 
const accordionData = [
    {
        id: 1,
        summary: 'How do I add a new financial transaction?',
        details: 'To add a new financial transaction, go to the "Transactions" tab and click the "Add Transaction" button. Enter the necessary details such as amount, date, category, and description, then click "Save".'
    },
    {
        id: 2,
        summary: 'Can I import data from other financial systems?',
        details: 'Yes, our CRM system supports data import from various financial systems. Go to settings, select "Import Data", then follow the instructions to upload the file and choose the appropriate format.'
    },
    {
        id: 3,
        summary: 'How do I set up notifications for upcoming payments?',
        details: 'To set up notifications for upcoming payments, go to the "Notifications" section in the settings. Select "Add Notification", specify the event type (e.g., upcoming payment), date and time of the notification, and choose your preferred notification method (email, SMS, etc.).'
    },
    {
        id: 4,
        summary: 'Can I create financial reports?',
        details: 'Yes, our CRM system allows you to create various financial reports. Go to the "Reports" tab, select the type of report (e.g., income and expense report), specify the time period, and click "Create Report". You can also customize the report parameters and save its template for future use.'
    },
    {
        id: 5,
        summary: 'How do I ensure the security of my financial data?',
        details: 'We place a high priority on data security. All financial data is encrypted and stored on secure servers. You can additionally set up two-factor authentication in the "Security" section of your account settings.'
    },
]

export const AccordionItem = () => {
  return (
    <div>
        {accordionData.map((item) => (
            <Accordion 
                key={item.id}
                sx={{ boxShadow: 'none' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#40A578'}} />}
                    aria-controls={`panel${item.id}-content`}
                    id={item.id}
                    sx={{ color: '#3B433F', fontSize: '16px', fontWeight: 500}}
                >
                    {item.summary}
                </AccordionSummary>
                <AccordionDetails
                    sx={{ color: '#3B433F', fontSize: '15px',}}
                >
                    {item.details}
                </AccordionDetails>
            </Accordion>
        ))}
    </div>    
  )
}
