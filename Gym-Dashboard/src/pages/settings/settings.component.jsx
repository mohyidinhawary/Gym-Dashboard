import { SplitScreen } from "../dashboard";
import {
  Box ,
SideBar,
StickyFooter,
Avatar,
Button,
CssBaseline,
TextField,
FormControlLabel,
Grid,
Typography,
FormGroup,
Switch,
InputLabel,
MenuItem, 
Select,
FormControl
} from "./index"
import { useState } from "react";


export function Settings() {
  const [language, setLanguage] = useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <>
      <SplitScreen>
         
        <CssBaseline />
        <Box
          sx={{
          
            display: 'flex',
            flexDirection: 'column',
            alignItems: "",
          
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
          </Avatar>
          <Typography component="h1" variant="h5">
         Mohyidin Hawary
          </Typography>
          <Typography component="h1" variant="h5" >
       personal info
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 1 }}>
         
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              
              <Typography component="h1" variant="h5" >
    change password
          </Typography>
         
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
</Grid>
<Grid item xs={12}>
<TextField
                  required
                  fullWidth
                  name="confirm password"
                  label="confirm password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                </Grid>
                <Typography component="h1" variant="h5" >
    other settings
          </Typography>

                <Grid item xs={12}>
                <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="notification" />
     
      
    </FormGroup>
                </Grid>

               
              </Grid>
              
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              save
            </Button>
            
          </Box>
        </Box>
      
  
      
      
        </SplitScreen>
          
    </>
  );
}
