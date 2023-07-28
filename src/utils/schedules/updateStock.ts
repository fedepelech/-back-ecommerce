import { ENVIRONMENT_VARIABLES } from '../../config/config';
import { externalRequest } from '../externalRequest';
import { ResponseRequestLogin } from './scheduleTypes';

async function makeLogin (): Promise<string | undefined> {
  try {
    const { NB_PASSWORD, NB_USER } = ENVIRONMENT_VARIABLES;
    const body = {
      user: NB_USER,
      password: NB_PASSWORD,
      mode: 'web'
    };
    const data = await externalRequest<typeof body>({
      url: 'https://webapi.nb.com.ar/v1/auth/login',
      method: 'POST',
      body
    })
    if (data.status !== 200) return undefined;
    const parseData = await data.json() as ResponseRequestLogin;
    return parseData.token;
  } catch (err) {
    console.error(`ERROR EN EL LOGIN CON NB --> ${JSON.stringify(err)}`);
    return undefined;
  }
}

async function updateStock (): Promise<string | undefined> {
  const token = await makeLogin();
  console.log('el token es --> ', token);
  return token;
}

export default updateStock;
