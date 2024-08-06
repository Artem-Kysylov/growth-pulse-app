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
    <div className='flex flex-col gap-[20px] laptop:flex-row'>
        <div className='flex-initial w-full bg-white rounded-[5px] p-[10px] text-center laptop:w-52'>
            <div className='mb-[10px]'>
                <p className='text-[16px] font-semibold text-text'>Upcoming Events</p>
                <p className='text-[11px] leading-[110%] text-text'>Click the date and type your event</p>
            </div>

            <ul className='flex flex-col gap-[8px]'>
                {currentEvents.map((event) => (
                    <li className='bg-primary rounded-[5px] p-[5px]' key={event.id}>
                        <p className='text-[15px] font-semibold text-white'>{event.title}</p>
                        <span className='text-[13px] text-white'>
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

        <div className='flex-1 bg-white p-3 rounded-md'>
            <FullCalendar
                height='85vh'
                contentHeight="auto"
                slotMinTime="07:00:00"
                slotMaxTime="21:00:00"
                eventBackgroundColor='#40A578'
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
