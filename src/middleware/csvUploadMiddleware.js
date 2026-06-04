import multer from 'multer';

// create a multer instance
const upload = multer({ dest: './src/data/uploads/' });

export default function csvUploadMiddleware(req, res, next) {
    upload.single('file')(req, res, (err) => {
        if (err) {
            const uploadError = new Error(err.message);
            uploadError.statusCode = 400;

            if (err.message === "Request aborted") {
                uploadError.message = "CSV upload was aborted before the file finished uploading";
            }

            return next(uploadError);
        }

        next();
    });
}
