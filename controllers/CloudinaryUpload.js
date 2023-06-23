import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const uploadImage = (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (err, result) => {
      // Remove the temporary file
      fs.unlinkSync(file.path);

      if (err) {
        console.error("Error uploading file:", err);
        reject("Failed to upload file");
      } else {
        // File uploaded successfully
        console.log("Upload result:", result);
        const imageUrl = result.secure_url;
        resolve(imageUrl);
      }
    });
  });
};
