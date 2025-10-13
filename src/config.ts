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
  {
    title: "Parent Portal",
    items: [
      {
        title: "Parent Dashboard",
        url: "/parent",
        icon: "lucide:user-check",
      },
      {
        title: "Child Progress",
        url: "/parent/progress",
        icon: "lucide:bar-chart",
      },
      {
        title: "Communication",
        url: "/parent/communication",
        icon: "lucide:message-circle",
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
      type: "Starter",
      price: "0",
      name: "Individual Educator",
      features: [
        "Up to 50 students",
        "5 courses",
        "Basic assessments",
        "Progress tracking",
        "Community support",
      ],
    },
    {
      type: "Pro",
      price: "49",
      name: "School/Institution",
      features: [
        "Unlimited students",
        "Unlimited courses",
        "AI-powered assessments",
        "Advanced analytics",
        "Priority support",
        "Parent portal",
      ],
    },
    {
      type: "Enterprise",
      price: "199",
      name: "Large Institution",
      features: [
        "Multi-school management",
        "Custom integrations",
        "Advanced security",
        "Dedicated support",
        "API access",
        "White-label options",
      ],
    },
  ],
  yearly: [
    {
      type: "Starter",
      price: "0",
      name: "Individual Educator",
      features: [
        "Up to 50 students",
        "5 courses",
        "Basic assessments",
        "Progress tracking",
        "Community support",
      ],
    },
    {
      type: "Pro",
      price: "490",
      name: "School/Institution",
      features: [
        "Unlimited students",
        "Unlimited courses",
        "AI-powered assessments",
        "Advanced analytics",
        "Priority support",
        "Parent portal",
      ],
    },
    {
      type: "Enterprise",
      price: "1990",
      name: "Large Institution",
      features: [
        "Multi-school management",
        "Custom integrations",
        "Advanced security",
        "Dedicated support",
        "API access",
        "White-label options",
      ],
    },
  ],
};
