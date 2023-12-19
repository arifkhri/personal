import { Section } from 'astro-boilerplate-components';

import { BlogGallery } from './BlogGallery';

type IRecentPostsProps = {
  postList: any[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          <span className="text-amber-800">|</span> Recent Posts
        </div>

        <div className="text-sm">
          <a href="/blog/" className="underline">
            All posts
          </a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
