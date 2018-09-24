import React from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import "./Modal.css"
import AddForm from '../Form';

class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button id = "addBtn" color="secondary" onClick={this.toggle}>{this.props.buttonLabel}Add Location</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add Location</ModalHeader>
                    <ModalBody>

                  <AddForm />

                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

export default AddModal;