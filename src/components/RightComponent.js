import React from 'react';
import moment from 'moment';
import { Switch, Link } from 'react-router-dom'



export default function RightComponent(props) {
    var a = moment();
    var b = moment(props.date);
    var age = moment.duration(a.diff(b));
    var years = age.years();
    var months = age.months();
    var days = age.days();
    var hours = age.hours()
    return (
        <div>
            <label>Name : </label>
            <span>{props.name}</span><br />
            <label>Age : </label>
            {
                props.date && <span>{years} years  {months} months {days} days {hours} hours</span>
                
            }
            <br />

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
            <button onClick={props.addNewRow}>add</button><br /><br /><br />
            <Switch>
                <Link to="/newcomponent" exact>click to continue</Link>
            </Switch>
        </div >
    )

}
