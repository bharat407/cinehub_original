import React, { useState } from "react";
import { SquarePlus } from "lucide-react";
import BudgetModal from "./Buget"; // Ensure this path is correct

const BudgetSection = () => {
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [budget, setBudget] = useState(null);

  const showModal = () => {
    setIsBudgetModalOpen(true);
  };

  const closeModal = () => {
    setIsBudgetModalOpen(false);
  };

  const handleSaveBudget = (budgetData) => {
    setBudget(budgetData);
    closeModal();
  };

  const renderBudgetSection = () => (
    <div className="flex flex-col mb-3">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold mt-3">Budget</h3>
        <button onClick={showModal} className="text-black flex items-center">
          <SquarePlus className="w-10 text-gray-700 mt-3 h-6 mr-2" />
        </button>
      </div>
      <hr className="border-gray-200 w-full border" />
      {budget && (
        <div className="mt-2 bg-gray-200 p-4">
          <span className="font-semibold"> Budget:- </span>
          <span>
            ₹{budget.budget.from} - ₹{budget.budget.to} {budget.frequency}
            {budget.negotiable && " (Negotiable)"}
          </span>
        </div>
      )}
    </div>
  );

  return (
    <>
      {renderBudgetSection()}
      <BudgetModal
        isOpen={isBudgetModalOpen}
        onClose={closeModal}
        onSave={handleSaveBudget}
      />
    </>
  );
};

export default BudgetSection;
