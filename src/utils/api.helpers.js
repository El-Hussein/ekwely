import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
const CONNECTION_ERROR = 'حدث خطأ في الاتصال';
const API_BASE_URL = 'http://app.key-frame.cf/';
import store from '../redux/store';

export const makePostRequest = async ({
  url,
  data = null,
  params = null,
  headers = null,
}) => {
  const response = await makeRequest(url, data, params, headers, 'post');
  return response;
};

export const makeGetRequest = async ({
  url,
  data = null,
  params = null,
  headers = null,
}) => {
  const response = await makeRequest(url, data, params, headers, 'get');
  return response;
};

export const makePutRequest = async ({
  url,
  data = null,
  params = null,
  headers = null,
}) => {
  const response = await makeRequest(url, data, params, headers, 'put');
  return response;
};

export const makeDeleteRequest = async ({
  url,
  data = null,
  params = null,
  headers = null,
}) => {
  const response = await makeRequest(url, data, params, headers, 'delete');
  return response;
};

export const makeRequest = async (
  url,
  data = null,
  params = null,
  headers = null,
  method = null,
) => {
  const config = {
    url: `${API_BASE_URL}${url}`,
    method: method || 'get',
  };
  const userToken = store.getState().auth.auth_token;
  if (userToken) {
    config.headers = headers
      ? {Authorization: `Bearer ${userToken}`, ...headers}
      : {Authorization: `Bearer ${userToken}`};
  } else {
    config.headers = headers ? {...headers} : null;
  }
  if (params) {
    config.params = params;
  }
  if (data) {
    config.data = data;
  }

  NetInfo.fetch().then((state) => {
    if (!state.isConnected) {
      throw new Error(CONNECTION_ERROR);
    }
  });

  const response = await axios.request({...config, timeout: 3000});
  return response;
};
