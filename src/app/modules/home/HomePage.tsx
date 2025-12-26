import React from "react";
import { useAtomValue } from "jotai";
import { layoutConfigAtom } from "@/app/runtime/runtimeStore";
import { HOME_WIDGET_REGISTRY } from "@/app/modules/home/widgets";
import { LAYOUT_REGISTRY } from "@/app/ui/layouts";

interface Props {
  onNavigate: (to: string, options?: any) => void;
}

const HomeScreen: React.FC<Props> = ({ onNavigate }) => {
  const layoutConfig = useAtomValue(layoutConfigAtom);
  
  // Default to classic if layout key is invalid or missing
  // JSON has "preset": "gold"
  const LayoutComponent = LAYOUT_REGISTRY[layoutConfig.preset as keyof typeof LAYOUT_REGISTRY] || LAYOUT_REGISTRY.classic;

  return (
    <LayoutComponent bottomNav={true}>
      {layoutConfig.homeWidgets.map((widgetKey, index) => {
        // widgetKey is a string like "kpiToday"
        const WidgetComponent = HOME_WIDGET_REGISTRY[widgetKey];
        if (!WidgetComponent) {
          console.warn(`Widget type "${widgetKey}" not found.`);
          // Silent fail or Placeholder
          return null; 
        }
        return (
          <WidgetComponent 
            key={`${widgetKey}-${index}`} 
            onNavigate={onNavigate} 
          />
        );
      })}
    </LayoutComponent>
  );
};

export default HomeScreen;
