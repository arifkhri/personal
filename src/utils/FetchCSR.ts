import { toQueryParams } from './Formater';

const FetchCSR = () => {
  const baseURL = import.meta.env.PUBLIC_APPHOST;

  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const post = (url, payload = {}, config = {}) => {
    const defaultConfig = {
      method: 'POST',
      body: JSON.stringify(payload),
      ...config,
      headers: {
        ...defaultHeaders,
        ...config.headers,
      },
    };

    return new Promise((resolved, reject) => {
      try {
        fetch(`${baseURL}${url}`, defaultConfig)
          .then((res) => {
            console.log('🚀 ~ file: FetchCSR.ts:25 ~ res:', res);
            return res.json();
          })
          .then((res) => {
            if (
              (res.status && res.status !== 200 && res.status !== 201) ||
              (res.statusCode &&
                res.statusCode !== 200 &&
                res.statusCode !== 201) ||
              res.errors?.length > 0
            ) {
              reject(res);
            } else {
              resolved(res);
            }
          });
      } catch (e) {
        reject(e);
      }
    });
  };

  const get = (url, params = '', config = {}) => {
    const defaultConfig = {
      method: 'GET',
      ...config,
      headers: {
        ...defaultHeaders,
        ...config.headers,
      },
    };

    let queryParams = '';

    if (params) {
      queryParams = toQueryParams(params);
    }

    return new Promise((resolved, reject) => {
      try {
        fetch(`${baseURL}${url}${queryParams || ''}`, defaultConfig)
          .then((res) => res.json())
          .then((res) => {
            // products endpoint has not statusCode or status property
            if ((res.errors || [])?.length < 1) {
              resolved(res);
            }

            if (res.status !== 200 && res.statusCode !== 200) {
              reject(res);
            } else {
              resolved(res);
            }
          });
      } catch (e) {
        reject(e);
      }
    });
  };

  return { post, get };
};

export default FetchCSR;
