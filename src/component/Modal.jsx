import Modal from 'react-bootstrap/Modal';
import img_rules from '../images/image-rules.svg'

const MyVerticallyCenteredModal = (props)=> {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 className='c-dark'>RULES</h2>
                    
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={img_rules} className='w-100' alt="" />
            </Modal.Body>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;