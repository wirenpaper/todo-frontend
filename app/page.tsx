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
        <div className="mt-10 bg-white flex justify-center w-25rem border-2 border-black border-dashed">
          <div className="flex-row">
            <h2 className="p-4 pl-9">Todo List</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex">
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
            <div className="flex-row ml-4 pb-5">
              {items.map((text, index) => (
                <Item key={index} text={text} onDelete={() => handleDelete(index)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
