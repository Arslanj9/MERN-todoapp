import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SubmitBtn from "../assets/submitArrow.png";
import DeleteBtn from "../assets/deleteIcon.png";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  // const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get("http://localhost:5000/tasks").then((res) => {
      setTasks(res.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/tasks", { text }).then(() => {
      setText("");
      fetchTasks();
    });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then(() => {
        fetchTasks();
      })
      .catch((err) => {
        console.log("Unable to Delete task");
      });
  };



  return (
    <div className="p-6 pt-0">
      <div>
        <form className="flex" onSubmit={handleSubmit}>
          <input
            className="w-full h-[24px] border border-black rounded-md opacity-60 p-2 text-[12px]"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-300 w-[28px] hover:bg-green-400 rounded-md ml-[2px]"
          >
            <img
              className="w-[8px] m-auto"
              style={{ filter: "invert(100%)" }}
              src={SubmitBtn}
            />
          </button>
        </form>



        <div className="pt-2">
          {tasks.map((task) => (
            <div className="flex justify-between pr-4 border rounded-md mt-2">
              <li className="list-none text-[12px] pl-4 pt-[4px]">
                {task.text}
              </li>
              <button onClick={() => handleDelete(task._id)}>
                <img className="w-[12px] m-auto" src={DeleteBtn} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
