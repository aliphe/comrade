import { Request } from 'express';

export type RequestWithBody<Body> = Request<any, any, Body>;
