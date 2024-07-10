import React from "react";

interface ItemProps {
  text: string;
  onDelete: () => void;
}

const Item: React.FC<ItemProps> = ({ text, onDelete }) => {
  return (
    <div className="flex justify-between bg-red-200 mb-2">
      <h2>{text}</h2>
      <button onClick={onDelete} className="text-red-600 font-bold size-4">
        <h2>x</h2>
      </button>
    </div>
  );
};

export default Item;
