import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import AWS from 'aws-sdk';
import nextConnect from 'next-connect';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const upload = multer({
  storage: multer.memoryStorage(),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(500).json({ error: error.message });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post(async (req: NextApiRequest & { file: any }, res: NextApiResponse) => {
  const { category, gender } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `avatars/${Date.now()}_${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const data = await s3.upload(params).promise();

    // Mock saving metadata to database (replace with actual DB operation)
    const newAvatar = {
      id: Date.now(),
      name: file.originalname,
      category,
      gender,
      preview_url: data.Location,
      file_url: data.Location,
      avatar_type: 'custom',
    };

    return res.status(201).json({ message: 'Avatar uploaded successfully', avatar: newAvatar });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to upload avatar' });
  }
});

export const config = {
  api: {
    bodyParser: false, // Disabling bodyParser to process file uploads
  },
};

export default apiRoute;