
// --- Portfolio Content Data ---
// Update this file to change text, projects, and timeline events without touching component code.

export const bioData = {
    title: "About Me",
    role: "Data Analyst",
    location: "New York",
    description: "I turn data into a strategic driver for business success. From leading the design of revenue-reporting solutions in Domo to automating forecasting with leadership, I build the robust foundations required for modern analytics. My work ensures that every dashboard and data mart is built on a framework of security, compliance, and forward-looking strategy.",
    email: "yjoshi1997@gmail.com",
    resumeLink: "resume.pdf"
};

export const heroData = {
    welcome: "Hi, I'm Yash.",
    subtitle: "I tell stories with data.",
    bio: "Data Analyst in NYC. Transforming raw complexity into actionable clarity through elegant architecture and data storytelling."
};

export const toolkitData = [
    {
        category: "Data Engineering",
        tools: [
            { name: "SQL", icon: "Database", badge: "Advanced" },
            { name: "Data Marts", icon: "Server", badge: "Architect" },
            { name: "ETL/ELT", icon: "Workflow", badge: "Scalable Pipelines" }
        ]
    },
    {
        category: "Analytics & BI",
        tools: [
            { name: "Domo", icon: "BarChart2", badge: "Specialist", highlight: true },
            { name: "Google Analytics", icon: "TrendingUp", badge: "Certified" },
            { name: "Power BI", icon: "PieChart", badge: "Proficient" }
        ]
    },
    {
        category: "Programming",
        tools: [
            { name: "Python", icon: "Terminal", badge: "Data Scripting" },
            { name: "R", icon: "Code", badge: "Statistical Analysis" },
            { name: "JavaScript", icon: "Braces", badge: "Frontend Viz" }
        ]
    }
];

export const timelineMilestones = [
    {
        id: "1997",
        year: "1997",
        x: "10%",
        y: "75%",
        events: [
            {
                title: "Birth",
                description: "The initial release, arrived with zero documentation.",
                tag: "Mumbai, India",
            }
        ]
    },
    {
        id: "2015",
        year: "2015",
        x: "30%",
        y: "45%",
        events: [
            {
                title: "Started College",
                description: "Initiated a 4-year trial of how to find the answer to any question 10 minutes before the deadline.",
                tag: "Mumbai, India",
            }
        ]
    },
    {
        id: "2019",
        year: "2019",
        x: "50%",
        y: "55%",
        events: [
            {
                title: "Graduated",
                description: "22-year free trial of life ended, subscription to adulthood started immediately.",
                tag: "Mumbai, India",
            },
            {
                title: "Moved to the US",
                description: "Moved 8,000 miles just to realize that traffic is a universal constant.",
                tag: "New York, US",
            }
        ]
    },
    {
        id: "2021",
        year: "2021",
        x: "70%",
        y: "30%",
        events: [
            {
                title: "Completed Masters",
                description: "Officially qualified to Google things at a professional level.",
                tag: "New York, US",
            },
            {
                title: "Started First Job",
                description: "Mostly just happy to be included in the CC line of emails.",
                tag: "New York, US",
            }
        ]
    },
    {
        id: "2025",
        year: "2025",
        x: "90%",
        y: "65%",
        events: [
            {
                title: "Promoted",
                description: "Upgraded to a version with more responsibility and 20% more meetings.",
                tag: "New York, US",
            }
        ]
    },
];

export const projectsData = [
    {
        title: "Revenue Insights Engine",
        role: "Data Engineering & Viz",
        vizKey: "VizGrowth",
        stats: [
            { label: "Reporting Time", value: "-40%" },
            { label: "Data Sources", value: "12+" }
        ],
        problem: "Executive team relied on manual Excel sheets that were prone to errors and delayed by days.",
        solution: "Built a centralized automated reporting ecosystem using Domo and SQL pipelines.",
        tags: ["Domo", "SQL", "Automation"],
    },
    {
        title: "Market Pulse Tracker",
        role: "Real-time Analytics",
        vizKey: "VizPulse",
        stats: [
            { label: "Update Freq", value: "Real-time" },
            { label: "Competitors", value: "25+" }
        ],
        problem: "Marketing spend was inefficient due to lagged data on competitive positioning.",
        solution: "Developed a live market intelligence dashboard tracking share-of-voice and pricing.",
        tags: ["Tableau", "Python", "API Integration"],
    },
    {
        title: "Transactions Reconciler",
        role: "ETL & Logic",
        vizKey: "VizNetwork",
        stats: [
            { label: "Accuracy", value: "99.9%" },
            { label: "Errors Found", value: "Auto-Flagged" }
        ],
        problem: "Finance team spent last week of every month manually matching 10k+ transactions.",
        solution: "Created an automated discrepancy detection tool connecting 4 disconnected data sources.",
        tags: ["Python", "Pandas", "Airflow"],
    },
    {
        title: "Quarterly Forecaster",
        role: "Machine Learning",
        vizKey: "VizPrediction",
        stats: [
            { label: "Accuracy Boost", value: "15%" },
            { label: "Model", value: "XGBoost" }
        ],
        problem: "Revenue planning was based on gut-feeling rather than historical seasonality.",
        solution: "Deployed a dynamic predictive modeling system accounting for seasonal trends.",
        tags: ["Machine Learning", "Python", "Scikit"],
    },
];
