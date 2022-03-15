import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ItemNote from "./ItemNote";
import { getDocs, getFirestore, collection } from "firebase/firestore";
import fireBaseApp from "../config/Credentials";

const Notes = () => {
  const [listnotes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ title: "", msj: "" });
  useEffect(() => {
    const db = getFirestore(fireBaseApp);
    const getNotes = async () => {
      try {
        const docs = await getDocs(collection(db, "Notes"));
        const notes = [];
        docs.forEach((doc) => {
          notes.push({ ...doc.data(), id: doc.id });
        });
        console.log(notes);
        setNotes(notes);
      } catch (e) {
        console.log(e);
      }
    };
    getNotes();
  }, [listnotes]);

  return (
    <Box sx={{ flexGrow: 1, width: "100%", textAlign: "center" }}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6">
            Notes
          </Typography>
          <Box sx={{ border: "solid 1px #ddd" }}>
            {listnotes && (
              <List dense={true}>
                {listnotes.map((note) => (
                  <ItemNote
                    key={note.id}
                    data={note}
                    setPreview={setCurrentNote}
                  />
                ))}
              </List>
            )}
          </Box>
        </Grid>

        <Grid item md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6">
            Preview
          </Typography>
          <Box sx={{ border: "solid 1px #ddd" }}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h5 ">
              {currentNote.title}
            </Typography>
            <Typography paragraph>{currentNote.msj}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Notes;
