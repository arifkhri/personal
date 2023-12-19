import { Section } from 'astro-boilerplate-components';

import SocialLink from './SocialLink';

const Navbar = () => (
  <Section>
    <div className="flex flex-row items-center justify-between gap-y-3">
      <a href="/">
        <span className="text-xl font-bold text-amber-700">{`{...a}`}</span>
      </a>

      <SocialLink />
    </div>
  </Section>
);

export { Navbar };
