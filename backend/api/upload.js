import cloudinary from "cloudinary";
import { IncomingForm } from "formidable";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const form = new IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ err });
    const file = files.file;
    const result = await cloudinary.v2.uploader.upload(file.filepath, {
      folder: "my-pwa-app",
    });
    res.status(200).json({ url: result.secure_url });
  });
}
