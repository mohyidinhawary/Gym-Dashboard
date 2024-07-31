

import Modal from '@mui/material/Modal';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { rows } from '../../constants/user-account-statement-info';
import {columns} from '../../constants/user-account-statement-info';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useRef } from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import html2canvas from "html2canvas";
import jsPDF from "jspdf"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UesrAccountStatment(){
    
       
        const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
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
  pdf.save('account-statement.pdf')

})
  }
  

  


  return (
    <div>
      <IconButton onClick={handleOpen}>
      <RemoveRedEyeIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
        <div  >
            <DataGrid
              rows={rows}
              columns={columns}
              rowsPerPageOptions={[]}
        disableColumnFilter
        disableColumnMenu
        hideFooterPagination
        ref={pdfRef}
            />
           <IconButton onClick={downloadPDF}>
          <PictureAsPdfIcon />
          </IconButton>
          </div>
          </Box>
      </Modal>
    </div>
        
    )
}