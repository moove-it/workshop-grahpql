import toobusy from 'toobusy-js';

// Middleware which blocks requests when the Node server is too busy
// now automatically retries the request at another instance of the server if it's too busy
const tooBusy = (req, res, next) => {
  if (toobusy()) {
    res.statusCode = 503;
    return res.end('We are very busy right now, please try again in a minute.');
  }

  return next();
};

export default tooBusy;
