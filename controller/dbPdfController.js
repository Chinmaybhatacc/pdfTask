import {db} from '../models/index.js'

const pdf=db.info

  export const addPdf = async (req, res, err) => {
    console.log("hello:    ", req.files[0].filename);
    let status;
    if(err){
        status = err
    }else{
        status = "pdf created"
    }
    try {

        let info = {
            name: req.body.name,
            roll:parseInt (req.body.roll),
            age:parseInt( req.body.age),
            filename: req.files[0].filename,
            status: status
        }

        const create = await pdf.create(info);
        console.log(create);
        return res.status(200).json({data:create, status:"Success"});

    } catch (error) {

        console.log(error);
    }
}