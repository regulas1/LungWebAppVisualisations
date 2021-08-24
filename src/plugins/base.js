import Vue from "vue";
import BaseBtn from "@/components/base/Btn";
import BaseCard from "@/components/base/Card";
import BaseSubheading from "@/components/base/Subheading";
// eslint-disable-next-line prettier/prettier
import BaseLayout from '@/components/base/Layout'

Vue.component(BaseBtn.name, BaseBtn);
Vue.component(BaseCard.name, BaseCard);
Vue.component(BaseSubheading.name, BaseSubheading);
//Added additional base components
Vue.component(BaseLayout.name, BaseLayout);
