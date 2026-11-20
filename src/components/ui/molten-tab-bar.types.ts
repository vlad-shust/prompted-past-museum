/**
 * Structural subset of react-navigation's BottomTabBarProps — just what the
 * bar renders. Keeps us off expo-router's internal type paths.
 */
export interface TabRoute {
  key: string;
  name: string;
}

export interface TabBarState {
  index: number;
  routes: TabRoute[];
}

export interface TabBarNavigation {
  navigate(name: string): void;
  emit(event: { type: 'tabPress'; target: string; canPreventDefault: true }): {
    defaultPrevented: boolean;
  };
}

export interface MoltenTabBarProps {
  state: TabBarState;
  navigation: TabBarNavigation;
}
