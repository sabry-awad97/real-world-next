import { createHmac, Hmac } from 'crypto';

const base64UrlEncode = (str: string) => {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
};

const generateJWT = (header: object, payload: object, hmac: Hmac) => {
  const encodedHeader = base64UrlEncode(JSON.stringify(header));

  const encodedPayload = base64UrlEncode(JSON.stringify(payload));

  const signature = hmac
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest('base64url');

  return `${encodedHeader}.${encodedPayload}.${signature}`;
};

const secret = 'your-256-bit-secret';

const hmac = createHmac('sha256', secret);

const header = {
  alg: 'HS256',
  typ: 'JWT',
};

const payload = {
  sub: '1234567890',
  name: 'John Doe',
  iat: 1516239022,
};

const token = generateJWT(header, payload, hmac);

console.log('JWT:', token);
