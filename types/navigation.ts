export interface NavigationLink { label: string; href: string; description?: string; category?: string }
export type NavigationItem =
  | (NavigationLink & { children?: NavigationLink[]; triggerOnly?: false })
  | ({ label: string; children: NavigationLink[]; triggerOnly: true; intro?: string; introTitle?: string; href?: never });
