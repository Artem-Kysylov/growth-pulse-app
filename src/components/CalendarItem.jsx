// Imports
import React, { useState, useContext } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import { formatDate } from '@fullcalendar/core/index.js'
import { light, dark } from '../colors/colors'
import { ThemeContext } from '../context/ThemeContext'

export const CalendarItem = () => {
    // State 
    const [currentEvents, setCurrentEvents] = useState([])

    const { theme } = useContext(ThemeContext)

    const handleDayClick = (selected) => {
        const title = prompt('Please enter a new title for your event')
        const calendarApi = selected.view.calendar
        calendarApi.unselect()

        if(title) {
            calendarApi.addEvent({
                id: `${selected.dateStr} - ${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    }

    const handleEventClick = (selected) => {
        if(window.confirm(`Are you sure you want to delete the event '${selected.event.title}'?`)){
            selected.event.remove()
        }
    }

  return (
    <div className='flex flex-col gap-[20px] laptop:flex-row'>
        <div className='flex-initial w-full rounded-[5px] p-[10px] text-center laptop:w-52 bg-surface-light 
            dark:bg-surface-dark transition ease-in-out duration-500'
        >
            <div className='mb-[10px]'>
                <p className='text-[16px] font-semibold text-text-light 
                    dark:text-text-dark transition ease-in-out duration-500'
                >Upcoming Events</p>
                <p className='text-[11px] leading-[110%] text-text-light 
                    dark:text-text-dark transition ease-in-out duration-500'
                >Click the date and type your event</p>
            </div>

            <ul className='flex flex-col gap-[8px]'>
                {currentEvents.map((event) => (
                    <li className='rounded-[5px] p-[5px] bg-primary-light dark:bg-primary-dark 
                        transition ease-in-out duration-500' key={event.id}
                    >
                        <p className='text-[15px] font-semibold text-surface-light 
                            transition ease-in-out duration-500'
                        >{event.title}</p>
                        <span className='text-[13px] text-surface-light transition ease-in-out duration-500'>
                            {formatDate(event.start, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            })}
                        </span>
                    </li>
                ))}
            </ul>
        </div>

        <div className='flex-1 p-5 rounded-md bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition ease-in-out duration-500'>
            <FullCalendar
                height='85vh'
                contentHeight="auto"
                slotMinTime="07:00:00"
                slotMaxTime="21:00:00"
                eventBackgroundColor={theme === 'dark' ? dark.green : light.green}
                eventBorderColor={theme === 'dark' ? dark.green : light.green}                
                plugins={[ 
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin, 
                ]}
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                }}
                initialView="dayGridMonth"
                editable= {true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                select = {handleDayClick}
                eventClick={handleEventClick}
                eventsSet={(events) => setCurrentEvents(events)}
            />
        </div>
    </div>
  )
}
