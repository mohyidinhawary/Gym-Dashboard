import { IconButton } from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
export const columns = [
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
      field: "rate",
      headerName: "rate",
  
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
  
          <IconButton onClick={() => handleviewClick(params.row.id)}>
            <PersonRemoveIcon />
          </IconButton>
        </>
      ),
    },
  ];



 export  const rows = [
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
      salary:"100$",
      rate:200
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
      salary:"100$",
      rate:200
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
      salary:"100$",
      rate:200
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
      salary:"100$",
      rate:200
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
      salary:"100$",
      rate:200
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
      salary:"100$",
      rate:200
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
      salary:"100$",
      rate:200
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
      salary:"100$",
      rate:200
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
      salary:"100$",
      rate:200
    },
  ];
  