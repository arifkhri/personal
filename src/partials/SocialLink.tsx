const SocialLink = () => {
  return (
    <div className="my-3 flex gap-2 ">
      <a
        href="https://github.com/arifkhri"
        className="rounded-md bg-white p-1 hover:translate-y-1"
      >
        <img
          className="h-5 w-5"
          src="/assets/images/github.svg"
          alt="Github icon"
          loading="lazy"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ari-fakhri-b53094113"
        className="rounded-md bg-white p-1 hover:translate-y-1"
      >
        <img
          className="h-5 w-5"
          src="/assets/images/linkedin.svg"
          alt="Linkedin icon"
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default SocialLink;
