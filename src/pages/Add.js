import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "../components/input/Input";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  doc,
  setDoc,
  Timestamp,
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";
import fireBaseApp from "../config/Credentials";

const Add = () => {
  let navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore(fireBaseApp);
    const docData = {
      title: e.target.title.value,
      note: e.target.note.value,
      date: Timestamp.fromDate(new Date()),
    };
    // await setDoc(doc(db, "Notas", "one"), docData);
    const docRef = await addDoc(collection(db, "Notes"), docData);
    // console.log(docRef)
    navigate("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: (theme) => theme.global.terciaryBlue,
      }}
      component="form"
      onSubmit={(e) => onSubmit(e)}
    >
      <Box
        sx={{
          flexBasis: "300px",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            color: "white",
          }}
        >
          <Button
            // variant="outlined"
            size="small"
            sx={{ width: "20px", mr: 1, borderRadius: 10 }}
            onClick={() => {
              navigate("/");
            }}
          >
            <ArrowBackIcon />
          </Button>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            sx={{ textAlign: "center", pt: 1 }}
          >
            Add new note
          </Typography>
        </Box>
        <Input name="Title" id="title" maxLength={"10"} />
        <Box
          sx={{
            mt: 2,
            pr: "7px",
          }}
        >
          <TextareaAutosize
            aria-label="add note"
            minRows={6}
            placeholder="Add note"
            required
            name="note"
            id="note"
            style={{
              width: "100%",
              background: "none",
              fontSize: 19,
              color: (theme) => theme.global.mainBlue,
            }}
          />
        </Box>
        <Button
          variant="outlined"
          size="large"
          sx={{ width: "100%", mt: 2, py: 2 }}
          type="submit"
        >
          SEND
        </Button>
      </Box>
    </Box>
  );
};

export default Add;
