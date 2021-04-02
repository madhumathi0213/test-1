import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export const LeftComponent = (props) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [name, setName] = useState("")
    const handleChange = (event) => {
        setName(event.target.value)
    }



    return (
        <div>
            <label>Name : &nbsp;</label>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => handleChange(e)}></input><br />
            <label>Date of Birth : &nbsp; </label>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                filterDate={date => date.getDay() !== 0}
                showYearDropdown
                scrollableMonthYearDropdown
            /><br />
            <label>Area of Interest &nbsp; </label>
            {
                props.area.map((item, i) => {
                    return (
                        <div key={`row-${i}`} className="grid grid-cols-12 mb-2">
                            <input type="" min="1" defaultValue={item.item_amount} onChange={(e) => props.handleEdit(i, 'area', e?.target?.value)} />
                            <button onClick={() => props.deleteRow(item)}>delete</button>
                        </div>
                    )
                })
            }
            <button onClick={props.addNewRow}>Add</button><br /><br />
            <button onClick={() => props.changeHandle(name, selectedDate)}>Click here</button>
        </div>
    )
}
export default LeftComponent;