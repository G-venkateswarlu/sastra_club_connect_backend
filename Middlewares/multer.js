import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "collegeBlogs",   // Cloudinary folder name
    allowed_formats: ["jpg", "jpeg", "png"],
    resource_type:'auto',
  },
});

const upload = multer({ storage });

export default upload;
