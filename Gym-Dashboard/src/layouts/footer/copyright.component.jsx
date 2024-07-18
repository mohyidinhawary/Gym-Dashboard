import {
    Typography,
    Link
} from "./index"
export default function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          XPOWER
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }