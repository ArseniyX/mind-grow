"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Brain,
    ArrowRight,
    CheckCircle,
    BookOpen,
    Heart,
    Target,
    Sparkles,
    Users,
    Compass,
    Shield,
} from "lucide-react";

export default function IdentityDevelopmentPage() {
    const [hasReadInstructions, setHasReadInstructions] = useState(false);

    const benefits = [
        {
            icon: Compass,
            title: "Clear Direction",
            description:
                "Discover your authentic self and life purpose through evidence-based self-reflection",
        },
        {
            icon: Shield,
            title: "Strong Foundation",
            description:
                "Build unshakeable core values that guide your decisions and actions",
        },
        {
            icon: Heart,
            title: "Authentic Living",
            description:
                "Align your daily actions with your deepest values for greater fulfillment",
        },
        {
            icon: Target,
            title: "Purposeful Growth",
            description:
                "Create meaningful goals that reflect your true identity and aspirations",
        },
    ];

    const researchBasis = [
        "Self-Determination Theory (Deci & Ryan) - Supporting autonomy and authentic self-expression",
        "Schwartz Theory of Basic Values - Research-backed framework for understanding personal values",
        "Identity Development Theory (Marcia) - Structured approach to identity exploration and commitment",
        "Values-Based Living (ACT) - Practical application of values in daily decision-making",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/10">
            {/* Header */}
            <header className="border-b border-border/30 bg-card/80 backdrop-blur-md sticky top-0 z-10 shadow-sm">
                <div className="max-w-5xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Link
                                href="/dashboard"
                                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <ArrowRight className="h-4 w-4 rotate-180" />
                                <span>Back to Dashboard</span>
                            </Link>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                                <Brain className="h-5 w-5 text-primary" />
                            </div>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Identity Development
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
                {/* Introduction Section */}
                <div className="text-center space-y-4">
                    <Badge
                        variant="secondary"
                        className="mb-4 bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30 px-4 py-2"
                    >
                        ✨ Discover Your Authentic Self
                    </Badge>
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        Build Your Identity Foundation
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Embark on a scientifically-guided journey to discover
                        your core values, strengthen your sense of self, and
                        create a life that truly reflects who you are.
                    </p>
                </div>

                {/* What You'll Learn Section */}
                <Card className="border-border/30 shadow-lg bg-gradient-to-br from-card via-card to-primary/5">
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-2xl">
                            <BookOpen className="h-6 w-6 text-primary" />
                            <span>What You'll Learn</span>
                        </CardTitle>
                        <CardDescription className="text-base">
                            This module is based on proven psychological
                            research and therapeutic approaches
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-muted/30 to-primary/5"
                                >
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <benefit.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/20">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                                <Users className="h-4 w-4 text-accent" />
                                <span>Research Foundation</span>
                            </h4>
                            <ul className="space-y-2">
                                {researchBasis.map((research, index) => (
                                    <li
                                        key={index}
                                        className="text-sm text-muted-foreground flex items-start space-x-2"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                        <span>{research}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* The Process Section */}
                <Card className="border-border/30 shadow-lg bg-gradient-to-br from-card via-card to-secondary/5">
                    <CardHeader>
                        <CardTitle className="text-2xl">
                            The Identity Development Process
                        </CardTitle>
                        <CardDescription className="text-base">
                            A structured, research-based approach to building
                            your authentic identity
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="grid gap-4">
                                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">
                                            Values Discovery
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Select 3-5 core values from our
                                            research-backed collection that
                                            resonate deeply with who you want to
                                            be
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-accent/5 to-transparent">
                                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">
                                            Daily Affirmations
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Practice value-based affirmations
                                            before taking important actions to
                                            strengthen your identity
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-secondary/5 to-transparent">
                                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-sm font-bold text-secondary">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">
                                            Evening Reflection
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Reflect each evening on how well
                                            your day aligned with your chosen
                                            values and identity
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Instructions Confirmation */}
                <Card className="border-border/30 shadow-lg bg-gradient-to-br from-card via-card to-primary/5">
                    <CardHeader>
                        <CardTitle className="text-xl">
                            Ready to Begin?
                        </CardTitle>
                        <CardDescription>
                            Please confirm you've read and understood the
                            instructions above
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={() =>
                                        setHasReadInstructions(
                                            !hasReadInstructions
                                        )
                                    }
                                    className="flex items-center space-x-2 text-left group"
                                >
                                    <div
                                        className={`w-5 h-5 rounded border-2 transition-all duration-200 ${
                                            hasReadInstructions
                                                ? "bg-primary border-primary"
                                                : "border-border group-hover:border-primary/50"
                                        }`}
                                    >
                                        {hasReadInstructions && (
                                            <CheckCircle className="w-3 h-3 text-white m-0.5" />
                                        )}
                                    </div>
                                    <span className="text-sm text-foreground">
                                        I have read and understood the identity
                                        development process and research
                                        foundation
                                    </span>
                                </button>
                            </div>

                            <div className="pt-4">
                                <Link href="/identity/values">
                                    <Button
                                        className={`w-full py-3 transition-all duration-200 ${
                                            hasReadInstructions
                                                ? "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                                                : "bg-muted text-muted-foreground cursor-not-allowed"
                                        }`}
                                        disabled={!hasReadInstructions}
                                    >
                                        {hasReadInstructions ? (
                                            <>
                                                Begin Values Discovery
                                                <Sparkles className="ml-2 h-4 w-4" />
                                            </>
                                        ) : (
                                            "Please read the instructions first"
                                        )}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
