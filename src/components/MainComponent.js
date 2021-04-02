import React, { useState } from 'react';
import styled from 'styled-components';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

const MainComponentWrapper = styled.div`
    display:flex;
    align-items: center;
    padding: 0 100px;
    justify-content: space-between;
    background-color:pink;
    min-height:100vh;
    .left {
        background-color:white;
        padding:20px;
        max-width:30vw;
        min-height:40vh;
        border-radius:8px;
    }
    .right {
        background-color:white;
        padding:20px;
        max-width:30vw;
        min-height:40vh;
        border-radius:8px;

    }

`;

const MainComponent = (props) => {
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [area, setArea] = useState([{ area: "" }]);
    const changeHandle = (name, selectedDate) => {
        setName(name)
        setDate(selectedDate)
    }
    const handleEdit = (i, key, val) => {
        setArea(prevState => {
            let newState = prevState;
            newState[i][key] = val;
            return newState;
        })
    }
    const addNewRow = () => {
        setArea(prevState => prevState.concat({
            area: "",
        }))
    }
    const deleteRow = (i) => {
        var index = area.findIndex(rank => (rank === i))
        const newArray = area.splice(index, 1);
        setArea([...area])
    }
    return (
        <MainComponentWrapper>
            <div className="left">
                <LeftComponent changeHandle={changeHandle} area={area} addNewRow={addNewRow} handleEdit={handleEdit} deleteRow={deleteRow} />
            </div>
            <div className="right">
                <RightComponent name={name} date={date} area={area} deleteRow={deleteRow} addNewRow={addNewRow} handleEdit={handleEdit} />
            </div>
        </MainComponentWrapper>
    );
}
export default MainComponent;