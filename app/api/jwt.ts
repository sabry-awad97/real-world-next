import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your-secret-key';

export function encode(payload: object) {
  return jwt.sign(payload, JWT_SECRET);
}

export function decode(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
