import React from 'react';
import styled from 'styled-components';

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
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  align-self: flex-end; 
`;

const Modal = ({ isOpen, onClose, title, content }:{
    isOpen:boolean,
    onClose:()=>void,
    title:string,
    content:string,
}) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h3>{title}</h3>
        <p>{content}</p>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
