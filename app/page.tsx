"use client";
import { useState } from "react";
import Item from "./item";

interface ItemInterface {
  text: string;
  rect: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

export default function Home() {
  const [itemsTodo, setItemsTodo] = useState<ItemInterface[]>([]);

  const handleDelete = (index: number) => {
    setItemsTodo(itemsTodo.filter((_, i) => i !== index));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.item as HTMLFormElement;

    const newItem: ItemInterface = {
      text: input.value,
      rect: { x: 0, y: 0, w: 0, h: 0 },
    };

    const newItemsTodo = [...itemsTodo, newItem];
    setItemsTodo(newItemsTodo);
    form.reset();
  };

  const handleUpdateRect = (
    index: number,
    newRect: { x: number; y: number; w: number; h: number }
  ) => {
    const updatedItems = itemsTodo.map((item, i) =>
      i === index ? { ...item, rect: newRect } : item
    );
    setItemsTodo(updatedItems);
  };

  const handleItems = () => {
    console.log(itemsTodo);
  };

  return (
    <>
      <button
        className="border border-gray-700 h-10 w-11 bg-buttonColor rounded-sm"
        onClick={handleItems}
      >
        <p className="flex justify-center items-center text-custom-sm">Test</p>
      </button>
      <div className="flex justify-center">
        <div className="flex-row">
          <h2 className="p-4 pl-9 flex justify-center text-white">
            Add a task
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <input
                type="text"
                name="item"
                placeholder="Add a new item"
                className="border placeholder-gray-500 border-gray-500 
                           mb-3 h-10 w-60 pl-1 text-xl rounded-sm"
              />
              <button className="border border-gray-700 h-10 w-11 bg-buttonColor rounded-sm">
                <p className="flex justify-center items-center text-custom-sm">
                  Add
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex pb-5 space-x-4">
        <div className="flex-1 h-screen bg-red-300">
          <h2 className="text-center font-bold">TODO</h2>
          <div className="flex flex-col items-center">
            {itemsTodo.map((item, index) => (
              <Item
                key={index}
                text={item.text}
                rect={item.rect}
                bgColor="bg-red-200"
                onDelete={() => handleDelete(index)}
                updateRect={(newRect) => handleUpdateRect(index, newRect)} // Pass the updateRect function
              />
            ))}
          </div>
        </div>
        <div className="flex-1 h-screen bg-yellow-300">
          <h2 className="text-center font-bold">PENDING</h2>
          <div className="flex flex-col items-center">
            {/*
             *{itemsTodo.map((text, index) => (
             *  <Item
             *    key={index}
             *    text={text}
             *    bgColor="bg-yellow-200"
             *    onDelete={() => handleDelete(index)}
             *  />
             *))}
             */}
          </div>
        </div>
        <div className="flex-1 h-screen bg-green-300">
          <h2 className="text-center font-bold">DONE</h2>
          <div className="flex flex-col items-center">
            {/*
             *{itemsTodo.map((text, index) => (
             *  <Item
             *    key={index}
             *    text={text}
             *    bgColor="bg-green-200"
             *    onDelete={() => handleDelete(index)}
             *  />
             *))}
             */}
          </div>
        </div>
      </div>
    </>
  );
}
