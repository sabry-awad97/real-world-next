import jwt from 'jsonwebtoken';

const secret = 'your-256-bit-secret';

const header = {
  alg: 'HS256',
  typ: 'JWT',
};

const payload = {
  sub: '1234567890',
  name: 'John Doe',
  iat: 1516239022,
};

const token = jwt.sign(payload, secret, { header });

console.log('JWT:', token);

try {
  const decoded = jwt.verify(token, secret);
  console.log('Diary Entry:', decoded);
} catch (error) {
  console.error('Unauthorized!.');
}
