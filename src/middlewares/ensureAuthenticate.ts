import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

// tipagem IPayload
interface IPayload {
  sub: string;
}

export function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({
      error: true,
      messege: 'Não foi enviado o token temte mais tarde !',
    });
  }

  if (token.length === undefined || token.length === 1) {
    return response.status(401).json({
      error: true,
      messege: 'O token não foi enviado corretamente temte mais tarde !',
    });
  }

  // se o token foi passado corretamente vamos separar o token Bearer 0b307ba5e9c6bb5e04528bb57925b471
  const [scheme, AuthToken] = token.split(' ');
  if (!/^Bearer$/i.test(scheme)) {
    return response
      .status(401)
      .send({ error: true, messege: 'Token mal formatado !' });
  }

  try {
    const { sub } = verify(
      AuthToken,
      '0b307ba5e9c6bb5e04528bb57925b471',
    ) as IPayload;
    request.user_id = sub;
  } catch (error) {
    if (error) {
      return response.status(401).json({
        error: true,
        message: 'AuthToken Incorret0 !',
      });
    }
  }

  return next();
}
