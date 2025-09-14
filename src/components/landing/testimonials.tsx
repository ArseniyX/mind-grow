import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "MindGrow helped me understand myself better than I ever thought possible. The identity exercises were eye-opening and the daily structure keeps me motivated.",
        author: "Sarah Chen",
        role: "Marketing Manager",
        avatar: "S",
        gradient: "from-primary to-chart-2"
    },
    {
        quote: "The emotional control techniques have been life-changing. I feel more balanced and confident in handling stress. Highly recommend to anyone seeking growth.",
        author: "Michael Rodriguez",
        role: "Software Engineer",
        avatar: "M",
        gradient: "from-chart-2 to-accent"
    },
    {
        quote: "Building better habits has never been easier. The structure module gave me the framework I needed to create lasting positive changes in my daily routine.",
        author: "Emily Johnson",
        role: "Teacher",
        avatar: "E",
        gradient: "from-accent to-primary"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
                        Transforming Lives Every Day
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Join thousands of users who have discovered their
                        potential and created lasting positive change.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="border-border/50">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 text-yellow-400 fill-current"
                                        />
                                    ))}
                                </div>
                                <p className="text-muted-foreground mb-4 text-pretty">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center">
                                    <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-primary-foreground font-bold mr-3`}>
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}