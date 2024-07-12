"use client";
import { useState } from "react";
import Item from "./item";

export default function Home() {
  const [ItemsTodo, setItemsTodo] = useState<string[]>([]);

  const handleDelete = (index: number) => {
    setItemsTodo(ItemsTodo.filter((_, i) => i !== index));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.item;
    const newItemsTodo = [...ItemsTodo, input.value];
    setItemsTodo(newItemsTodo);
    form.reset();
  };

  return (
    <>
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
            {ItemsTodo.map((text, index) => (
              <Item
                key={index}
                text={text}
                bgColor="bg-red-200"
                onDelete={() => handleDelete(index)}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 h-screen bg-yellow-300">
          <h2 className="text-center font-bold">PENDING</h2>
          <div className="flex flex-col items-center">
            {/*
              *{ItemsTodo.map((text, index) => (
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
              *{ItemsTodo.map((text, index) => (
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
