import styled from "styled-components";
import { HiGlobeAlt } from "react-icons/hi";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 70%;
  max-width: 800px;
  height: 70%;
  max-height: 600px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  align-self: flex-end;
`;

const ScrollableContent = styled.div`

  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 24px;
    margin-top: 20px;
    border-top: 1px solid #ccc;
    padding-top: 10px;
  }

  ul {
    list-style: disc;
    margin-left: 20px;
    font-size: 18px;
    margin-bottom: 10px;
  }

  a {
    color: black;
    font-size: 24px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const Modal = ({
  isOpen,
  onClose,
  title,
  content,
  logo,
  tool,
  role,
  url,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  logo: any;
  tool: string[];
  role: string[];
  url: string;
}) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ScrollableContent>
          <h1>{title}</h1>
          <img src={logo}></img>
          <h2>{content}</h2>
          <h3>Stacks</h3>
          <ul>
            {tool.map((value, idx) => {
              return <li key={idx}>{value}</li>;
            })}
          </ul>
          <h3>Roles</h3>
          <ul>
            {role.map((value, idx) => {
              return <li key={idx}>{value}</li>;
            })}
          </ul>
          <h3>Address</h3>
          <a
            href={url}
            target="blanck"
            style={{ color: "black", fontSize: "24px" }}
          >
            <HiGlobeAlt />
          </a>
        </ScrollableContent>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
