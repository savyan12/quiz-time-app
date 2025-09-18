import { h } from 'vue'
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
import AppleIcon from '@/components/icons/AppleIcon.vue'
import GoogleIcon from '@/components/icons/GoogleIcon.vue'
import MenuIcon from '@/components/icons/MenuIcon.vue'
import BellIcon from '@/components/icons/BellIcon.vue'
import CheckBadge from '@/components/icons/CheckBadge.vue'
import ClockIcon from '@/components/icons/ClockIcon.vue'
import TrashIcon from '@/components/icons/TrashIcon.vue'
import CirclePlusIcon from '@/components/icons/CirclePlusIcon.vue'
import PenOutlinedIcon from '@/components/icons/PenOutlinedIcon.vue'
import TashOutlinedIcon from '@/components/icons/TashOutlinedIcon.vue'
import CircleInfoIcon from '@/components/icons/CircleInfoIcon.vue'
import OnlineUser from '@/components/icons/OnlineUser.vue'
import TermsIcon from '@/components/icons/TermsIcon.vue'
import PcCodeIcon from '@/components/icons/PcCodeIcon.vue'
import BookIcon from '@/components/icons/BookIcon.vue'
const BpIcons = {
  facebook: FacebookIcon,
  apple: AppleIcon,
  google: GoogleIcon,
  menu: MenuIcon,
  bell: BellIcon,
  checkBadge: CheckBadge,
  clock: ClockIcon,
  trash: TrashIcon,
  circlePlus: CirclePlusIcon,
  pen: PenOutlinedIcon,
  trashOutlined: TashOutlinedIcon,
  circleInfo: CircleInfoIcon,
  onlineUser: OnlineUser,
  terms: TermsIcon,
  pcCode: PcCodeIcon,
  book: BookIcon,
}

const QTIconSet = {
  component: (props) => {
    const iconName = props.icon.replace('qt-', '')
    const iconComponent = BpIcons[iconName]

    if (!iconComponent) {
      console.warn(`[Vuetify] Custom icon "${props.icon}" not found.`)
      return null
    }

    return h(iconComponent, {
      ...props,
      class: 'v-icon__svg',
    })
  },
}

export { QTIconSet }
