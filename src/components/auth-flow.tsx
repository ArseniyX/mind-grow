"use client";

import type React from "react";

import { useState } from "react";
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
import { Leaf, Sparkles } from "lucide-react";

interface AuthFlowProps {
    onAuthComplete: (user: { name: string; email: string }) => void;
}

export function AuthFlow({ onAuthComplete }: AuthFlowProps) {
    const [isSignUp, setIsSignUp] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        onAuthComplete({
            name: formData.name || "User",
            email: formData.email,
        });

        setIsLoading(false);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-card to-muted">
            <div className="w-full max-w-md space-y-6">
                {/* Logo and Brand */}
                <div className="text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="relative">
                            <Leaf className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-2xl font-bold text-foreground">
                            MindGrow
                        </h1>
                    </div>
                    <p className="text-muted-foreground text-balance">
                        Your journey to mental and emotional growth starts here
                    </p>
                </div>

                {/* Auth Card */}
                <Card className="border-border/50 shadow-lg">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-xl text-center">
                            {isSignUp ? "Create your account" : "Welcome back"}
                        </CardTitle>
                        <CardDescription className="text-center text-balance">
                            {isSignUp
                                ? "Begin your personal development journey"
                                : "Continue your growth journey"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {isSignUp && (
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "name",
                                                e.target.value
                                            )
                                        }
                                        required={isSignUp}
                                        className="bg-input border-border focus:ring-ring"
                                    />
                                </div>
                            )}

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "email",
                                            e.target.value
                                        )
                                    }
                                    required
                                    className="bg-input border-border focus:ring-ring"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "password",
                                            e.target.value
                                        )
                                    }
                                    required
                                    className="bg-input border-border focus:ring-ring"
                                />
                            </div>

                            {isSignUp && (
                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword">
                                        Confirm Password
                                    </Label>
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "confirmPassword",
                                                e.target.value
                                            )
                                        }
                                        required={isSignUp}
                                        className="bg-input border-border focus:ring-ring"
                                    />
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                        <span>
                                            {isSignUp
                                                ? "Creating account..."
                                                : "Signing in..."}
                                        </span>
                                    </div>
                                ) : isSignUp ? (
                                    "Create Account"
                                ) : (
                                    "Sign In"
                                )}
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <button
                                type="button"
                                onClick={() => setIsSignUp(!isSignUp)}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {isSignUp
                                    ? "Already have an account? Sign in"
                                    : "Don't have an account? Sign up"}
                            </button>
                        </div>
                    </CardContent>
                </Card>

                <p className="text-xs text-muted-foreground text-center text-balance">
                    By continuing, you agree to our Terms of Service and Privacy
                    Policy
                </p>
            </div>
        </div>
    );
}
