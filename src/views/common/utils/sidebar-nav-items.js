import { ExitToApp, CardGiftcard } from "@material-ui/icons";
export default function getSidebarItems() {
  return [
    {
      path: "promotions",
      name: "Promotions",
      icon: <CardGiftcard />,
    },
    {
      path: "Logout",
      name: "Logout",
      icon: <ExitToApp />,
    },
  ];
}
