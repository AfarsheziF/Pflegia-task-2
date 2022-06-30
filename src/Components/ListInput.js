import React, { useState } from 'react';

const ListInput = (props) => {
    const [name, setValue] = useState('');
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    const handleChangeName = (e) => {
        setValue(e.target.value);
    }

    const handleChangeDate = (e) => {
        setDate(e.target.value);
    }

    const handleChangeTime = (e) => {
        setTime(e.target.value);
    }

    return (
        <div>
            <input type={'text'} placeholder="Todo" onChange={handleChangeName} />
            <input style={{ marginLeft: 5 }} type={'date'} onChange={handleChangeDate} />
            <input style={{ marginLeft: 5 }} type={'time'} onChange={handleChangeTime} />
            <button
                style={{ marginLeft: 5 }}
                disabled={name === '' || time === undefined || date === undefined}
                onClick={() =>
                    props.onSubmit({
                        id: Date.now().toString(),
                        name: name,
                        date: date,
                        time: time
                    })}>
                Submit
            </button>
        </div >
    )
}

export default ListInput;