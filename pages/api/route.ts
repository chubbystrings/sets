


import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const response = await fetch(
    "https://med-backend-mgndbmo2l-chubbystrings.vercel.app/api/v1/med_backend/roles",
    {}
  );
  const data = await response.json();
  res.status(200).json({ data });
}