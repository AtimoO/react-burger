import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropsTypes from "prop-types";

import ModalOverlay from "../modal-overlay/modal-overlay";
import ButtonClosePopup from "../button-close-popup/button-close-popup";

import styleModal from "./modal.module.css";

const modalRoot = document.getElementById("react-modals");

const Modal = ({ name, closeModal, children}) => {
  const handlerEscClose = (evt) => {
    if (evt.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEscClose);

    return () => document.removeEventListener("keydown", handlerEscClose);
  }, []);

  return ReactDOM.createPortal(
    <ModalOverlay onClick={closeModal}>
      <div
        className={`${styleModal.container} pt-10 pb-15`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={`${styleModal.header} pl-10 pr-10`}>
          <h2 className="text text_type_main-large">{name}</h2>
          <ButtonClosePopup onClick={closeModal} />
        </div>
        <div className={styleModal.container_order}>{children}</div>
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

Modal.propsTypes = {
  name: PropsTypes.string,
  closeModal: PropsTypes.func.isRequired,
  children: PropsTypes.children,
};

export default Modal;
