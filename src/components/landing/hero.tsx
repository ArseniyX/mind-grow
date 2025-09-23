import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                    <Badge
                        variant="secondary"
                        className="mb-8 bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30 px-4 py-2 text-sm font-medium shadow-lg"
                    >
                        Transform Your Mind, Transform Your Life
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-8 text-balance leading-tight">
                        Grow Mentally & Emotionally with{" "}
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            MindGrow
                        </span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty leading-relaxed">
                        Your personal companion for mental and emotional
                        development. Build self-awareness, master emotional
                        control, and create lasting positive habits through
                        guided exercises and daily practices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/signup">
                            <Button
                                size="lg"
                                className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            >
                                Start Your Growth Journey
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-lg px-10 py-6 bg-card/50 backdrop-blur-sm border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
