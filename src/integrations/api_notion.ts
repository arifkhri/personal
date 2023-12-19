import Fetch from '@/utils/Fetch';

const baseURL = import.meta.env.SECRET_NOTION_API_URL;
const headers = {
  Authorization: `Bearer ${import.meta.env.SECRET_NOTION_SECRET_KEY}`,
  'Notion-Version': import.meta.env.SECRET_NOTION_API_VERSION,
};
const DatabaseID = import.meta.env.SECRET_NOTION_DATABASE;

export const getAllPost = async () => {
  const { post } = Fetch({ baseURL });
  const response = await post(
    `/v1/databases/${DatabaseID}/query`,
    {
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
    },
    { headers }
  );
  return response;
};
