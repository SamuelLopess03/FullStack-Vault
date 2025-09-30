import { useState } from "react";

import EmojiPickerPopup from "./EmojiPickerPopup";
import Input from "./Input";

const AddIncomeForm = ({ onAddIncome, categories }) => {
  const [income, setIncome] = useState({
    name: "",
    amount: "",
    date: "",
    icon: "",
    categoryId: "",
  });

  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const handleChange = (key, value) => {
    setIncome({ ...income, [key]: value });
  };

  return (
    <div>
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <Input
        value={income.name}
        onChange={({ target }) => handleChange("name", target.value)}
        label="Income Source"
        placeholder="e.g, Salary, Freelance, Bonus"
        type="text"
      />

      <Input
        value={income.categoryId}
        onChange={({ target }) => handleChange("categoryId", target.value)}
        label="Category"
        options={categoryOptions}
        isSelect={true}
      />

      <Input
        value={income.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        placeholder="e.g, 500.00"
        type="number"
      />

      <Input
        value={income.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        placeholder=""
        type="date"
      />

      <div className="flex justify-end mt-6">
        <button className="add-btn add-btn-fill cursor-pointer">
          Add Income
        </button>
      </div>
    </div>
  );
};

export default AddIncomeForm;
