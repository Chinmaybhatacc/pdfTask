import multer from "multer"
import path from "path"





const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
    //  console.log(req.body)
     console.log(file)

     
     cb(null,Date.now() + path.extname(file.originalname));
    }
  })


  
export  var upload = multer({ storage : storage})
   
