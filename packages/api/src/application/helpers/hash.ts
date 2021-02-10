import crypto from 'crypto';
import config from '../../config';

export function hash(text: string): string {
  const hmac = crypto.createHmac('sha256', config.hash.secret);

  hmac.update(text);
  return hmac.digest('hex');
}
