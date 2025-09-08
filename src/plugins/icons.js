import { h } from "vue";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import AppleIcon from "@/components/icons/AppleIcon.vue";
import GoogleIcon from "@/components/icons/GoogleIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import BellIcon from "@/components/icons/BellIcon.vue";
import CheckBadge from "@/components/icons/CheckBadge.vue";
const BpIcons = {
  facebook: FacebookIcon,
  apple: AppleIcon,
  google: GoogleIcon,
  menu: MenuIcon,
  bell: BellIcon,
  checkBadge: CheckBadge,
};

const QTIconSet = {
  component: (props) => {
    const iconName = props.icon.replace("qt-", "");
    const iconComponent = BpIcons[iconName];

    if (!iconComponent) {
      console.warn(`[Vuetify] Custom icon "${props.icon}" not found.`);
      return null;
    }

    return h(iconComponent, {
      ...props,
      class: "v-icon__svg",
    });
  },
};

export { QTIconSet };
