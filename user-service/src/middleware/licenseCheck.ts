import { Request, Response, NextFunction } from 'express';

const validLicenseKey = '1111';

export const licenseCheck = (req: Request, res: Response, next: NextFunction) => {
  const licenseKey = req.headers['x-license-key'];

  if (!licenseKey) {
    return res.status(401).json({ message: 'License key is missing' });
  }

  if (licenseKey !== validLicenseKey) {
    return res.status(403).json({ message: 'Invalid license key' });
  }

  next();
};