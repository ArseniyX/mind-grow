import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="text-center">
                    <Badge
                        variant="secondary"
                        className="mb-6 bg-accent/20 text-accent-foreground border-accent/30"
                    >
                        Transform Your Mind, Transform Your Life
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                        Grow Mentally & Emotionally with{" "}
                        <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                            MindGrow
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                        Your personal companion for mental and emotional
                        development. Build self-awareness, master emotional
                        control, and create lasting positive habits through
                        guided exercises and daily practices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/auth">
                            <Button size="lg" className="text-lg px-8 py-6">
                                Start Your Growth Journey
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-lg px-8 py-6 bg-transparent"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
