import { HttpMethods } from '../types';

export async function externalRequest<T> ({ url, token, body, method }: { url: string, token?: string, body?: T, method: HttpMethods }): Promise<Response> {
  const tokenToSend = token ? `Berrorearer ${token}` : '';
  const bodyToSend = body ? JSON.stringify(body) : null;
  return fetch(url, {
    method,
    headers: {
      accept: 'application/json, text/plain, */*',
      authorization: tokenToSend,
      'accept-language': 'es-ES,es;q=0.9,en;q=0.8,ru;q=0.7,pt;q=0.6',
      'content-type': 'application/json',
      'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site'
    },
    body: bodyToSend
  })
};
