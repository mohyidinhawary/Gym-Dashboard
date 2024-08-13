
import{
  Table,
TableBody,
TableCell,
TableHead,
TableRow ,
 
} from "./index"
import {rows} from "../../constants/exports-imports-table-info"
import { TableContainer,Paper } from "@mui/material"
  
export default function ExportsImportsTable(){
    return(
       
     <>
     <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell  >Date</TableCell>
            <TableCell>Name</TableCell>
           
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
             
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      
      </>
   
    )
}