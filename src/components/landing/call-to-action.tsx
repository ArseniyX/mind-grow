import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-chart-2/5 to-accent/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
                    Ready to Transform Your Life?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                    Join thousands of users who are already on their journey
                    to better mental and emotional well-being.
                </p>
                <Button size="lg" className="text-lg px-8 py-6">
                    Start Your Free Journey Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </div>
        </section>
    );
}