import React, { useState, useEffect } from 'react';
import { getData, updateData } from '../api';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Cat from '../containers/cat';

export default () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
            .then(data => setData(data))
            .catch(err => console.log(err));

    }, []);

    const onEnd = (result) => {
        const items = reorder(
            data,
            result.source.index,
            result.destination ? result.destination.index : result.source.index
        );
        setData(items);
    }

    const reorder = (list, startIndex, endIndex) => {
        let result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result.map((item, index) => {
            item.position = index;
            return item;
        })
    };

    return (
        <div className="container">
            <h1>
                Dashboard
            </h1>
            <DragDropContext onDragEnd={onEnd} >
                <Droppable droppableId="droppableArea" direction="horizontal">
                    {provided => (
                        <div className="row" ref={provided.innerRef} {...provided.droppableProps} >
                            {data.map((item, index) => <Cat index={index} key={index} {...item} url={item.url} />)}
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>
            </DragDropContext>
        </div>
    )
};