// // Importing modules
// import PDFDocument from 'pdfkit'
// import fs from 'fs'
// import AWS from 'aws-sdk';
// import path from "path"

  
// // Create a document

//  export  const createpdf=(req)=>{

//   console.log(req.files[0].filename);
//   var image=req.files[0].path
//   var name=req.body.name
//   var roll =req.body.roll
//   var age=req.body.age
//   console.log(req.files);

//   // var pdfName=req.files[0].fieldname;
//   const randNO = (Math.random() + 1).toString(36).substring(7);
//   console.log(randNO);
 

//  const doc = new PDFDocument();
  
// // Saving the pdf file in root directory.
// let writeStream=(fs.createWriteStream(`./pdf/${randNO}.pdf`))
// doc.pipe(writeStream)
  
  
// // Adding functionality

// doc
//   .fontSize(27)
//   .text(`name: ${name}`)
//   .moveDown(0.5)

// doc
//   .fontSize(27)
//   .text(`roll: ${roll}`)
//   .moveDown(0.5)
  


//   doc
//   .fontSize(27)
//   .text(`age: ${age}` )
//   .moveDown(0.5)

 
  
// // Adding an image in the pdf.
  
//   doc.image(image, { 
//     fit: [300, 300],
//     align: 'center',
//     valign: 'center',
   
//   });
  
//   doc
//   .addPage()
//   .fontSize(15)
//   .text('Generating PDF with the help of pdfkit', 100, 100);

//   doc.end();



//   writeStream.on('finish', function () {
   
//   const filePath= `./pdf/${randNO}.pdf`;
    
//     const fileContent = fs.readFileSync(filePath);
//     var params = {
//         Key :`${randNO}.pdf` ,
//         Body : fileContent,
//         Bucket : process.env.AWS_BUCKET,
//         ContentType : 'application/pdf',
//         ACL: "public-read"
//       }
      
//     const s3 = new AWS.S3({
//         accessKeyId: process.env.AWS_ACCESS_KEY,
//         secretAccessKey: process.env.AWS_SECRET_KEY
//     });
//       //notice use of the upload function, not the putObject function
//     s3.upload(params, function(err, response) {
//         333
//     });
// });


// }
