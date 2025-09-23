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
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNext = async () => {
        if (currentStep < onboardingSteps.length - 1) {
            setIsTransitioning(true);
            await new Promise((resolve) => setTimeout(resolve, 150));
            setCurrentStep(currentStep + 1);
            setIsTransitioning(false);
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
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-muted/30 to-primary/10">
            <div className="w-full max-w-2xl space-y-8">
                {/* Progress Header */}
                <div className="text-center space-y-6">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg">
                            <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Welcome to MindGrow
                        </h1>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between text-sm font-medium">
                            <span className="text-muted-foreground">
                                Step {currentStep + 1} of{" "}
                                {onboardingSteps.length}
                            </span>
                            <span className="text-primary font-bold">
                                {Math.round(progress)}% complete
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

                {/* Current Step Card */}
                <Card
                    className={`border-border/30 shadow-2xl overflow-hidden bg-gradient-to-br py-0 from-card via-card to-primary/5 transition-all duration-500 ease-out transform ${
                        isTransitioning
                            ? "scale-95 opacity-70"
                            : "scale-100 opacity-100"
                    }`}
                >
                    <CardContent className="p-0">
                        <div className="relative">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full" />

                            <div className="relative p-10 text-center space-y-8">
                                {/* Icon */}
                                <div className="relative inline-block">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl" />
                                    <div
                                        className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl ${onboardingSteps[currentStep].bgColor} border-2 border-primary/20 shadow-lg`}
                                    >
                                        <CurrentIcon
                                            className={`h-10 w-10 ${onboardingSteps[currentStep].color}`}
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-bold text-foreground text-balance leading-tight">
                                        {onboardingSteps[currentStep].title}
                                    </h2>
                                    <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-lg mx-auto">
                                        {
                                            onboardingSteps[currentStep]
                                                .description
                                        }
                                    </p>
                                </div>

                                {/* Features Preview */}
                                <div className="bg-gradient-to-r from-muted/50 to-primary/5 rounded-2xl p-6 space-y-4">
                                    {currentStep === 0 && (
                                        <>
                                            <div className="flex items-center space-x-4 text-sm">
                                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary/60 shadow-sm" />
                                                <span className="text-foreground font-medium">
                                                    Personality assessments and
                                                    insights
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-4 text-sm">
                                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary/60 shadow-sm" />
                                                <span className="text-foreground font-medium">
                                                    Values clarification
                                                    exercises
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-4 text-sm">
                                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary/60 shadow-sm" />
                                                <span className="text-foreground font-medium">
                                                    Goal setting and life vision
                                                </span>
                                            </div>
                                        </>
                                    )}

                                    {currentStep === 1 && (
                                        <>
                                            <div className="flex items-center space-x-4 text-sm">
                                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-accent/60 shadow-sm" />
                                                <span className="text-foreground font-medium">
                                                    Mindfulness and meditation
                                                    practices
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-4 text-sm">
                                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-accent/60 shadow-sm" />
                                                <span className="text-foreground font-medium">
                                                    Stress management techniques
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-4 text-sm">
                                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-accent/60 shadow-sm" />
                                                <span className="text-foreground font-medium">
                                                    Emotional regulation tools
                                                </span>
                                            </div>
                                        </>
                                    )}

                                    {currentStep === 2 && (
                                        <>
                                            <div className="flex items-center space-x-4 text-sm">
                                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-secondary to-secondary/60 shadow-sm" />
                                                <span className="text-foreground font-medium">
                                                    Daily routine optimization
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-4 text-sm">
                                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-secondary to-secondary/60 shadow-sm" />
                                                <span className="text-foreground font-medium">
                                                    Habit tracking and building
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-4 text-sm">
                                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-secondary to-secondary/60 shadow-sm" />
                                                <span className="text-foreground font-medium">
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
                <div className="flex justify-between items-center pt-4">
                    <Button
                        variant="ghost"
                        onClick={() =>
                            setCurrentStep(Math.max(0, currentStep - 1))
                        }
                        disabled={currentStep === 0}
                        className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
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
                        className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        {isCompleting ? (
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                <span>Starting your journey...</span>
                            </div>
                        ) : currentStep === onboardingSteps.length - 1 ? (
                            <div className="flex items-center space-x-2">
                                <span>Begin Your Journey</span>
                                <Sparkles className="h-4 w-4" />
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <span>Continue</span>
                                <ArrowRight className="h-4 w-4" />
                            </div>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
}
