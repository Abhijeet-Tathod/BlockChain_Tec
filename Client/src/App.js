import React, { useState, useEffect } from "react";
import { Add } from "@mui/icons-material";
import TaskList from "./Tasklist";

const Note = () => {
  const [hide, setHide] = useState(true);
  const [info, setInfo] = useState({ data: "" });
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  const expand = () => {
    setHide(false);
  };

  const inputTask = (event) => {
    const { name, value } = event.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://blockchain.abhitathod29.repl.co/api/blocks",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      setList(jsonData);
    } catch (err) {
      console.error("Error", err);
    }
  };

  const addTask = async (event) => {
    event.preventDefault();
    if (info.data === "") {
      return;
    }

    setHide(true);

    const postData = {
      data: info.data,
    };

    try {
      const response = await fetch(
        "https://blockchain.abhitathod29.repl.co/api/mine",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Data sent successfully.");

      setInfo({ data: "" });
      fetchData(); // Fetch updated data after adding a task
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form>
        <textarea
          placeholder="Write a note..."
          onSelect={expand}
          name="data"
          onChange={inputTask}
          value={info.data}
        />
        <button className="add" hidden={hide} onClick={addTask}>
          <Add fontSize="large" />
        </button>
      </form>

      <div className="container">
        <h1 style={{ textAlign: "center" }}>Blocks on Blockchain Network</h1>
        {list.map((listval, index) => (
          <TaskList key={index} id={index} {...listval} />
        ))}
      </div>
    </>
  );
};

export default Note;
