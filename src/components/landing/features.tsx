import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Target, CheckCircle } from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "Identity",
        description: "Discover your authentic self through guided self-reflection exercises, values clarification, and personal growth assessments.",
        gradient: "from-primary/20 to-chart-2/20",
        iconColor: "text-primary",
        checkColor: "text-primary",
        items: [
            "Self-reflection journaling",
            "Values & strengths assessment",
            "Personal growth tracking"
        ]
    },
    {
        icon: Heart,
        title: "Emotional Mastery",
        description: "Master your emotions with proven techniques for stress management, mindfulness practices, and emotional regulation skills.",
        gradient: "from-chart-2/20 to-accent/20",
        iconColor: "text-chart-2",
        checkColor: "text-chart-2",
        items: [
            "Mindfulness meditation",
            "Stress management tools",
            "Emotional awareness exercises"
        ]
    },
    {
        icon: Target,
        title: "Daily Routines",
        description: "Build lasting positive habits with daily routines, goal setting frameworks, and progress tracking systems that create sustainable change.",
        gradient: "from-accent/20 to-primary/20",
        iconColor: "text-accent-foreground",
        checkColor: "text-accent-foreground",
        items: [
            "Daily routine builder",
            "Habit tracking system",
            "Goal achievement framework"
        ]
    }
];

export function Features() {
    return (
        <section id="features" className="py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
                        Three Pillars of Personal Growth
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Our comprehensive approach focuses on the essential
                        areas that drive meaningful personal transformation.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={index}
                                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
                            >
                                <CardContent className="p-8 text-center">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 text-pretty">
                                        {feature.description}
                                    </p>
                                    <ul className="text-left space-y-2 text-sm text-muted-foreground">
                                        {feature.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-center">
                                                <CheckCircle className={`w-4 h-4 ${feature.checkColor} mr-2 flex-shrink-0`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}