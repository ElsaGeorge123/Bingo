// App.js
import React, { useContext } from 'react';
import Modal from './Modal';
import GlobalContext from '../Context/GlobalContext';

const Numbers = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const { isOpen, setIsOpen } = useContext(GlobalContext);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <h1>Welcome to My App</h1>
            <button onClick={toggleModal}>Open Popup</button>
            <Modal isOpen={isOpen} onClose={toggleModal}>
                <h2>This is a Popup!</h2>
                <p>You can put any content here.</p>
                <button onClick={toggleModal}>Close</button>
            </Modal>
        </div>
    );
};

export default Numbers;
