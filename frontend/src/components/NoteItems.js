import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/notes/noteContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UpdateNote from './UpdateNote'
import Test from './Test';
import Navbar from './Navbar';
function NoteItems(props) {
    const navigate = useNavigate();
    
    const handleDelete = () => {



        // alert(props.id)
        axios.post('http://localhost:8000/delete', {
            user: props.id,
            tag: props.tag,
            description: props.description,
            title:props.title
        }).then((res) => { alert("item deleted"); navigate(`/map/${props.id}`); window.location.reload();  }).catch((err) => { console.log(err) })
        navigate(`/map/${props.id}`);
    }
  
        


    const data = {
        title: props.title,
        description:props.description,
        tag:props.tag,
        // date={item.date}
        id:props.id
    }
    const updateNote = () => {
        // alert("clicked");
        navigate(`/updatenote`,{state:data})
    //    <Test /> 
      //   title={props.title}
      //   description={props.description}
      //   tag={props.tag}
      // //   date={item.date}
      //   id={props.id}
      // />;
    };
    
    // const { note, updateNote } = props;

    // const context = useContext(NoteContext)
    // const { deleteNote } = context;

    // const handleDelete = () => {
    //     deleteNote(note._id)
    //     props.showAlert("Note is deleted successfully", "success")
    // }

     let date1 = props.date;
     date1= date1.slice(0, -14).split('-').reverse().join('-');

    return (
        <>
      
        <div className='col-md-4 my-2' >
            {/* <h1>"enterred in note items</h1> */}
            <div className="card " >

                <div className="card-body">

                    <div className='d-flex align-items-center justify-content-between'>
                        <h5 className="card-title">{props.title} </h5>
                        <p>
                            <i className="fa-regular fa-trash-can mx-2" onClick={handleDelete} />
                            <i className="fa-regular fa-pen-to-square mx-2" onClick={updateNote} />
                        </p>
                    </div>
                    <p><b>{props.tag}</b></p>
                    <p className="card-text">{props.description}</p>
                    <p className='text-secondary small text-end '>
                        <small>{date1} </small>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default NoteItems