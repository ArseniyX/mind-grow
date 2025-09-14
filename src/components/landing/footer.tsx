import { Brain } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-card border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-chart-2 rounded-lg flex items-center justify-center">
                                <Brain className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="text-xl font-bold text-foreground">
                                MindGrow
                            </span>
                        </div>
                        <p className="text-muted-foreground mb-4 text-pretty">
                            Your personal companion for mental and emotional
                            development. Transform your mind, transform your
                            life.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">
                            Product
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <a
                                    href="#features"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#how-it-works"
                                    className="hover:text-foreground transition-colors"
                                >
                                    How it Works
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#testimonials"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Reviews
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <button className="hover:text-foreground transition-colors">
                                    Sign Up
                                </button>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
                    <p>&copy; 2024 MindGrow. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
