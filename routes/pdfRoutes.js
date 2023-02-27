import express from "express";
import {upload} from '../controller/uploadController.js'
import {createpdf} from '../utils/pdf.js'
import { addPdf } from "../controller/dbPdfController.js";


  const router =express.Router()

 export default  router.post('/image',upload.any(), async (req,res)=>{
    console.log(req.body)
    const result = await createpdf(req)
    console.log("result----------->>-",JSON.stringify(result));
    if(result.error!==""){
      addPdf(req, res, result.error)      
      
    }else{
      addPdf(req, res, result.message);
    }    

    // console.log(req.file)
    // res.send("image Uploaded Successfully");
   })






