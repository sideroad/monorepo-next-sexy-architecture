import { fetcher, useFetch } from 'shared/helpers/fetcher';
import config from '../config';

export interface UserGetRQ {
  id: string;
}

export interface UserGetRS {
  login: string;
  avatar_url: string;
  html_url: string;
}

export const useUser = (
  params: UserGetRQ,
  initialData?: UserGetRS
): { data: UserGetRS; error: any; loading: boolean } => {
  return useFetch(`https://${config.api.host}/users/[id]`, params, initialData);
};

export const fetchUser = (params: UserGetRQ) =>
  fetcher(`https://${config.api.host}/users/[id]`, params);
