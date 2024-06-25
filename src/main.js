import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Quasar, QLayout, QHeader, QToolbar, QToolbarTitle, QBtn, QPageContainer, QPage, QDrawer, QList, QItem, QItemSection, QFooter } from 'quasar';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';

const app = createApp(App);

app.use(router);
app.use(Quasar, {
  components: {
    QLayout,
    QHeader,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QPageContainer,
    QPage,
    QDrawer,
    QList,
    QItem,
    QItemSection,
    QFooter,
  }
});

app.mount('#app');
