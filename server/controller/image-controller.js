import grid from "gridfs-stream";
import mongoose from "mongoose";

const conn = mongoose.connection;
let gfs,gridFsBucket;
conn.once('open',() =>{
   gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName:'fs'
    });
   gfs = grid(conn.db,mongoose.mongo)
   gfs.collection('fs');
})

const url = 'http://localhost:8000';

export const uploudFile =(req,res) =>{
    if(!req.file){
        return res.status(404).json('file not found')
    }

    const ImageUrl = `${url}/file/${req.file.filename}`;

    return res.status(200).json(ImageUrl);
}

export const getImage =async (req,res) =>{
    try{
        const ImageFile = await gfs.files.findOne({filename : req.params.filename})
        const readstream= gridFsBucket.openDownloadStream(ImageFile._id);
        
        readstream.pipe(res)
    }catch(err){
        return res.status(500).json(err.message);
    }
}