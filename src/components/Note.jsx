import React,{useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";



function Note(props) {
  
  const [isComplete,setComplete] = useState(false);
   
  function complete(){
   setComplete(prevValue => {
     return(!prevValue)
   })
  }

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div onClick={complete} className="note">
      <h1 style={{textDecoration: isComplete ? "line-through" : "none"}}>{props.title}</h1>
      <p>{props.content}</p>
      <p>{props.time}</p>
      <button style={{visibility : isComplete ? "visible" : "hidden"}} onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
