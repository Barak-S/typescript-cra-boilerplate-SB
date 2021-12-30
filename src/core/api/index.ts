import axios, { AxiosRequestHeaders } from 'axios';

interface ApiReqOpt {
  method?: 'get' | 'post';
  path: string;
  data?: unknown;
}

const getApi = () => {
  const apiRoot = 'https://us-central1-dev-glory-smacks.cloudfunctions.net';

  const apiReq = async ({ method = 'get', path, data }: ApiReqOpt) => {
    const url = `${apiRoot}${path}`;
    const headers: AxiosRequestHeaders = {};
    if (data) {
      headers['Content-Type'] = 'application/json';
    }
    const reqData = data ? JSON.stringify(data) : undefined;
    console.log('api req', { method, url, data });
    const { status, data: body } = await axios({ method, url, data: reqData, headers });
    console.log('api req done', { status, body });
    return body;
  };

  const verifyMobilePhone = async (countryCode: string, phoneNumber: string) =>
    apiReq({ method: 'post', path: '/twilio-verify', data: { countryCode, phoneNumber } });

  const verifySecurityCode = async (countryCode: string, phoneNumber: string, code: string) =>
    apiReq({ method: 'post', path: '/twilio-verify-check-token', data: { countryCode, phoneNumber, code } });

  return { verifyMobilePhone, verifySecurityCode };
};

export const sendPack = async (packId: string, recipient: string) => {
  const url = 'https://us-central1-dev-glory-smacks.cloudfunctions.net/call-send-pack';
  const res = await axios.post(url, {
    packId,
    recipient,
  });

  return res;
};

export const api = getApi();