
import {
  TextField , 
Grid ,
Button ,

SplitScreen
} from "./index"
import { Link } from "react-router-dom"
import  {  inputFormElements } from "../../constants/forminfo"



  
export function AddTrainer(){
    return(
        <>
       <SplitScreen>
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
              Add
            </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               
                style={{ backgroundColor: "gray" }}
                component={Link} to="/tariners"
              >
                cancel
              </Button>
                </Grid>

              </Grid>
            </form>

         
      </Grid>
    </div>
            
           </SplitScreen>
            </>
    )
}