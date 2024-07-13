// Imports
import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import { formatDate } from '@fullcalendar/core/index.js'

export const CalendarItem = () => {
    // State 
    const [currentEvents, setCurrentEvents] = useState([])

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
        if(window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)){
            selected.event.remove()
        }
    }

  return (
    <div className='flex gap-[20px]'>
        <div className='flex-initial w-52'>
            <p className='text-[16px] font-semibold text-text'>Upcoming Events</p>
            <ul>
                {currentEvents.map((event) => (
                    <li key={event.id}>
                        <p>{event.title}</p>
                        <span>
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

        <div className='flex-1'>
            <FullCalendar
                height='85vh'
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
