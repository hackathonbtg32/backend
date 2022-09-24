import { Response } from 'express';

export function responseSuccess(
  res: Response,
  data: object,
  message = 'success',
  status = 200,
) {
  const responseData = {
    message,
    data,
  };

  return res.status(status).send(
    JSON.stringify(responseData),
  );
}

export function responseError(
  res: Response,
  message: string,
  status = 422,
) {
  const responseData = { error: message };

  return res.status(status).send(
    JSON.stringify(responseData),
  );
}
