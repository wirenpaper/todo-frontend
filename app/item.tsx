import React, { useRef, useEffect, useState } from "react";
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
  const nodeRef = useRef<HTMLDivElement>(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0, w: 0, h: 0 });

  useEffect(() => {
    if (nodeRef.current) {
      const rect = nodeRef.current.getBoundingClientRect();
      setCoordinates({
        x: rect.left,
        y: rect.top,
        w: rect.width,
        h: rect.height,
      });
      console.log(rect.left, rect.top);
    }
  }, []);

  const handleStart: DraggableEventHandler = (
    _: DraggableEvent,
    data: DraggableData
  ) => {
    //console.log("starting: ", data.x + coordinates.x, data.y + coordinates.y );
    console.log(
      "starting: ",
      (coordinates.x + coordinates.w) / 2,
      coordinates.x,
      coordinates.w
    );
  };

  const handleStop: DraggableEventHandler = (
    _: DraggableEvent,
    data: DraggableData
  ) => {
    //console.log("stopping:", data.x + coordinates.x, data.y + coordinates.y);
  };

  return (
    <Draggable nodeRef={nodeRef} onStart={handleStart} onStop={handleStop}>
      <div
        ref={nodeRef}
        className={`flex flex-wrap ${bgColor} mb-2 cursor-move`}
      >
        <div className="flex-1">
          <h2>{text}</h2>
        </div>
        <button onClick={onDelete} className="text-red-800 font-bold size-4">
          <h2>x</h2>
        </button>
      </div>
    </Draggable>
  );
};

export default Item;
