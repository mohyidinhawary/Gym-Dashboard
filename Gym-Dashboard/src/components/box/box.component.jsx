import Typography from "@mui/material/Typography";
import Title from "../../layouts/title/title.component";



export default function Deposite() {
  return (
    <>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        
      </div>
    </>
  );
}
