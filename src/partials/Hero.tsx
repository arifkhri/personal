import { Section } from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
        <div>
          <div className="flex w-full flex-col content-center items-center justify-center justify-items-center">
            <img
              className="border-1 w-64 rounded-full grayscale-[20%]"
              src="/assets/images/profile.jpeg"
              alt="Avatar image"
              loading="lazy"
            />
            <h1 className="mt-5 text-3xl font-bold">
              Hi, I'm{' '}
              <span className="bg-gradient-to-br bg-clip-text">Ari</span>
              👋
            </h1>
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

            <p>
              Someone who love to solving a problem with a code line, exploring
              new things about web development, and brave to take a new
              challange. The frontend stack i have been working is ReactJS, but
              also had experience on Angular, VueJS, Codeigniter, and Laravel.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { Hero };
