import React from 'react'
import '../../components/Input&Tasks/Style.css'
import InputAndTasks from './body/InputAndTasks'

export default function Body() {
    return (
        <div className="block" style={{padding: '40px'}}>
            <InputAndTasks />
        </div>
    )
}
