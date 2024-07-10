import React from "react";

interface ItemProps {
  text: string;
  onDelete: () => void;
}

const Item: React.FC<ItemProps> = ({ text, onDelete }) => {
  return (
    <div className="flex w-48 justify-between bg-green-200 mb-2">
      <p>{text}</p>
      <button onClick={onDelete} className="text-red-600 font-bold size-4">
        x
      </button>
    </div>
  );
};

export default Item;
