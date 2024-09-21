// ExternalModal.js
import React from "react";
import Category from "./Category";
const ExternalModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="">
      <Category />
    </div>
  );
};

export default ExternalModal;
