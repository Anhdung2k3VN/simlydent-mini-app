// Patient App Widgets
import { HomeHeader } from "./HomeHeader";
import { GreetingWidget } from "./GreetingWidget";
import { NextAppointmentWidget } from "./NextAppointmentWidget";
import { FeaturedServicesWidget } from "./FeaturedServicesWidget";
import { PromoBannerWidget } from "./PromoBannerWidget";
import { QuickActionsWidget } from "./QuickActionsWidget";
import ProfilePage from "./ProfilePage";

export const HOME_WIDGET_REGISTRY: Record<string, React.ComponentType<any>> = {
  homeHeader: HomeHeader,
  greeting: GreetingWidget,
  nextAppointment: NextAppointmentWidget,
  featuredServices: FeaturedServicesWidget,
  promoBanner: PromoBannerWidget,
  quickActions: QuickActionsWidget,
  profile: ProfilePage
};
