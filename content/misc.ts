export const COUNTRIES = [
    { label: "United States", value: "US" },
    { label: "United Kingdom", value: "UK" },
    { label: "India", value: "IN" },
]

// Pricing Tiers
export const TIERS = [
    {
        label: "Starter",
        description: "Free forever",
        price: 0,
        features: [
            {
                label: "Keywords",
                description: "Up to 10 keywords",
            }
        ]
    },
    {
        label: "Main",
        description: "For pro users",
        price: 20,
        features: [
            {
                label: "Keywords",
                description: "Up to 100 keywords",
            }
        ]
    },
    {
        label: "Enterprise",
        description: "For custom usecases",
        price: 100,
        features: [
            {
                label: "Keywords",
                description: "Unlimited keywords",
            }
        ]
    }
]