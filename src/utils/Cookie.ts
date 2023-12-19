import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

export default {
  set(cname, cvalue, exdays?, path?) {
    if (!canUseDOM) {
      return;
    }

    const d = new Date();

    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);

    const expires = `;expires=${d.toUTCString()}`;
    const cookiePath = `;path=${path || '/'}`;

    document.cookie = `${cname}=${cvalue + expires + cookiePath}`;
  },

  // Get the value of cookie given a cookie key or return object if no key given
  // =([^;]+) get the matching value between = and anything before ";"
  get(name) {
    if (!canUseDOM) {
      return '';
    }

    // if (typeof name === 'undefined') {
    //   return document.cookie
    //     .match(new RegExp('([a-zA-Z0-9:._]+)=([^;]+)', 'g'))
    //     .map(function (raw) {
    //       return raw.split('=');
    //     })
    //     .reduce(function (o, v) {
    //       o[v[0]] = v[1];

    //       return o;
    //     }, {});
    // }
    const match = document.cookie.match(new RegExp(`${name}=([^;]+)`));

    return match && typeof match[1] !== 'undefined' ? match[1] : false;
  },

  // Delete, simply by setting passed date
  del(name, path = '/') {
    if (!canUseDOM) {
      return;
    }

    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=${path};`;
  },
};
