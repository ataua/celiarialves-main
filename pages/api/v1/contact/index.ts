import type { NextApiRequest, NextApiResponse } from "next";

const contactRoute = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'POST':
            return res.status(200).json(req.body);
        case 'OPTIONS':
            res.setHeader('Allow', 'POST');
            return res.status(204).end();
        default:
            return res.status(405).json({ error: 'Method not allowed' });
    }
};

export default contactRoute;