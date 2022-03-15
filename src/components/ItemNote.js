import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import NotesIcon from "@mui/icons-material/Notes";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import fireBaseApp from "../config/Credentials";

const ItemNote = ({ data, setPreview }) => {
  // console.log(data);
  const View = (note) => {
    setPreview({title: note.title, msj: note.note})
  };
  const Edit = () => {};
  const Delete = async (id) => {
    console.log(id);
    const db = getFirestore(fireBaseApp);
    const deleted = await deleteDoc(doc(db, "Notes", id));
  };
  return (
    <>
      <ListItem
        secondaryAction={
          <>
            {/* <IconButton
              edge="end"
              aria-label="edit"
              sx={{ mr: 1 }}
              onClick={() => Edit()}
            >
              <EditIcon />
            </IconButton> */}
            <IconButton
              edge="start"
              aria-label="delete"
              sx={{ mr: 1 }}
              onClick={() => Delete(data.id)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              edge="start"
              aria-label="view"
              sx={{ mr: 1 }}
              onClick={() => View(data)}
            >
              <VisibilityIcon />
            </IconButton>
          </>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <NotesIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={data.title}
          // secondary={data.date.toDate()}
          secondary={data.date.toDate().toDateString()}
          // secondary={data.date.toDate().toLocaleTimeString('MM/YY en-MX')}
        />
      </ListItem>
    </>
  );
};

export default ItemNote;
