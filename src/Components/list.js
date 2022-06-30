import React, { useState, useEffect } from 'react';

// import ListInput from './ListInput';

const List = ({ items, onDelete }) => {

    return (
        <div style={{
            flexDirection: 'column'
        }}>

            {items.map((item, i) => {
                return (
                    <div key={i} style={{
                        padding: 5,
                        margin: 5,
                        border: 'solid',
                        borderWidth: 1,
                        borderRadius: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',

                    }}>
                        <div style={{ margin: 5 }}>
                            <button onClick={() => onDelete(item)}>Delete</button>
                        </div>
                        <div style={{ margin: 5 }}>
                            <p>Name: {item.name}</p>
                            <p>Time: {item.time}</p>
                            <p>Date: {item.date}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default List;