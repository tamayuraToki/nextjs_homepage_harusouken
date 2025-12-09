"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
//mport "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

return (
  <div className="font-sans min-h-screen flex justify-center items-center bg-gray-100 px-4">
    <main className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg space-y-6">
      <h1 className="text-3xl font-extrabold text-center text-gray-800">
        My todos
      </h1>

      <button
        onClick={createTodo}
        className="
          bg-blue-600 text-white px-5 py-2 rounded-lg
          hover:bg-blue-700 transition
          w-full font-medium
        "
      >
        + New Todo
      </button>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="border border-gray-200 p-3 rounded-md text-gray-700 bg-gray-50"
          >
            {todo.content}
          </li>
        ))}
      </ul>

      <div className="text-sm text-gray-600 text-center border-t pt-4">
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a
          href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/"
          className="text-blue-600 hover:underline"
        >
          Review next steps of this tutorial
        </a>
      </div>
    </main>
  </div>
);

}
