import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
      ></input>
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
        }}
      ></input>
      <br />
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch("https://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: { "content-type": "application/json" },
          }).then(async function (res) {
            const json = await res.json();
            console.log(json);
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
