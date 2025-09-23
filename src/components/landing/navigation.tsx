"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import Link from "next/link";

export function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/30 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/80 to-accent/60 rounded-xl flex items-center justify-center shadow-md">
                            <Brain className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
                        <div className="flex gap-3">
                            <Link href="/login">
                                <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-200">Sign In</Button>
                            </Link>
                            <Link href="/signup">
                                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-200">Get Started</Button>
                            </Link>
                        </div>
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
                <div className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border/50 shadow-lg">
                    <div className="px-4 py-6 space-y-5">
                        <a
                            href="#features"
                            className="block text-muted-foreground hover:text-primary transition-all duration-200 font-medium"
                        >
                            Features
                        </a>
                        <a
                            href="#how-it-works"
                            className="block text-muted-foreground hover:text-primary transition-all duration-200 font-medium"
                        >
                            How it Works
                        </a>
                        <a
                            href="#testimonials"
                            className="block text-muted-foreground hover:text-primary transition-all duration-200 font-medium"
                        >
                            Reviews
                        </a>
                        <div className="flex flex-col space-y-3 pt-4">
                            <Link href="/login">
                                <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10 transition-all duration-200">Sign In</Button>
                            </Link>
                            <Link href="/signup">
                                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg transition-all duration-200">Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
