
import NoteContext from "./noteContext";
import React, { useState } from 'react'

const NoteState = (props) => {
  const notesInitial = []

  const [notes, setnotes] = useState(notesInitial);

  //get all notes
  const getNote = async (req,res) => {
    const response = await fetch('http://localhost:8000/getnotes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },

    });

    const json = await response.json();
    setnotes(json)
    // axios.post().then((res) => {
    //   setnotes(response)
    // }).catch((err)=>{console.log("error")})

  }

  //add a note
  const addNote = async (title, description, tag) => {

    const response = await fetch('http://localhost:8000/api/notes/addnote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })

    });
 
    const json = await response.json();
    if(json.user){
      setnotes(notes.concat(json))
    }else{
      return json
    }
   
  }

  //delete a note
  const deleteNote = async(id) => {
    //a\Api call to delete
    const response = await fetch(`http://localhost:8000/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },

    });

    const json = await response.json();
    console.log(json)

  //Clint side code
    const newnotes = notes.filter((note) => {
      return id !== note._id
    });
    setnotes(newnotes)
  }

  //edit a note
  const editNote = async (id, title, description, tag) => {

    const response = await fetch(`http://localhost:8000/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },

      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
   console.log(json)

    let newNote=JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNote.length; index++) {
      let element = newNote[index];
      if(element._id===id){ 
      element.title = title;
      element.description = description;
      element.tag = tag;
      break;
      }
    }
    setnotes(newNote)
  }

  return (
    <NoteContext.Provider value={{ notes, getNote, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState