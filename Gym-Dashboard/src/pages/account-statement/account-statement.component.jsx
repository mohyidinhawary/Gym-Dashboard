
import { DataGrid } from "@mui/x-data-grid";
import {  TextField } from "@mui/material";
import {columns,rows} from "../../constants/account-statement-info"
import SplitScreen from "../../layouts/split-screen/splitscreen.component"

import AddNotification from "../../components/add-notification/add-notification.component";

export function AccountStatement() {
  
  return (
    <>
      
          <SplitScreen>
          <AddNotification  />
          

          <TextField
  hiddenLabel
  id="filled-hidden-label-small"
  defaultValue=""
  variant="outlined"
  size="small"
  
 margin="dense"
 label="serach"
/>
          <div style={{ height: 600, width: "100%" }} >
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
