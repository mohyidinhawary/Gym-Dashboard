
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { TextField } from "@mui/material";
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { addDoc,collection,serverTimestamp } from 'firebase/firestore';
import { db } from '../../utilities/firebase/firebase';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddNotification() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [thread, setThread] = useState({title:"",content:""});

  const handleChange=(event)=>{
    event.preventDefault();
    const { name, value } = event.target;
    setThread((prev)=>{
        return {...prev,[name]:value};
    });
  };

  const addDocs = async (event) => {
    event.preventDefault();
  
    try {
      const docRef = await addDoc(collection(db, "Threads"), {
        title: thread.title,
        content: thread.content,
        timestamp: serverTimestamp() // Add timestamp if needed
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };


  return (
    <>
      <IconButton onClick={handleOpen}>
      <NotificationAddIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={addDocs} >
            
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="title"
                name="title"
                autoComplete="title"
                autoFocus
                value={thread.title}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="content"
                label="content"
                type="content"
                id="content"
                autoComplete="content"
                value={thread.content}
                onChange={handleChange}
              />

<Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                 type='submit'
                
              >
               Send
              </Button>
              
              </Box>
        </Box>
      </Modal>
    </>
  );
}