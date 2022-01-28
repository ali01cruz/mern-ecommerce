import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination(req,file , cb){
        cb(null, 'uploads');
    },
    filename(req,file, cb){
        cb(
            null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        );
    },
});

const checkFileType = (file, cb) => {
    const filestypes =  /jpeg|jpg|png|gif/ //'jpg, png, jpeg'
    const extname = filestypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filestypes.test(file.mimetype);

    if(extname && mimetype){
        return cb(null,true);
    }else{
        cb('Images only!');
    }

};

export const uploadConfig = multer({
    storage,
    fileFilter: function(req, file, cb){
        checkFileType(file,cb);
    }
}).single('image');

export const upload = (req, res) => {
    res.send(`/${req.file.path.replace(/\\/g, '/')}`);
};