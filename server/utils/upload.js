import multer from "multer";
import {GridFsStorage} from 'multer-gridfs-storage'

const storage = new GridFsStorage({
    url:'mongodb://0.0.0.0:27017/whatsapp-clone',
    options:{useUnifiedTopology:true,useNewUrlParser:true},
    file : (req,file) =>{
        const match=["image/png","image/jpg"]

        if(match.indexOf(file.mimeType) === -1){
            return `${Date.now()}-file-${file.originalname}`;
        }

        return {
            buketName:'photo',
            filename:`${Date.now()}-file-${file.originalname}`
        }
    }
})

export default multer({ storage });