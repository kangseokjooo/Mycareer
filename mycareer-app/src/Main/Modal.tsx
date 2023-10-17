import styled from "styled-components";
import { HiGlobeAlt } from "react-icons/hi";
import { useState, useEffect } from "react";

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
  padding: 30px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  height: 80%;
  max-height: 600px;
  overflow-y: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  position: relative;
  margin-left: 95%;
  cursor: pointer;
  align-self: flex-end;
  color: #555;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #e74c3c;
  }
`;

const ScrollableContent = styled.div`
  color: #333;

  h1 {
    font-size: 36px;
    margin-bottom: 10px;
    color: #333;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
    border-radius: 10px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }

  h3 {
    font-size: 24px;
    margin-top: 20px;
    border-top: 1px solid #ccc;
    padding-top: 10px;
    margin-bottom: 10px;
    color: #333;
  }

  ul {
    list-style: disc;
    margin-left: 20px;
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  a {
    color: #3498db;
    font-size: 24px;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #2980b9;
    }
  }
`;

const VisitTitle = styled.span`
  margin-bottom: 3%;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #333;

  svg {
    margin-right: 10px;
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
  const [visitTitle, setvisitTitle] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = 'Visit Website';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setvisitTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setvisitTitle('');
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });

  if (!isOpen) return null;

  return (
    <ModalContainer onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ScrollableContent>
          <h1>{title}</h1>
          <img src={logo} alt="Logo" />
          <h2>{content}</h2>
          <h3>Stacks</h3>
          <ul>
            {tool.map((value, idx) => (
              <li key={idx}>{value}</li>
            ))}
          </ul>
          <h3>Roles</h3>
          <ul>
            {role.map((value, idx) => (
              <li key={idx}>{value}</li>
            ))}
          </ul>
          <h3>Address</h3>
          <a href={url} target="_blank" rel="noreferrer">
            <VisitTitle>
              <HiGlobeAlt /> {visitTitle}
            </VisitTitle>
          </a>
        </ScrollableContent>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
