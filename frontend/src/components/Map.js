import React from "react";
import { useParams } from "react-router-dom";
import NoteItems from "./NoteItems";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
function Map() {
  const { id } = useParams();
  // const id1=id.id
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [var1, setVar] = useState("");
  useEffect(() => {
    axios
      .post("https://noteversebackend.onrender.com/getnotes", {
        user: id,
      })
      .then((res) => {
        console.log(res.data); // correctly received
        setData(res.data); // error
        console.log(data); // nothing appears
      })
      .catch((err) => console.log("er" + err));

    //   fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      {/* <h1>in map </h1> */}
      {data.length === 0 && (
        <div>
          {" "}
          <h1 className="text-base">No notes to display</h1>
          <button
            className="rounded-lg"
            onClick={() => {
              Navigate(`/addnote/${id}`);
            }}
          >
            {" "}
            Add Note
          </button>
        </div>
      )}

      {data.map((item) => (
        // setVar(item.user),
        <NoteItems
          title={item.title}
          description={item.description}
          tag={item.tag}
          date={item.date}
          id={item.user}
        />
      ))}
    </div>
  );
}

export default Map;
