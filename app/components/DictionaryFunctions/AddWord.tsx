"use client";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { AddWordModal } from "./AddWordModal";

export const AddWord = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div>
        <button className="flex items-center gap-2" onClick={toggleModal}>
          Add word <LuPlus />
        </button>
      </div>
      {isModalOpen && <AddWordModal />}
    </>
  );
};
