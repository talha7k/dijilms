export interface NavItem {
  title: string;
  url?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
  label?: string;
  items?: NavItem[];
}

export interface SocialLink {
  title: string;
  url: string;
  icon: string;
}

export interface SidebarNav {
  title: string;
  items: NavItem[];
}
