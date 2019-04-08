import cors from 'cors';

import { isProd } from '../constants';

const urls = isProd
  ? ['https://website.com', /website\.com$/] // Complete with your url.
  : [/localhost/];

const customCors = {
  origin: urls,
  credentials: true,
};

export default cors(customCors);
export { customCors };
