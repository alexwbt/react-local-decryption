import { useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";

const PasswordPrompt: React.FC<{
  show: boolean;
  onHide: () => void;
  onSubmit: (value: string) => void;
  message: string;
}> = ({ show, onHide, onSubmit, message }) => {
  const [password, setPassword] = useState("");

  return <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>{message}</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <FormControl value={password} onChange={e => setPassword(e.target.value)} />
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>Cancel</Button>
      <Button variant="primary" onClick={() => onSubmit(password)}>Confirm</Button>
    </Modal.Footer>
  </Modal>;
};

export default PasswordPrompt;
