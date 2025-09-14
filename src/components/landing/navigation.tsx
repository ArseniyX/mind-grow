"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";

export function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-chart-2 rounded-lg flex items-center justify-center">
                            <Brain className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold text-foreground">
                            MindGrow
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#features"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href="#how-it-works"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            How it Works
                        </a>
                        <a
                            href="#testimonials"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Reviews
                        </a>
                        <Button variant="outline">Sign In</Button>
                        <Button>Get Started</Button>
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-card border-t border-border">
                    <div className="px-4 py-4 space-y-4">
                        <a
                            href="#features"
                            className="block text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href="#how-it-works"
                            className="block text-muted-foreground hover:text-foreground transition-colors"
                        >
                            How it Works
                        </a>
                        <a
                            href="#testimonials"
                            className="block text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Reviews
                        </a>
                        <div className="flex flex-col space-y-2 pt-4">
                            <Button variant="outline">Sign In</Button>
                            <Button>Get Started</Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}