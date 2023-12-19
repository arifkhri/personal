import { NotionAPI } from 'notion-client';

import { getAllPost } from '@/integrations/api_notion';

export const getCardContent = (notionData: any) => {
  const posts = notionData.map(
    ({ id, created_time, cover, properties }: any) => {
      return {
        created_time,
        id,
        coverImg: cover?.external?.url || '',
        title: properties?.Name?.title?.[0]?.plain_text,
      };
    }
  );

  return posts;
};

export const getContent = async (pageId: string) => {
  const notion = new NotionAPI();
  const allPost: any = await getAllPost();
  const contentData = getCardContent([
    (allPost.results || []).find((post) => post.id === pageId),
  ])[0];
  const blocks = await notion.getPage(pageId);

  return { blocks, metaData: contentData };
};
