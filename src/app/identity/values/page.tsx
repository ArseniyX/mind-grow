"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Heart,
    Brain,
    Shield,
    Target,
    Users,
    Sparkles,
    TreePine,
    Lightbulb,
    Zap,
    Award,
    BookOpen,
    Globe,
    Smile,
    Star,
} from "lucide-react";

// Research-based core values from Schwartz Theory and psychological research
const coreValues = [
    {
        id: "authenticity",
        name: "Authenticity",
        icon: Heart,
        description:
            "Being true to yourself and living according to your genuine beliefs and values",
        category: "Self-Direction",
        color: "text-red-500",
        bgColor: "bg-red-50 dark:bg-red-950/20",
        borderColor: "border-red-200 dark:border-red-800",
    },
    {
        id: "growth",
        name: "Growth",
        icon: TreePine,
        description:
            "Continuously learning, improving, and expanding your capabilities and understanding",
        category: "Self-Enhancement",
        color: "text-green-500",
        bgColor: "bg-green-50 dark:bg-green-950/20",
        borderColor: "border-green-200 dark:border-green-800",
    },
    {
        id: "integrity",
        name: "Integrity",
        icon: Shield,
        description:
            "Acting with honesty, moral principles, and consistency between values and actions",
        category: "Conformity",
        color: "text-blue-500",
        bgColor: "bg-blue-50 dark:bg-blue-950/20",
        borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
        id: "compassion",
        name: "Compassion",
        icon: Users,
        description:
            "Showing kindness, empathy, and care for the wellbeing of others",
        category: "Benevolence",
        color: "text-pink-500",
        bgColor: "bg-pink-50 dark:bg-pink-950/20",
        borderColor: "border-pink-200 dark:border-pink-800",
    },
    {
        id: "wisdom",
        name: "Wisdom",
        icon: Lightbulb,
        description:
            "Seeking deep understanding, making thoughtful decisions, and learning from experience",
        category: "Self-Direction",
        color: "text-yellow-500",
        bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
        borderColor: "border-yellow-200 dark:border-yellow-800",
    },
    {
        id: "purpose",
        name: "Purpose",
        icon: Target,
        description:
            "Living with clear direction and meaning, contributing to something greater than yourself",
        category: "Achievement",
        color: "text-purple-500",
        bgColor: "bg-purple-50 dark:bg-purple-950/20",
        borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
        id: "creativity",
        name: "Creativity",
        icon: Sparkles,
        description:
            "Expressing originality, innovation, and bringing new ideas into the world",
        category: "Self-Direction",
        color: "text-orange-500",
        bgColor: "bg-orange-50 dark:bg-orange-950/20",
        borderColor: "border-orange-200 dark:border-orange-800",
    },
    {
        id: "resilience",
        name: "Resilience",
        icon: Zap,
        description:
            "Bouncing back from challenges, adapting to change, and persevering through difficulties",
        category: "Security",
        color: "text-indigo-500",
        bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
        borderColor: "border-indigo-200 dark:border-indigo-800",
    },
    {
        id: "excellence",
        name: "Excellence",
        icon: Award,
        description:
            "Striving for high quality and continuous improvement in all your endeavors",
        category: "Achievement",
        color: "text-emerald-500",
        bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
        borderColor: "border-emerald-200 dark:border-emerald-800",
    },
    {
        id: "curiosity",
        name: "Curiosity",
        icon: BookOpen,
        description:
            "Maintaining wonder, asking questions, and exploring new possibilities",
        category: "Stimulation",
        color: "text-cyan-500",
        bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
        borderColor: "border-cyan-200 dark:border-cyan-800",
    },
    {
        id: "connection",
        name: "Connection",
        icon: Globe,
        description:
            "Building meaningful relationships and fostering a sense of belonging",
        category: "Benevolence",
        color: "text-teal-500",
        bgColor: "bg-teal-50 dark:bg-teal-950/20",
        borderColor: "border-teal-200 dark:border-teal-800",
    },
    {
        id: "joy",
        name: "Joy",
        icon: Smile,
        description:
            "Embracing happiness, finding delight in life, and spreading positivity",
        category: "Hedonism",
        color: "text-rose-500",
        bgColor: "bg-rose-50 dark:bg-rose-950/20",
        borderColor: "border-rose-200 dark:border-rose-800",
    },
];

export default function ValuesSelectionPage() {
    const router = useRouter();
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [currentStep, setCurrentStep] = useState<
        "selection" | "confirmation"
    >("selection");

    const handleValueToggle = (valueId: string) => {
        setSelectedValues((prev) => {
            if (prev.includes(valueId)) {
                return prev.filter((id) => id !== valueId);
            } else if (prev.length < 5) {
                return [...prev, valueId];
            }
            return prev;
        });
    };

    const handleContinue = () => {
        if (selectedValues.length >= 3) {
            setCurrentStep("confirmation");
        }
    };

    const handleConfirm = () => {
        // Store selected values in localStorage
        localStorage.setItem("selectedValues", JSON.stringify(selectedValues));
        router.push("/identity/exercises");
    };

    const progress = currentStep === "selection" ? 50 : 100;
    const selectedValuesData = coreValues.filter((value) =>
        selectedValues.includes(value.id)
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/10">
            {/* Header */}
            <header className="border-b border-border/30 bg-card/80 backdrop-blur-md sticky top-0 z-10 shadow-sm">
                <div className="max-w-5xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/identity"
                            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Identity</span>
                        </Link>
                        <div className="flex items-center space-x-2">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                                <Brain className="h-5 w-5 text-primary" />
                            </div>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Values Discovery
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
                {/* Progress Section */}
                <div className="text-center space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                            <span className="text-muted-foreground">
                                Values Discovery
                            </span>
                            <span className="text-primary font-bold">
                                {progress}% complete
                            </span>
                        </div>
                        <div className="relative">
                            <Progress
                                value={progress}
                                className="h-3 bg-muted/50"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full pointer-events-none" />
                        </div>
                    </div>
                </div>

                {currentStep === "selection" && (
                    <>
                        {/* Instructions */}
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold text-foreground">
                                Choose Your Core Values
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Select 3-5 values that resonate most deeply with
                                who you want to be. These will become the
                                foundation of your identity development
                                practice.
                            </p>
                            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                                <span>Selected: {selectedValues.length}</span>
                                <span>•</span>
                                <span>Minimum: 3</span>
                                <span>•</span>
                                <span>Maximum: 5</span>
                            </div>
                        </div>

                        {/* Values Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {coreValues.map((value) => {
                                const isSelected = selectedValues.includes(
                                    value.id
                                );
                                const Icon = value.icon;

                                return (
                                    <Card
                                        key={value.id}
                                        className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                                            isSelected
                                                ? `${value.borderColor} border-2 shadow-lg bg-gradient-to-br from-card to-primary/5`
                                                : "border-border/50 hover:border-primary/30 hover:shadow-md"
                                        }`}
                                        onClick={() =>
                                            handleValueToggle(value.id)
                                        }
                                    >
                                        <CardContent className="p-4 text-center space-y-3">
                                            <div className="relative">
                                                <div
                                                    className={`w-12 h-12 rounded-xl ${value.bgColor} flex items-center justify-center mx-auto`}
                                                >
                                                    <Icon
                                                        className={`h-6 w-6 ${value.color}`}
                                                    />
                                                </div>
                                                {isSelected && (
                                                    <div className="absolute -top-1 -right-1">
                                                        <CheckCircle2 className="h-5 w-5 text-primary bg-background rounded-full" />
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground">
                                                    {value.name}
                                                </h3>
                                                <Badge
                                                    variant="secondary"
                                                    className="text-xs mt-1"
                                                >
                                                    {value.category}
                                                </Badge>
                                            </div>
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                {value.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>

                        {/* Continue Button */}
                        <div className="flex justify-center pt-6">
                            <Button
                                onClick={handleContinue}
                                disabled={selectedValues.length < 3}
                                className={`px-8 py-3 transition-all duration-200 ${
                                    selectedValues.length >= 3
                                        ? "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transform hover:scale-105"
                                        : "bg-muted text-muted-foreground cursor-not-allowed"
                                }`}
                            >
                                {selectedValues.length >= 3 ? (
                                    <>
                                        Review Your Values
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                ) : (
                                    `Select ${
                                        3 - selectedValues.length
                                    } more value${
                                        3 - selectedValues.length === 1
                                            ? ""
                                            : "s"
                                    }`
                                )}
                            </Button>
                        </div>
                    </>
                )}

                {currentStep === "confirmation" && (
                    <>
                        {/* Confirmation */}
                        <div className="text-center space-y-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
                                <Star className="h-8 w-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground">
                                Your Core Values
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                These values will guide your affirmations and
                                daily reflections. You can always adjust them
                                later as you grow.
                            </p>
                        </div>

                        {/* Selected Values Display */}
                        <div className="grid gap-4 max-w-2xl mx-auto">
                            {selectedValuesData.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <Card
                                        key={value.id}
                                        className="border-border/30 shadow-lg bg-gradient-to-r from-card to-primary/5"
                                    >
                                        <CardContent className="p-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                                                        {index + 1}
                                                    </div>
                                                    <div
                                                        className={`w-10 h-10 rounded-lg ${value.bgColor} flex items-center justify-center`}
                                                    >
                                                        <Icon
                                                            className={`h-5 w-5 ${value.color}`}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-foreground">
                                                        {value.name}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        {value.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-center space-x-4 pt-6">
                            <Button
                                variant="outline"
                                onClick={() => setCurrentStep("selection")}
                                className="px-6 py-3"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Modify Selection
                            </Button>
                            <Button
                                onClick={handleConfirm}
                                className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                            >
                                Start Your Practice
                                <Sparkles className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
