type IRecentPostsProps = {
  postList: any[];
};

const BlogGallery = ({ postList }: IRecentPostsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {postList.map(({ id, coverImg, title, created_time }) => (
      <a className="hover:translate-y-1" href={`/blog/${id}/`} key={id}>
        <div className="overflow-hidden rounded-md border border-gray-500">
          <div className="aspect-h-2 aspect-w-3">
            <img
              className="h-full w-full object-cover object-center"
              src={coverImg}
              alt="Image post"
              loading="lazy"
            />
          </div>
          <div className="px-3 pb-6 pt-4 text-center">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="mt-1 text-xs text-gray-400">{created_time}</div>
            {/* <div className="mt-2 text-sm">{description}</div> */}
          </div>
        </div>
      </a>
    ))}
  </div>
);

export { BlogGallery };
