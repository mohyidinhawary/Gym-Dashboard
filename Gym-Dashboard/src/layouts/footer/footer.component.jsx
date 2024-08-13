import {
  Box,
  Typography,
  Container,
  Copyright

} from "./index"




export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
              
        }}
      >
        <Container maxWidth="sm">
         
          <Copyright />
          <Typography variant="body1">
           ALL RIGHTS RESERVED
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
