import React, { useRef } from "react";
import Draggable, {
  DraggableData,
  DraggableEvent,
  DraggableEventHandler,
} from "react-draggable";

interface ItemProps {
  text: string;
  onDelete: () => void;
  bgColor: string;
}

const Item: React.FC<ItemProps> = ({ text, onDelete, bgColor }) => {
  const nodeRef = useRef(null);

  const handleDrag: DraggableEventHandler = (
    e: DraggableEvent,
    data: DraggableData
  ) => {
    //console.log("Dragging:", e, data);
  };

  const handleStart: DraggableEventHandler = (
    e: DraggableEvent,
    data: DraggableData
  ) => {
    console.log("starting:", data);
  };

  const handleStop: DraggableEventHandler = (
    e: DraggableEvent,
    data: DraggableData
  ) => {
    console.log("stopping:", data);
  };

  return (
    <Draggable nodeRef={nodeRef} onDrag={handleDrag} onStart={handleStart} onStop={handleStop}>
      <div ref={nodeRef} className={`flex ${bgColor} mb-2 cursor-move`}>
        <h2>{text}</h2>
        <button
          onClick={onDelete}
          className="text-red-800 pl-5 font-bold size-4"
        >
          <h2>x</h2>
        </button>
      </div>
    </Draggable>
  );
};

export default Item;
