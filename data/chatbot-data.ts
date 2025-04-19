export const chatbotData = {
  welcomeMessage: "👋 Hey there! I'm the CloudX Assistant. How can I support you today?",
  fallbackMessage:
    "I'm sorry, I couldn't quite understand that. Could you please provide more specific information? Alternatively, you can get in touch with our support team for assistance.",
  quickActions: [
    { label: "Product Catalogue", url: "/products" },
    { label: "Customer Support", url: "mailto:newbugllc@gmail.com" },
    { label: "Book a Demo", url: "#request-demo" },
  ],
  rules: [
    {
      keywords: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"],
      response: "Hi! 👋 I'm here to help you explore Cloud Cost Advisor. What would you like to know?",
      actions: [
        { label: "View Products", url: "/products" },
        { label: "Book a Demo", url: "#request-demo" },
        { label: "Contact Support", url: "mailto:newbugllc@gmail.com " },
        { label: "Contact Support", url: "mailto:newbugllc@gmail.com" },
      ],
    },
    {
      keywords: ["demo", "demonstration", "see it in action", "request demo", "show me"],
      response:
        "Absolutely! 🚀 You can request a personalized demo or explore it here. Choose an option below:",
      actions: [
        { label: "Request Demo", url: "#request-demo" },
        { label: "Contact Sales", url: "mailto:newbugllc@gmail.com " },
      ],
    },
    {
      keywords: ["tbm", "technology business management", "business goals", "it spend"],
      response:
        "Our TBM solution aligns your IT spend with business goals through transparency and insights. Want to explore more?",
      actions: [
        { label: "Explore TBM", url: "/solutions/tbm" },
        { label: "Book a TBM Demo", url: "#request-demo" },
      ],
    },
    {
      keywords: ["finops", "cloud cost", "cloud spend", "cloud financial", "cloud budget"],
      response:
        "FinOps is at the core of what we do! 🌩️ We help manage cloud costs, forecast budgets, and drive efficiency. What would you like to explore?",
      actions: [
        { label: "FinOps Overview", url: "/solutions/finops" },
        { label: "Book a FinOps Demo", url: "#request-demo" },
      ],
    },
    {
      keywords: ["agile", "portfolio management", "project management", "strategy", "action"],
      response:
        "Our Agile Portfolio Management tools help turn strategy into action. Ready to dive deeper?",
      actions: [
        { label: "Learn More", url: "/solutions/agile-portfolio" },
        { label: "Talk to an Expert", url: "mailto:newbugllc@gmail.com " },
      ],
    },
    {
      keywords: ["price", "pricing", "cost", "how much", "quote", "budget"],
      response:
        "Our pricing is flexible and tailored to your needs. Would you like a quote or an overview?",
      actions: [
        { label: "View Pricing", url: "/pricing" },
        { label: "Request a Quote", url: "mailto:newbugllc@gmail.com " },
      ],
    },
    {
      keywords: ["contact", "sales", "talk to someone", "representative", "reach out"],
      response:
        "Sure! You can contact us or have someone reach out to you. What would you prefer?",
      actions: [
        { label: "Email Sales", url: "mailto:newbugllc@gmail.com " },
        { label: "Email Sales", url: "mailto:newbugllc@gmail.com" },
        { label: "Call Now", url: "tel:+18001234567" },
      ],
    },
    {
      keywords: ["thank", "thanks", "appreciate", "thank you", "grateful"],
      response: "You're very welcome! 😊 Let me know if there’s anything else I can help you with.",
    },
    {
      keywords: ["help", "support", "assist", "issue", "problem"],
      response:
        "I'm here to help! Could you tell me a bit more about the issue you're facing? You can also contact our support team directly.",
      actions: [
        { label: "Contact Support", url: "mailto:newbugllc@gmail.com" },
        { label: "View Help Center", url: "/help-center" },
      ],
    },
    {
      keywords: ["about", "company", "who are you", "what is this"],
      response:
        "We are Cloud Cost Advisor, a platform dedicated to helping businesses optimize their cloud costs and align IT spend with business goals. How can we assist you today?",
      actions: [
        { label: "Learn About Us", url: "/about" },
        { label: "Contact Sales", url: "mailto:newbugllc@gmail.com " },
      ],
    },
    {
      keywords: ["careers", "jobs", "work with you", "join team"],
      response:
        "We're always looking for talented individuals to join our team! Check out our careers page for current openings.",
      actions: [
        { label: "View Careers", url: "/careers" },
        { label: "Contact HR", url: "mailto:newbugllc@gmail.com " },
      ],
    },
    {
      keywords: ["integrations", "tools", "connect", "third-party"],
      response:
        "We offer seamless integrations with popular tools and platforms. Would you like to learn more about our integrations?",
      actions: [
        { label: "View Integrations", url: "/integrations" },
        { label: "Request Integration Info", url: "mailto:newbugllc@gmail.com" },
      ],
    },
    {
      keywords: ["security", "data protection", "privacy", "safe"],
      response:
        "We take security and data protection very seriously. Your data is safe with us. Would you like to learn more about our security practices?",
      actions: [
        { label: "View Security Info", url: "/security" },
        { label: "Contact Support", url: "mailto:newbugllc@gmail.com " },
        { label: "Contact Support", url: "mailto:newbugllc@gmail.com" },
      ],
    },
    {
      keywords: ["products", "offerings", "services", "solutions"],
      response:
        "Cloud Cost Advisor offers a range of products to help you optimize your cloud usage and costs. Our key offerings include:\n\n- Cloud Cost Management: Gain insights into your cloud spending.\n- FinOps Solutions: Drive financial accountability for cloud usage.\n- Agile Portfolio Management: Align IT investments with business goals.\n\nWould you like to explore more?",
      actions: [
        { label: "View Products", url: "/products" },
        { label: "Request a Demo", url: "#request-demo" },
        { label: "Contact Sales", url: "mailto:newbugllc@gmail.com " },
      ],
    },
  ],
};
