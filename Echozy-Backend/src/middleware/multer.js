import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Folder to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Keep original filename (you can customize this too)
  },
});

const upload = multer({ storage });

export default upload;
