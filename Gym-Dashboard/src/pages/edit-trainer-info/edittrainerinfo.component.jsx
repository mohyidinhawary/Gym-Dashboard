import { Box } from "@mui/material"
import SideBar from "../../layouts/sidebar/sidebar.component"
import StickyFooter from "../../layouts/footer/footer.component"
import { TextField } from "@mui/material"
import { Grid } from "@mui/material"
import { Button } from "@mui/material"
import { inputFormElements } from "../../constants/forminfo"
import { Link } from "react-router-dom"
export function EditTrainerInfo(){
    return(
        <>
        <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            p: 8,
            height: "100vh",
            overflow: "hidden",
            paddingTop: 10,
          }}
        >
            <div className='App'>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
       
           
            <form>
             
              <Grid container spacing={2}>
                {
                  inputFormElements.slice(0, 4).map(input => <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} variant="standard" />
                  </Grid>)
                }
              </Grid>
             
              <Grid container spacing={2}>
                {
                  inputFormElements.slice(4, 9).map(input => <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} variant="standard" />
                  </Grid>)
                }
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} align="right">
                <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               
                style={{ backgroundColor: "black",color:"GrayText" }}
                component={Link} to="/tariners"
              >
                cancel
              </Button>
                </Grid>

              </Grid>
            </form>

         
      </Grid>
    </div>
            
            </Box>
            </Box>
            <StickyFooter />
            </>
    )
}