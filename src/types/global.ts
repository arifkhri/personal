export interface Post {
  PageId: string;
  Title: string;
  Icon: FileObject | Emoji | null;
  Cover: FileObject | null;
  Slug: string;
  Date: string;
  Tags: SelectProperty[];
  Excerpt: string;
  FeaturedImage: FileObject | null;
  Rank: number;
}
