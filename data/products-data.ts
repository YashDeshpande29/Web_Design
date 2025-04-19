export const productsData = {
  featuredProducts: [
    {
      id: "product1",
      name: "Cloud Cost Advisor",
      shortDescription:
        "An economical cloud resource management solution with unified analytics.",
      description:
        "Cloud Cost Advisor is an economical cloud resource management solution useful for monitoring cloud costs within any multi-cloud environment by integrating into a single dashboard analytics view. It helps track spending, optimize usage, and provide transparency across providers like AWS, Azure, and Google Cloud.",
      keyFeatures: [
        "Multi-cloud integration across AWS, Azure, and GCP",
        "Real-time cost and usage visualization",
        "AI-driven resource usage optimization",
        "Custom dashboards and trend analysis",
      ],
      benefits: [
        "Reduce cloud costs by up to 40%",
        "Optimize underutilized resources",
        "Make informed cloud budgeting decisions",
      ],
      image: "/products/product1.png",
      featureImage: "/products/product1-feature.png",
      useCases: [
        {
          title: "Monitor Multi-Cloud Spend",
          description:
            "Track spending across multiple cloud providers in one unified view.",
        },
        {
          title: "Identify Cost-Intensive Resources",
          description:
            "Visualize which services consume the most cost and prioritize optimization.",
        },
        {
          title: "Optimize Resource Usage",
          description:
            "Analyze usage patterns and get recommendations to right-size workloads.",
        },
      ],
      videoUrl: "https://www.youtube.com/embed/iioVPIi_hXA", // dummy video
    },
    {
      id: "product2",
      name: "GenAI MultiDesk",
      shortDescription:
        "AI-powered centralized issue analytics & summarization for multiple ticketing tools.",
      description:
        "GenAI MultiDesk is an AI-powered integrated issue tracking solution for summarization and analytics. It connects with multiple ticketing tools like Jira, ServiceNow, Zendesk, Freshdesk, and more, to provide centralized insights and streamlined resolution workflows.",
      keyFeatures: [
        "Unified interface for multiple ticketing systems",
        "AI-based issue summarization and priority insights",
        "Cross-platform analytics and reporting",
        "Real-time sentiment and escalation tracking",
      ],
      benefits: [
        "Reduce time to resolution with smart summaries",
        "Gain centralized control over disparate tools",
        "Improve support efficiency with actionable insights",
      ],
      image: "/products/product2.png",
      featureImage: "/products/product2-feature.png",
      useCases: [
        {
          title: "Cross-Tool Issue Insights",
          description:
            "Aggregate and visualize data from Jira, Zendesk, Freshdesk, and more in one place.",
        },
        {
          title: "AI-Powered Summarization",
          description:
            "Summarize long issue threads instantly and identify the root cause.",
        },
        {
          title: "Real-Time Escalation Tracking",
          description:
            "Stay informed about priority tickets and unresolved issues across platforms.",
        },
      ],
      videoUrl: "", // Can be updated when a demo video is available
    },
  ],
}
