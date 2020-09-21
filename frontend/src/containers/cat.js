import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Draggable } from 'react-beautiful-dnd';

const sampleURL = 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif';

export default (props) => {

    const [showModal, toggleModal] = useState(false);
    const [loading, setLoading] = useState(true);

    const toggle = () => toggleModal(!showModal)

    const renderModal = ({ url, title }) => {
        return <Modal isOpen={showModal} toggle={toggle} >
            <ModalBody>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <img src={url} width="100%" height="100%" />
            </ModalBody>
        </Modal>
    }


    return (
        <Draggable draggableId={`drag${props.position}`} index={props.index}>
            {provided => (
                <div className="col-4 border p-2" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                    {renderModal(props)}
                    <div style={{ display: loading ? "block" : "none" }} className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <img style={{ display: loading ? "none" : "block" }} src={props.url || sampleURL} width="100%" height="400" title={props.title} onLoad={() =>
                        setTimeout(setLoading(false), 5000)}
                        onClick={() => toggleModal(true)} />
                    <span>{props.type}</span>
                </div>
            )}
        </Draggable>
    )
};