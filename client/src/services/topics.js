import api from './api-config';

export const getAllTopics = async () => {
  const resp = await api.get('/topics');
  return resp.data;
};
