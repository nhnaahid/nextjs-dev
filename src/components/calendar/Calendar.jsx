'use client'
// import { ScheduleXCalendar, useNextCalendarApp } from '@schedule-x/react/dist/index'

import { useNextCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createEventModalPlugin } from '@schedule-x/event-modal'


import {
    createViewDay,
    createViewMonthAgenda,
    createViewMonthGrid,
    createViewWeek,
} from '@schedule-x/calendar'

import { createEventsServicePlugin } from '@schedule-x/events-service'

import '@schedule-x/theme-default/dist/index.css'

function CalendarApp() {
    const plugins = [createEventsServicePlugin(), createDragAndDropPlugin(), createEventModalPlugin()]

    const calendar = useNextCalendarApp({
        views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
        events: [
            {
                id: '1',
                title: 'Event 1',
                start: '2024-10-24 12:30',
                end: '2024-10-24 14:00',
            },
            {
                id: '2',
                title: 'Event 2',
                start: '2024-10-24 02:30',
                end: '2024-10-24 14:00',
            },
        ],
    }, plugins)

    return (
        <div className='flex items-center justify-center'>
            <ScheduleXCalendar calendarApp={calendar} />
        </div>
    )
}

export default CalendarApp