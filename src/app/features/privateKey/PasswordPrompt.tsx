import { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";

const PasswordPrompt: React.FC<{
  show: boolean;
  onHide: () => void;
  onSubmit: (value: string) => void;
  message: string;
}> = ({ show, onHide, onSubmit, message }) => {
  const [password, setPassword] = useState("");

  const close = () => {
    onHide();
    setPassword("");
  };

  const submit = () => {
    onSubmit(password);
    setPassword("");
  };

  return <Modal show={show} onHide={close}>
    <Modal.Body>
      <h5>{message}</h5>
      <FormControl value={password} onChange={e => setPassword(e.target.value)} />
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={close}>Cancel</Button>
      <Button variant="primary" onClick={submit}>Confirm</Button>
    </Modal.Footer>
  </Modal>;
};

export default PasswordPrompt;
