"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Heart, Target, ArrowRight, Sparkles } from "lucide-react";

interface OnboardingFlowProps {
    onComplete: () => void;
}

const onboardingSteps = [
    {
        id: 1,
        icon: Brain,
        title: "Discover Your Identity",
        description:
            "Explore who you are through guided self-reflection exercises and personality insights.",
        color: "text-primary",
        bgColor: "bg-primary/10",
    },
    {
        id: 2,
        icon: Heart,
        title: "Master Emotional Mastery",
        description:
            "Learn practical techniques to manage stress, anxiety, and emotional responses.",
        color: "text-accent",
        bgColor: "bg-accent/10",
    },
    {
        id: 3,
        icon: Target,
        title: "Build Daily Routines",
        description:
            "Create sustainable daily routines and habits that support your personal growth.",
        color: "text-secondary",
        bgColor: "bg-secondary/10",
    },
];

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isCompleting, setIsCompleting] = useState(false);

    const handleNext = () => {
        if (currentStep < onboardingSteps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            handleComplete();
        }
    };

    const handleComplete = async () => {
        setIsCompleting(true);
        // Simulate completion process
        await new Promise((resolve) => setTimeout(resolve, 1500));
        onComplete();
    };

    const progress = ((currentStep + 1) / onboardingSteps.length) * 100;
    const CurrentIcon = onboardingSteps[currentStep].icon;

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-card to-muted">
            <div className="w-full max-w-lg space-y-6">
                {/* Progress Header */}
                <div className="text-center space-y-4">
                    <div className="flex items-center justify-center space-x-2">
                        <Sparkles className="h-6 w-6 text-primary" />
                        <h1 className="text-xl font-semibold text-foreground">
                            Welcome to MindGrow
                        </h1>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>
                                Step {currentStep + 1} of{" "}
                                {onboardingSteps.length}
                            </span>
                            <span>{Math.round(progress)}% complete</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                    </div>
                </div>

                {/* Current Step Card */}
                <Card className="border-border/50 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                        <div className="relative">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

                            <div className="relative p-8 text-center space-y-6">
                                {/* Icon */}
                                <div
                                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${onboardingSteps[currentStep].bgColor}`}
                                >
                                    <CurrentIcon
                                        className={`h-8 w-8 ${onboardingSteps[currentStep].color}`}
                                    />
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <h2 className="text-2xl font-bold text-foreground text-balance">
                                        {onboardingSteps[currentStep].title}
                                    </h2>
                                    <p className="text-muted-foreground text-balance leading-relaxed">
                                        {
                                            onboardingSteps[currentStep]
                                                .description
                                        }
                                    </p>
                                </div>

                                {/* Features Preview */}
                                <div className="grid grid-cols-1 gap-3 mt-6">
                                    {currentStep === 0 && (
                                        <>
                                            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                <span>
                                                    Personality assessments and
                                                    insights
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                <span>
                                                    Values clarification
                                                    exercises
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                <span>
                                                    Goal setting and life vision
                                                </span>
                                            </div>
                                        </>
                                    )}

                                    {currentStep === 1 && (
                                        <>
                                            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                                <div className="w-2 h-2 rounded-full bg-accent" />
                                                <span>
                                                    Mindfulness and meditation
                                                    practices
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                                <div className="w-2 h-2 rounded-full bg-accent" />
                                                <span>
                                                    Stress management techniques
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                                <div className="w-2 h-2 rounded-full bg-accent" />
                                                <span>
                                                    Emotional regulation tools
                                                </span>
                                            </div>
                                        </>
                                    )}

                                    {currentStep === 2 && (
                                        <>
                                            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                                <div className="w-2 h-2 rounded-full bg-secondary" />
                                                <span>
                                                    Daily routine optimization
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                                <div className="w-2 h-2 rounded-full bg-secondary" />
                                                <span>
                                                    Habit tracking and building
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                                <div className="w-2 h-2 rounded-full bg-secondary" />
                                                <span>
                                                    Time management strategies
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Navigation */}
                <div className="flex justify-between items-center">
                    <Button
                        variant="ghost"
                        onClick={() =>
                            setCurrentStep(Math.max(0, currentStep - 1))
                        }
                        disabled={currentStep === 0}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        Previous
                    </Button>

                    {/* <div className="flex space-x-1">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index <= currentStep ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div> */}

                    <Button
                        onClick={handleNext}
                        disabled={isCompleting}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                        {isCompleting ? (
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                <span>Starting...</span>
                            </div>
                        ) : currentStep === onboardingSteps.length - 1 ? (
                            <div className="flex items-center space-x-2">
                                <span>Get Started</span>
                                <Sparkles className="h-4 w-4" />
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <span>Next</span>
                                <ArrowRight className="h-4 w-4" />
                            </div>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
}
