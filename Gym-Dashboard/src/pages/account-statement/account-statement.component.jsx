
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, TextField } from "@mui/material";
import {columns,rows} from "../../constants/account-statement-info"
import SplitScreen from "../../layouts/split-screen/splitscreen.component"

import AddNotification from "../../components/add-notification/add-notification.component";
import html2canvas from "html2canvas";
import jsPDF from "jspdf"
import { useRef } from "react";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
export function AccountStatement() {
  const pdfRef=useRef();

  const downloadPDF=()=>{
const input=pdfRef.current;
html2canvas(input).then((canvas)=>{
  const imgData=canvas.toDataURL('image/png');
  const pdf= new jsPDF('p','mm','a4',true);
  const pdfWidth=pdf.internal.pageSize.getWidth();
  const pdfHeight=pdf.internal.pageSize.getHeight();
  const imgWidth=canvas.width;
  const imgHeight=canvas.height;
  const ratio=Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
  const imgX=(pdfWidth-imgWidth*ratio)/2;
  const imgY=30;
  pdf.addImage(imgData,'PNG ',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
  pdf.save('invoice.pdf')

})
  }
  return (
    <>
      
          <SplitScreen>
          <AddNotification />
          <IconButton onClick={downloadPDF}>
          <PictureAsPdfIcon />
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
          <div style={{ height: 600, width: "100%" }} ref={pdfRef}>
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
