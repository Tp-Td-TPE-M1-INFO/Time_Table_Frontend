import {
    faHeart,
    faFaceSmile,
    faPlayCircle,
    faFaceLaugh,
    faRectangleList,
    faUsers,
    faSearch,
    faCommenting,
    faBell,
    faUser,
    faFlag,
    faShop,
    faRecordVinyl
} from '@fortawesome/free-solid-svg-icons'

const navLinks = [
  {
    path: "/home",
    icon: faFaceSmile,
    display: "Friends",
    color:"orange"
  },
  {
    path: "/home",
    icon: faRecordVinyl,
    display: "Records",
    color:"red"
  },
  {
    path: "/home",
    icon: faFlag,
    display: "Pages",
  },
  {
    path: "/home",
    icon: faFlag,
    display: "Most recent",
    color:"var(--primary)"
  },
  {
    path: "/home",
    icon: faUsers,
    display: "Groups",
    color:"var(--primary)"
  },
  {
    path: "/home",
    icon: faShop,
    display: "Marketplace",
    color:"var(--primary)"
  },
  {
    path: "/home",
    icon: faPlayCircle,
    display: "Watch",
  },
  {
    path: "/home",
    icon: faHeart,
    display: "Donate",
    color:"red"
  },
];

export default navLinks;
