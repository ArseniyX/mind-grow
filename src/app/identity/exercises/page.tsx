"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
    ArrowLeft,
    Brain,
    Sun,
    Moon,
    CheckCircle2,
    Sparkles,
    MessageCircle,
    BookOpen,
    Target,
    Calendar,
    ArrowRight
} from "lucide-react";

interface SelectedValue {
    id: string;
    name: string;
    description: string;
}

// Predefined affirmations for each value
const valueAffirmations: Record<string, string[]> = {
    authenticity: [
        "I choose to be genuine and true to myself in this moment",
        "My authentic self guides my decisions and actions",
        "I honor my true feelings and express them honestly"
    ],
    growth: [
        "I embrace this opportunity to learn and expand my capabilities",
        "Every challenge helps me grow stronger and wiser",
        "I am committed to continuous improvement and development"
    ],
    integrity: [
        "I act with honesty and moral courage in all situations",
        "My actions align perfectly with my deepest values",
        "I choose to do what is right, even when it's difficult"
    ],
    compassion: [
        "I approach others with kindness and understanding",
        "My heart is open to the suffering and joy of others",
        "I choose love and empathy in my interactions"
    ],
    wisdom: [
        "I seek to understand before being understood",
        "I make thoughtful decisions based on experience and insight",
        "I trust my inner wisdom to guide me"
    ],
    purpose: [
        "My actions today contribute to my greater purpose",
        "I am aligned with my life's meaningful direction",
        "Every moment is an opportunity to live purposefully"
    ],
    creativity: [
        "I express my unique perspective and innovative ideas",
        "My creativity flows freely and brings value to the world",
        "I embrace original thinking and new possibilities"
    ],
    resilience: [
        "I bounce back stronger from every challenge I face",
        "I adapt gracefully to change and uncertainty",
        "My inner strength carries me through difficult times"
    ],
    excellence: [
        "I strive for quality and continuous improvement in everything I do",
        "My commitment to excellence inspires others",
        "I give my best effort in this moment"
    ],
    curiosity: [
        "I approach life with wonder and openness to learning",
        "Questions lead me to deeper understanding and growth",
        "I explore new possibilities with enthusiasm"
    ],
    connection: [
        "I build meaningful relationships through genuine care",
        "I create bonds that nurture and support others",
        "My presence brings people closer together"
    ],
    joy: [
        "I choose to find delight and happiness in this moment",
        "My positive energy uplifts myself and others",
        "I celebrate life's beauty and abundance"
    ]
};

const reflectionPrompts: Record<string, string[]> = {
    authenticity: [
        "How did I stay true to myself today?",
        "When did I feel most authentic in my interactions?",
        "What moments challenged my authenticity, and how did I respond?"
    ],
    growth: [
        "What new things did I learn or discover today?",
        "How did I challenge myself to grow?",
        "What feedback or experiences helped me develop?"
    ],
    integrity: [
        "How well did my actions align with my moral principles today?",
        "When did I demonstrate honesty and ethical behavior?",
        "What situations tested my integrity, and how did I handle them?"
    ],
    compassion: [
        "How did I show kindness and empathy to others today?",
        "When did I put someone else's needs before my own?",
        "How did I respond to others' suffering or difficulties?"
    ],
    wisdom: [
        "What thoughtful decisions did I make today?",
        "How did I use my experience and knowledge to help others?",
        "What new insights or understanding did I gain?"
    ],
    purpose: [
        "How did my actions today align with my life's purpose?",
        "What meaningful contributions did I make?",
        "When did I feel most connected to my sense of purpose?"
    ],
    creativity: [
        "How did I express my creativity and originality today?",
        "What new ideas or approaches did I explore?",
        "When did I think outside the box or try something innovative?"
    ],
    resilience: [
        "How did I handle challenges and setbacks today?",
        "What strengths did I draw upon during difficult moments?",
        "How did I adapt to unexpected changes or obstacles?"
    ],
    excellence: [
        "Where did I strive for quality and high standards today?",
        "How did I go above and beyond in my efforts?",
        "What did I do to improve or refine my work?"
    ],
    curiosity: [
        "What questions did I ask that led to deeper understanding?",
        "How did I explore new ideas or perspectives today?",
        "When did my curiosity lead me to unexpected discoveries?"
    ],
    connection: [
        "How did I strengthen my relationships today?",
        "When did I feel most connected to others?",
        "What did I do to build community or belonging?"
    ],
    joy: [
        "What moments brought me genuine happiness today?",
        "How did I spread positivity to others?",
        "When did I choose to focus on the good in my life?"
    ]
};

export default function IdentityExercisesPage() {
    const [selectedValues, setSelectedValues] = useState<SelectedValue[]>([]);
    const [currentValueIndex, setCurrentValueIndex] = useState(0);
    const [affirmationText, setAffirmationText] = useState("");
    const [reflectionText, setReflectionText] = useState("");
    const [completedAffirmations, setCompletedAffirmations] = useState<string[]>([]);
    const [completedReflections, setCompletedReflections] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState("affirmations");

    useEffect(() => {
        // Load selected values from localStorage
        const stored = localStorage.getItem('selectedValues');
        if (stored) {
            const valueIds = JSON.parse(stored);
            // This would normally come from a values database/API
            const valuesData = valueIds.map((id: string) => ({
                id,
                name: id.charAt(0).toUpperCase() + id.slice(1),
                description: `Living with ${id} as a core value`
            }));
            setSelectedValues(valuesData);

            // Load today's completed exercises
            const today = new Date().toDateString();
            const storedAffirmations = localStorage.getItem(`affirmations_${today}`);
            const storedReflections = localStorage.getItem(`reflections_${today}`);

            if (storedAffirmations) {
                setCompletedAffirmations(JSON.parse(storedAffirmations));
            }
            if (storedReflections) {
                setCompletedReflections(JSON.parse(storedReflections));
            }
        }
    }, []);

    const currentValue = selectedValues[currentValueIndex];
    const currentAffirmations = currentValue ? valueAffirmations[currentValue.id] || [] : [];
    const currentPrompts = currentValue ? reflectionPrompts[currentValue.id] || [] : [];

    const saveAffirmation = () => {
        if (!currentValue || !affirmationText.trim()) return;

        const today = new Date().toDateString();
        const newCompleted = [...completedAffirmations, currentValue.id];
        setCompletedAffirmations(newCompleted);
        localStorage.setItem(`affirmations_${today}`, JSON.stringify(newCompleted));
        localStorage.setItem(`affirmation_${currentValue.id}_${today}`, affirmationText);

        setAffirmationText("");
        if (currentValueIndex < selectedValues.length - 1) {
            setCurrentValueIndex(currentValueIndex + 1);
        }
    };

    const saveReflection = () => {
        if (!currentValue || !reflectionText.trim()) return;

        const today = new Date().toDateString();
        const newCompleted = [...completedReflections, currentValue.id];
        setCompletedReflections(newCompleted);
        localStorage.setItem(`reflections_${today}`, JSON.stringify(newCompleted));
        localStorage.setItem(`reflection_${currentValue.id}_${today}`, reflectionText);

        setReflectionText("");
        if (currentValueIndex < selectedValues.length - 1) {
            setCurrentValueIndex(currentValueIndex + 1);
        }
    };

    if (selectedValues.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/10 flex items-center justify-center">
                <Card className="max-w-md mx-auto">
                    <CardHeader>
                        <CardTitle>No Values Selected</CardTitle>
                        <CardDescription>
                            Please select your core values first to access exercises.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="/identity/values">
                            <Button className="w-full">
                                Select Your Values
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/10">
            {/* Header */}
            <header className="border-b border-border/30 bg-card/80 backdrop-blur-md sticky top-0 z-10 shadow-sm">
                <div className="max-w-5xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/identity/values" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Values</span>
                        </Link>
                        <div className="flex items-center space-x-2">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                                <Brain className="h-5 w-5 text-primary" />
                            </div>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Identity Exercises
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
                {/* Progress Overview */}
                <Card className="border-border/30 shadow-lg bg-gradient-to-br from-card via-card to-primary/5">
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            <span>Today's Progress</span>
                        </CardTitle>
                        <CardDescription>
                            Complete affirmations before important actions and reflections at day's end
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-4 rounded-xl bg-gradient-to-r from-accent/10 to-transparent">
                                <div className="flex items-center justify-center space-x-2 mb-2">
                                    <Sun className="h-5 w-5 text-accent" />
                                    <span className="font-semibold">Morning Affirmations</span>
                                </div>
                                <div className="text-2xl font-bold text-accent">
                                    {completedAffirmations.length}/{selectedValues.length}
                                </div>
                                <div className="text-sm text-muted-foreground">Values affirmed</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-gradient-to-r from-secondary/10 to-transparent">
                                <div className="flex items-center justify-center space-x-2 mb-2">
                                    <Moon className="h-5 w-5 text-secondary" />
                                    <span className="font-semibold">Evening Reflections</span>
                                </div>
                                <div className="text-2xl font-bold text-secondary">
                                    {completedReflections.length}/{selectedValues.length}
                                </div>
                                <div className="text-sm text-muted-foreground">Values reflected</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Exercise Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList className="grid w-full grid-cols-2 bg-muted/50">
                        <TabsTrigger value="affirmations" className="flex items-center space-x-2">
                            <Sun className="h-4 w-4" />
                            <span>Affirmations</span>
                        </TabsTrigger>
                        <TabsTrigger value="reflections" className="flex items-center space-x-2">
                            <Moon className="h-4 w-4" />
                            <span>Reflections</span>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="affirmations" className="space-y-6">
                        <Card className="border-border/30 shadow-lg bg-gradient-to-br from-card via-card to-accent/5">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Sun className="h-5 w-5 text-accent" />
                                    <span>Morning Affirmations</span>
                                </CardTitle>
                                <CardDescription>
                                    Before taking important actions, affirm your commitment to living by your values
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Value Selector */}
                                <div className="flex flex-wrap gap-2">
                                    {selectedValues.map((value, index) => (
                                        <button
                                            key={value.id}
                                            onClick={() => setCurrentValueIndex(index)}
                                            className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                                index === currentValueIndex
                                                    ? 'bg-primary text-primary-foreground shadow-lg'
                                                    : completedAffirmations.includes(value.id)
                                                    ? 'bg-accent/20 text-accent border border-accent/30'
                                                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                            }`}
                                        >
                                            {completedAffirmations.includes(value.id) && (
                                                <CheckCircle2 className="h-3 w-3 inline mr-1" />
                                            )}
                                            {value.name}
                                        </button>
                                    ))}
                                </div>

                                {currentValue && !completedAffirmations.includes(currentValue.id) && (
                                    <div className="space-y-4">
                                        <div className="p-4 rounded-xl bg-gradient-to-r from-muted/30 to-accent/5">
                                            <h3 className="font-semibold text-foreground mb-2">
                                                Affirming: {currentValue.name}
                                            </h3>
                                            <div className="space-y-3">
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    Choose one of these affirmations or create your own:
                                                </p>
                                                {currentAffirmations.map((affirmation, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setAffirmationText(affirmation)}
                                                        className="block w-full text-left p-3 rounded-lg bg-card hover:bg-muted/50 transition-colors border border-border/30 text-sm"
                                                    >
                                                        "{affirmation}"
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-sm font-medium text-foreground">
                                                Your affirmation for {currentValue.name}:
                                            </label>
                                            <Textarea
                                                value={affirmationText}
                                                onChange={(e) => setAffirmationText(e.target.value)}
                                                placeholder="Write your personal affirmation for this value..."
                                                className="min-h-[100px] bg-muted/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                                            />
                                            <Button
                                                onClick={saveAffirmation}
                                                disabled={!affirmationText.trim()}
                                                className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70"
                                            >
                                                <MessageCircle className="mr-2 h-4 w-4" />
                                                Save Affirmation
                                            </Button>
                                        </div>
                                    </div>
                                )}

                                {currentValue && completedAffirmations.includes(currentValue.id) && (
                                    <div className="text-center p-6 rounded-xl bg-gradient-to-r from-accent/10 to-transparent border border-accent/20">
                                        <CheckCircle2 className="h-8 w-8 text-accent mx-auto mb-2" />
                                        <p className="text-accent font-medium">
                                            You've completed your affirmation for {currentValue.name} today!
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="reflections" className="space-y-6">
                        <Card className="border-border/30 shadow-lg bg-gradient-to-br from-card via-card to-secondary/5">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Moon className="h-5 w-5 text-secondary" />
                                    <span>Evening Reflections</span>
                                </CardTitle>
                                <CardDescription>
                                    Reflect on how well your day aligned with your chosen values
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Value Selector */}
                                <div className="flex flex-wrap gap-2">
                                    {selectedValues.map((value, index) => (
                                        <button
                                            key={value.id}
                                            onClick={() => setCurrentValueIndex(index)}
                                            className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                                index === currentValueIndex
                                                    ? 'bg-primary text-primary-foreground shadow-lg'
                                                    : completedReflections.includes(value.id)
                                                    ? 'bg-secondary/20 text-secondary border border-secondary/30'
                                                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                            }`}
                                        >
                                            {completedReflections.includes(value.id) && (
                                                <CheckCircle2 className="h-3 w-3 inline mr-1" />
                                            )}
                                            {value.name}
                                        </button>
                                    ))}
                                </div>

                                {currentValue && !completedReflections.includes(currentValue.id) && (
                                    <div className="space-y-4">
                                        <div className="p-4 rounded-xl bg-gradient-to-r from-muted/30 to-secondary/5">
                                            <h3 className="font-semibold text-foreground mb-2">
                                                Reflecting on: {currentValue.name}
                                            </h3>
                                            <div className="space-y-2">
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    Consider these reflection prompts:
                                                </p>
                                                {currentPrompts.map((prompt, index) => (
                                                    <div key={index} className="flex items-start space-x-2 text-sm">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                                        <span className="text-muted-foreground">{prompt}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-sm font-medium text-foreground">
                                                Your reflection on {currentValue.name}:
                                            </label>
                                            <Textarea
                                                value={reflectionText}
                                                onChange={(e) => setReflectionText(e.target.value)}
                                                placeholder="Reflect on how you lived this value today..."
                                                className="min-h-[120px] bg-muted/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                                            />
                                            <Button
                                                onClick={saveReflection}
                                                disabled={!reflectionText.trim()}
                                                className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70"
                                            >
                                                <BookOpen className="mr-2 h-4 w-4" />
                                                Save Reflection
                                            </Button>
                                        </div>
                                    </div>
                                )}

                                {currentValue && completedReflections.includes(currentValue.id) && (
                                    <div className="text-center p-6 rounded-xl bg-gradient-to-r from-secondary/10 to-transparent border border-secondary/20">
                                        <CheckCircle2 className="h-8 w-8 text-secondary mx-auto mb-2" />
                                        <p className="text-secondary font-medium">
                                            You've completed your reflection for {currentValue.name} today!
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                {/* Completion Status */}
                {completedAffirmations.length === selectedValues.length && completedReflections.length === selectedValues.length && (
                    <Card className="border-border/30 shadow-lg bg-gradient-to-br from-card via-card to-primary/10 text-center">
                        <CardContent className="p-8">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                                Excellent Work! 🎉
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                You've completed all your identity exercises for today.
                                Your commitment to living by your values is building a stronger, more authentic you.
                            </p>
                            <Link href="/dashboard">
                                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                                    Return to Dashboard
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}