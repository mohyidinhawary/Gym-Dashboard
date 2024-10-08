import {
  Toolbar ,
Container ,
Paper ,
Grid ,
Chart ,
Deposite,
 ExportsImportsTable, 
 SplitScreen
} from "./index";

export default function Dashboard() {
  return (
    <>
      <SplitScreen>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3} >
            
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                 
                  <Chart />
                 
                
                </Paper>
              </Grid>
            
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Deposite />
                </Paper>
               
              </Grid>

              <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <ExportsImportsTable />
                </Paper>
            </Grid>
            </Grid>
          </Container>
        </SplitScreen>
    </>
  );
}
