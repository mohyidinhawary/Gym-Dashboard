import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import {columns,rows} from "../../constants/trainers-table-info"
import {
  IconButton,

TextField ,
SplitScreen
} from "./index"
import { PersonAdd } from "@mui/icons-material";

export function Trainers() {
  return (
    <>
      <SplitScreen>
          <IconButton component={Link} to="/add-trainer">
            <PersonAdd />
          </IconButton>
          <TextField
  hiddenLabel
  id="filled-hidden-label-small"
  defaultValue=""
  variant="outlined"
  size="small"
  
 margin="dense"
 label="serach"
/>
          <div style={{ height: 600, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              // pageSizeOptions={[5, 10]}
              checkboxSelection
            />
           
          </div>
        </SplitScreen>
    </>
  );
}
