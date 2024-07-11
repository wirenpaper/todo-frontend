import React from "react";

interface ItemProps {
  text: string;
  onDelete: () => void;
  bgColor: string;
}

const Item: React.FC<ItemProps> = ({ text, onDelete, bgColor }) => {
  return (
    <div className={`flex ${bgColor} mb-2`}>
      <h2>{text}</h2>
      <button onClick={onDelete} className="text-red-800 font-bold size-4">
        <h2>x</h2>
      </button>
    </div>
  );
};

export default Item;
