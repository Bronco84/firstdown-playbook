import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import GuestLayout from '@/Layouts/GuestLayout.vue';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

// /* import specific icons */
import { faBasketball, faFlag, faFootball, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* Brand FA Icons */
import { faFacebook, faLinkedin, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

// /* add icons to the library */
library.add([faBasketball, faFlag, faFootball, faUserSecret, faFacebook, faLinkedin, faInstagram, faPinterest, faTwitter, faYoutube])

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const page = resolvePageComponent(
          `./Pages/${name}.vue`,
          import.meta.glob("./Pages/**/*.vue")
        );
        page.then((module) => {
          module.default.layout = GuestLayout;
        });
        return page;
      },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .mixin({
                components: { FontAwesomeIcon, FontAwesomeLayers},
                // data: () => ({
                //     appUrl: process.env.MIX_APP_URL,
                //     appDomain: process.env.MIX_APP_DOMAIN,
                // }),
            })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        // The delay after which the progress bar will appear
        // during navigation, in milliseconds.
        delay: 550,

        // The color of the progress bar.
        color: '#29d',

        // Whether to include the default NProgress styles.
        includeCSS: true,

        // Whether the NProgress spinner will be shown.
        showSpinner: false,
      },
});
