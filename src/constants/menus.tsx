import { Home } from "lucide-react";

export const LANDING_PAGE_MENU: MenuProps[] = [
    {
      id: 0,
      label: "Home",
      icon: <Home />,
      path: "/",
      section: true,
    },
    {
      id: 1,
      label: "Pricing",
      icon: <CreditCard />,
      path: "#pricing",
      section: true,
    },
    {
      id: 1,
      label: "Explore",
      icon: <Explore />,
      path: "/explore",
    },
  ]