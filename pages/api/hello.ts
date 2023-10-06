// React JS Code ----------------------------------

// export default function handler(req, res) {
//   res.status(200).json({ text: 'Hello' });
// }

// TypeScript Code ----------------------------------

import { NextApiRequest, NextApiResponse } from 'next';

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' });
};
