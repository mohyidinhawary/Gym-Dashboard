import { IconButton } from "@mui/material";
import UesrAccountStatment from "../components/account-statment/user-account-statment.component";
export const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 340 },
    { field: "lastName", headerName: "Last name", width: 340 },
    
    {
      field: "actions",
      headerName: "actions",
      width: 340,
      renderCell: (params) => (
       
  <>
            <IconButton onClick={() => handleviewClick(params.row.id)}>
             <UesrAccountStatment />
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
  