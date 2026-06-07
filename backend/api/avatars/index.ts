import type { NextApiRequest, NextApiResponse } from 'next';

// Mock database of avatars
const avatars = [
  {
    id: 1,
    name: "3D Business Male",
    category: "3d",
    gender: "male",
    preview_url: "https://example.com/previews/3d-business-male.png",
    file_url: "https://example.com/files/3d-business-male.glb",
    avatar_type: "3d",
  },
  {
    id: 2,
    name: "2D Casual Female",
    category: "2d",
    gender: "female",
    preview_url: "https://example.com/previews/2d-casual-female.png",
    file_url: "https://example.com/files/2d-casual-female.mp4",
    avatar_type: "2d",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { category, gender } = req.query;

    // Filter avatars by query parameters
    let filteredAvatars = avatars;

    if (category) {
      filteredAvatars = filteredAvatars.filter((avatar) => avatar.category === category);
    }

    if (gender) {
      filteredAvatars = filteredAvatars.filter((avatar) => avatar.gender === gender);
    }

    return res.status(200).json(filteredAvatars);
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}