import type { IFrontmatter } from 'astro-boilerplate-components';
import { PostHeader, Section } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader content={props.frontmatter} author={AppConfig.author} />

    {/* <PostContent content={props.frontmatter}>{props.children}</PostContent> */}
    <object
      data="https://ari-fakhri.notion.site/The-Power-of-Positive-Thinking-75b47c3aa4074ce19b5b981a2e419319"
      width="600"
      height="400"
    >
      <embed
        src="https://ari-fakhri.notion.site/The-Power-of-Positive-Thinking-75b47c3aa4074ce19b5b981a2e419319"
        width="600"
        height="400"
      />
      Error: Embedded data could not be displayed.
    </object>
    <iframe src="https://ari-fakhri.notion.site/The-Power-of-Positive-Thinking-75b47c3aa4074ce19b5b981a2e419319" />
  </Section>
);

export { BlogPost };
