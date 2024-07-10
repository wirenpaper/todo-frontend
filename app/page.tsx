"use client";
import { useState } from "react";
import Item from "./item";

export default function Home() {
  const [items, setItems] = useState<string[]>([]);

  const handleDelete = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex-row bg-green-100">
          <h2 className="p-4 pl-9 flex justify-center">Add a task</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <input
                type="text"
                name="item"
                placeholder="Add a new item"
                className="border placeholder-gray-500 border-gray-500 
                           mb-3 h-5 w-44 pl-1 text-custom-sm rounded-sm"
              />
              <button className="border border-gray-700 h-5 w-11 bg-buttonColor rounded-sm">
                <p className="flex justify-center items-center text-custom-sm">
                  Add
                </p>
              </button>
            </div>
          </form>
          <div className="flex pb-5 bg-red-200 space-x-4">
            <div className="flex-1">
              <h3 className="text-center bg-orange-100">Todo</h3>
              {items.map((text, index) => (
                <Item
                  key={index}
                  text={text}
                  onDelete={() => handleDelete(index)}
                />
              ))}
            </div>
            <div className="flex-1">
              <h3 className="text-center bg-orange-100">pending</h3>
              {items.map((text, index) => (
                <Item
                  key={index}
                  text={text}
                  onDelete={() => handleDelete(index)}
                />
              ))}
            </div>
            <div className="flex-1">
              <h3 className="text-center bg-orange-100">done</h3>
              {items.map((text, index) => (
                <Item
                  key={index}
                  text={text}
                  onDelete={() => handleDelete(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
