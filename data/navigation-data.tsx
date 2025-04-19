import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  YoutubeIcon as YouTube,
  Instagram,
} from "lucide-react";

export const navigationData = {
  mainNav: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Company", href: "/company" },
  ],
  socialLinks: [
    { label: "Facebook", href: "https://facebook.com", icon: <Facebook size={32} /> },
    { label: "Twitter", href: "https://twitter.com", icon: <Twitter size={32} /> },
    { label: "LinkedIn", href: "https://linkedin.com", icon: <LinkedIn size={32} /> },
    { label: "YouTube", href: "https://youtube.com", icon: <YouTube size={32} /> },
    { label: "Instagram", href: "https://instagram.com", icon: <Instagram size={32} /> },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms ", href: "/terms" },
  ],
};
