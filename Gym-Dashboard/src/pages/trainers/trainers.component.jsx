import Box from "@mui/material/Box";
import SideBar from "../../layouts/sidebar/sidebar.component";
import StickyFooter from "../../layouts/footer/footer.component";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { PersonAdd } from "@mui/icons-material";
import { TextField } from "@mui/material";

const handleviewClick = (id) => {
  alert(`view row with id: ${id}`);
};
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 100 },
  { field: "lastName", headerName: "Last name", width: 100 },
  {
    field: "address",
    headerName: "address",

    width: 100,
  },
  {
    field: "email",
    headerName: "email",
    // description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
    // valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  {
    field: "phone",
    headerName: "phone",

    width: 100,
  },
  {
    field: "gender",
    headerName: "gender",

    width: 100,
  },
  {
    field: "experince",
    headerName: "experince",

    width: 100,
  },
  {
    field: "contract type",
    headerName: "contract type",

    width: 100,
  },
  {
    field: "salary",
    headerName: "salary",

    width: 100,
  },
  {
    field: "actions",
    headerName: "actions",
    width: 100,
    renderCell: (params) => (
      <>
        <IconButton component={Link} to="/edit-trainer">
          <EditIcon />
        </IconButton>

        {/* <IconButton onClick={() => handleviewClick(params.row.id)}>
          <RemoveRedEyeIcon />
        </IconButton> */}

        <IconButton onClick={() => handleviewClick(params.row.id)}>
          <PersonRemoveIcon />
        </IconButton>
      </>
    ),
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    address: "midan",
    email: "user@example",
    phone: 949928511,
    gender:"male",
    experince:"2 year",
    contract_type:"yearly",
    salary:"100$"
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    address: "midan",
    email: "user@example",
    phone: 949928511,
    gender:"male",
    experince:"2 year",
    contract_type:"yearly",
    salary:"100$"
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    address: "midan",
    email: "user@example",
    phone: 949928511,
    gender:"male",
    experince:"2 year",
    contract_type:"yearly",
    salary:"100$"
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    address: "midan",
    email: "user@example",
    phone: 949928511,
    gender:"male",
    experince:"2 year",
    contract_type:"yearly",
    salary:"100$"
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    address: "midan",
    email: "user@example",
    phone: 949928511,
    gender:"male",
    experince:"2 year",
    contract_type:"yearly",
    salary:"100$"
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    address: "midan",
    email: "user@example",
    phone: 949928511,
    gender:"male",
    experince:"2 year",
    contract_type:"yearly",
    salary:"100$"
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    address: "midan",
    email: "user@example",
    phone: 949928511,
    gender:"male",
    experince:"2 year",
    contract_type:"yearly",
    salary:"100$"
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    address: "midan",
    email: "user@example",
    phone: 949928511,
    gender:"male",
    experince:"2 year",
    contract_type:"yearly",
    salary:"100$"
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    address: "midan",
    email: "user@example",
    phone: 949928511,
    gender:"male",
    experince:"2 year",
    contract_type:"yearly",
    salary:"100$"
  },
];

export function Trainers() {
  return (
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
          <IconButton component={Link} to="/add-trainer">
            <PersonAdd />
          </IconButton>
          <TextField
  hiddenLabel
  id="filled-hidden-label-small"
  defaultValue=""
  variant="outlined"
  size="small"
  style={{marginLeft:"850px"}}
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
            {/* <IconButton>
              <PersonAddIcon />
            </IconButton> */}
          </div>
        </Box>
      </Box>
      <StickyFooter />
    </>
  );
}
