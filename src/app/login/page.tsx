"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Leaf } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Store auth state
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem(
            "user",
            JSON.stringify({
                name: "User",
                email: formData.email,
            })
        );

        // Check if user has completed onboarding
        const hasCompletedOnboarding = localStorage.getItem(
            "hasCompletedOnboarding"
        );

        if (hasCompletedOnboarding === "true") {
            router.push("/dashboard");
        } else {
            router.push("/onboarding");
        }

        setIsLoading(false);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-muted/30 to-primary/5">
            <div className="w-full max-w-md space-y-8">
                {/* Logo and Brand */}
                <div className="text-center space-y-3">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="relative p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg">
                            <Leaf className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            MindGrow
                        </h1>
                    </div>
                    <p className="text-muted-foreground text-balance text-lg">
                        Welcome back to your growth journey
                    </p>
                </div>

                {/* Login Card */}
                <Card className="border-border/30 shadow-2xl bg-gradient-to-br from-card via-card to-primary/5">
                    <CardHeader className="space-y-2 pb-6">
                        <CardTitle className="text-2xl text-center font-bold">
                            Sign In
                        </CardTitle>
                        <CardDescription className="text-center text-balance text-base">
                            Enter your credentials to continue
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "email",
                                            e.target.value
                                        )
                                    }
                                    required
                                    className="h-11 bg-muted/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                                    <a href="#" className="text-xs text-primary hover:text-primary/80 transition-colors">Forgot password?</a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "password",
                                            e.target.value
                                        )
                                    }
                                    required
                                    className="h-11 bg-muted/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-11 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                        <span>Signing in...</span>
                                    </div>
                                ) : (
                                    "Sign In"
                                )}
                            </Button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-border/50 text-center">
                            <p className="text-sm text-muted-foreground">
                                Don't have an account?{" "}
                                <Link
                                    href="/signup"
                                    className="font-medium text-primary hover:text-primary/80 transition-colors"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <p className="text-xs text-muted-foreground text-center text-balance">
                    By continuing, you agree to our{" "}
                    <a href="#" className="underline hover:text-foreground transition-colors">Terms of Service</a>{" "}
                    and{" "}
                    <a href="#" className="underline hover:text-foreground transition-colors">Privacy Policy</a>
                </p>
            </div>
        </div>
    );
}