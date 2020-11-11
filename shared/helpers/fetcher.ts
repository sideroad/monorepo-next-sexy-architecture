import useSWR from 'swr';
import qs from 'qs';

const normalize = (_uri: string, params: { [x: string]: string }): string => {
  let uri = _uri;
  const values = {};
  Object.keys(params).forEach(key => {
    const val = encodeURIComponent(params[key]);
    if (uri.match(`\\[${key}\\]`)) {
      uri = uri.replace(new RegExp(`\\[${key}\\]`, 'g'), val);
    } else {
      values[key] = params[key];
    }
  });
  const query = qs.stringify(values);
  return `${uri}${query ? `?${query}` : ''}`;
};

export const fetcher = (_url: string, params?: any) => {
  const url = params ? normalize(_url, params) : _url;
  return fetch(url, {
    method: 'GET'
    // mode: 'cors',
    // credentials: 'include'
  }).then(res => res.json());
};

export const useFetch = (url: string, params: any = {}, initialData?: any) => {
  const _url = normalize(url, params);
  const { data, error } = useSWR(_url, fetcher, { initialData });
  return { data, error, loading: !data && !error };
};
