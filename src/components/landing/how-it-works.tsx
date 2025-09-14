const steps = [
    {
        number: "1",
        title: "Sign Up & Assess",
        description: "Create your account and complete our comprehensive assessment to understand your current state and growth areas.",
        bgColor: "bg-primary",
        textColor: "text-primary-foreground"
    },
    {
        number: "2",
        title: "Personalized Onboarding",
        description: "Experience our guided onboarding that introduces you to the app's features and creates your personalized growth plan.",
        bgColor: "bg-chart-2",
        textColor: "text-primary-foreground"
    },
    {
        number: "3",
        title: "Start Training",
        description: "Begin your daily practice with exercises, reflections, and habit-building activities tailored to your goals.",
        bgColor: "bg-accent-foreground",
        textColor: "text-accent"
    }
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 lg:py-32 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
                        Your Growth Journey in 3 Simple Steps
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Start your transformation today with our guided,
                        science-backed approach to personal development.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 ${step.textColor} font-bold text-xl`}>
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4">
                                {step.title}
                            </h3>
                            <p className="text-muted-foreground text-pretty">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}