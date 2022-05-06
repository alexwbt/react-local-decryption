import { ChangeEvent, useRef, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { toast } from "react-toastify";
import styled from "styled-components";
import AES from "../../lib/crypto/AES";
import RSA from "../../lib/crypto/RSA";
import PrivateKeyDecryptor from "../../lib/privateKeyDecryptor/PrivateKeyDecryptor";
import PrivateKeyManager, { IStorage } from "../../lib/privateKeyDecryptor/PrivateKeyManager";
import appStorage from "../appStorage";
import PasswordPrompt from "../features/privateKey/PasswordPrompt";


const S = {
  Container: styled.div`
    padding: 10px;
  `,
  PrivateKeyDisplay: styled.div`
    padding: 10px;
    max-width: 1500px;
    word-wrap: break-word;
  `,
  DecryptSection: styled.div`
    display: flex;
    padding: 10px;
  `,
} as const;

const storage: IStorage = {
  set: (value: string) => appStorage.setItem("privateKey", value),
  get: () => appStorage.getItem("privateKey")
};
const privateKeyManager = new PrivateKeyManager(new AES(), storage);

const decryptor = new PrivateKeyDecryptor(new RSA(), privateKeyManager);

const IndexPage: React.FC = () => {
  const privateKey = appStorage.getItem("privateKey");
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const [tmpFile, setTmpFile] = useState("");
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  const onClickSelectFileButton = () => {
    hiddenFileInput.current?.click();
  };
  const onSelectFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setTmpFile(`${reader.result}`);
      };
      reader.readAsText(file);

      setShowPasswordPrompt(true);
    }
    if (hiddenFileInput.current)
      hiddenFileInput.current.value = "";
  };

  // decrypt
  const [decryptText, setDecryptText] = useState("bERO/2A0cKvtNM9AqHJb+xeduUo0vbkXYh83hoXeVeRiTcvcGTd1IoQ3oMyqV7v0KRspNf9U+i2LJ+SlRRP+WY4XIyq3E0hMoqbMD8f1pYr8IScmGgUA8Wymp8p5EI7hA7BweTitHLZssqw+b2x5QvLiLRQbcXwXlmD9oK1jWCwJ7v4l1nUAr34cPjqhp9zOJPdkU/287mW1qHEzv52sa4Guo+b+BYKbqtouKe5gNde474Fd+yYRM38A5glzm/5/x+huRl8eXn6yMOAIY3deFD9SxE9ZYpHGCVq9e6YUN+L7qeLlBMGJJ9rcTRQAen09mWV27z2ftp33tftKuzAZcg==");
  const [showDecryptPasswordPrompt, setShowDecryptPasswordPrompt] = useState(false);
  const [decryptOutput, setDecryptOutput] = useState("");
  const onDecrypt = () => {
    setShowDecryptPasswordPrompt(true);
  };

  return <S.Container>
    <S.PrivateKeyDisplay>{privateKey || "you currently don't have a private key"}</S.PrivateKeyDisplay>
    <input type="file" className="d-none" ref={hiddenFileInput} onChange={onSelectFile} />
    <Button onClick={onClickSelectFileButton}>Set Private Key</Button>

    <PasswordPrompt
      message="Set a password for this key"
      show={showPasswordPrompt}
      onHide={() => {
        setShowPasswordPrompt(false);
        setTmpFile("");
      }}
      onSubmit={(password: string) => {
        privateKeyManager.setKey(tmpFile, password);
        setShowPasswordPrompt(false);
        setTmpFile("");
      }}
    />

    <S.DecryptSection>
      <FormControl
        value={decryptText}
        onChange={e => setDecryptText(e.target.value)}
        as="textarea"
        style={{ height: '300px' }}
      />
      <div className="p-1">
        <Button onClick={onDecrypt}>Decrypt</Button>
      </div>
      <FormControl
        value={decryptOutput}
        onChange={() => {}}
        as="textarea"
        style={{ height: '300px' }}
      />
    </S.DecryptSection>
    <PasswordPrompt
      message="Provide a password for decryption"
      show={showDecryptPasswordPrompt}
      onHide={() => {
        setShowDecryptPasswordPrompt(false);
      }}
      onSubmit={(password: string) => {
        try {
          setDecryptOutput(decryptor.decrypt(decryptText, password));
        } catch (error) {
          setDecryptOutput("");
          toast.error("Failed to decrypt message");
        }
        setShowDecryptPasswordPrompt(false);
      }}
    />
  </S.Container>;
};

export default IndexPage;
