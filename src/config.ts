import type { NavItem, SidebarNav, SocialLink } from "$lib/types/nav";

export const siteConfig = {
  title: "Elite LMS",
  description: "An LMS designed for professionals and schools.",
  logo: "/logo.svg",
  logoDark: "/logo.svg",
  favicon: "/favicon.png",
};

export const marketingNavItems: NavItem[] = [
  {
    title: "Home",
    url: "/",
  },

  {
    title: "Features",
    url: "/features",
  },
  {
    title: "Pricing",
    url: "/pricing",
  },

  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const appNavItems: SidebarNav[] = [
  {
    title: "Platform",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: "lucide:layout-dashboard",
      },
    ],
  },
  {
    title: "Student Portal",
    items: [
      {
        title: "My Learning",
        url: "/student",
        icon: "lucide:graduation-cap",
      },
      {
        title: "My Courses",
        url: "/student/courses",
        icon: "lucide:book-open",
      },
      {
        title: "Progress",
        url: "/student/progress",
        icon: "lucide:bar-chart",
      },
    ],
  },
  {
    title: "Teacher Portal",
    items: [
      {
        title: "Teacher Dashboard",
        url: "/teacher",
        icon: "lucide:school",
      },
      {
        title: "Course Management",
        url: "/teacher/courses",
        icon: "lucide:book-open",
      },
      {
        title: "Student Oversight",
        url: "/teacher/students",
        icon: "lucide:users",
      },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "talha7k",
    url: "https://www.linkedin.com/in/talha7k/",
    icon: "linkedin",
  },
  {
    title: "talha7k",
    url: "https://github.com/talha7k/svelte-firebase-starter-kit.git",
    icon: "github",
  },
];

export const contactInfo = {
  email: "info@codegio.com",
  phone: "+52 818 201 2602",
  address: "Monterrey, Mexico",
};

export const plans = {
  monthly: [
    {
      type: "Hobby",
      price: "0",
      name: "Personal Projects",
      features: [
        "1 project",
        "Basic Firebase setup",
        "Community support",
        "Basic components",
      ],
    },
    {
      type: "Pro",
      price: "29",
      name: "Professional",
      features: [
        "Unlimited projects",
        "Priority support",
        "Advanced components",
        "Custom configurations",
      ],
    },
    {
      type: "Enterprise",
      price: "99",
      name: "Team Plan",
      features: [
        "Team collaboration",
        "Custom integrations",
        "Advanced security",
        "Dedicated support",
      ],
    },
  ],
  yearly: [
    {
      type: "Hobby",
      price: "0",
      name: "Personal Projects",
      features: [
        "1 project",
        "Basic Firebase setup",
        "Community support",
        "Basic components",
      ],
    },
    {
      type: "Pro",
      price: "290",
      name: "Professional",
      features: [
        "Unlimited projects",
        "Priority support",
        "Advanced components",
        "Custom configurations",
      ],
    },
    {
      type: "Enterprise",
      price: "990",
      name: "Team Plan",
      features: [
        "Team collaboration",
        "Custom integrations",
        "Advanced security",
        "Dedicated support",
      ],
    },
  ],
};
