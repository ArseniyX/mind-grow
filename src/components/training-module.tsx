"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, CheckCircle, Circle, Play, Pause, RotateCcw, Sparkles } from "lucide-react"

interface TrainingModuleProps {
  moduleId: string
  onBack: () => void
}

const moduleContent = {
  identity: {
    title: "Identity Development",
    description: "Discover and develop your authentic self",
    color: "text-primary",
    bgColor: "bg-primary/10",
    exercises: [
      {
        id: 1,
        title: "Core Values Assessment",
        type: "assessment",
        duration: "10 min",
        description: "Identify your fundamental values that guide your decisions",
        completed: true,
      },
      {
        id: 2,
        title: "Personality Reflection",
        type: "reflection",
        duration: "15 min",
        description: "Explore your personality traits and how they shape your interactions",
        completed: true,
      },
      {
        id: 3,
        title: "Life Vision Exercise",
        type: "visualization",
        duration: "20 min",
        description: "Create a clear vision of your ideal future self",
        completed: false,
      },
      {
        id: 4,
        title: "Strengths Discovery",
        type: "assessment",
        duration: "12 min",
        description: "Uncover your natural talents and abilities",
        completed: false,
      },
    ],
  },
  emotional: {
    title: "Emotional Control",
    description: "Master your emotions and stress responses",
    color: "text-accent",
    bgColor: "bg-accent/10",
    exercises: [
      {
        id: 1,
        title: "Breathing Techniques",
        type: "practice",
        duration: "5 min",
        description: "Learn calming breath patterns for stress relief",
        completed: true,
      },
      {
        id: 2,
        title: "Emotion Mapping",
        type: "reflection",
        duration: "10 min",
        description: "Track and understand your emotional patterns",
        completed: true,
      },
      {
        id: 3,
        title: "Mindfulness Meditation",
        type: "meditation",
        duration: "15 min",
        description: "Practice present-moment awareness",
        completed: false,
      },
    ],
  },
  structure: {
    title: "Life Structure",
    description: "Build sustainable habits and routines",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    exercises: [
      {
        id: 1,
        title: "Morning Routine Design",
        type: "planning",
        duration: "15 min",
        description: "Create an energizing start to your day",
        completed: true,
      },
      {
        id: 2,
        title: "Habit Stacking",
        type: "strategy",
        duration: "10 min",
        description: "Link new habits to existing ones for better consistency",
        completed: false,
      },
    ],
  },
}

export function TrainingModule({ moduleId, onBack }: TrainingModuleProps) {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null)
  const [isSessionActive, setIsSessionActive] = useState(false)
  const [sessionProgress, setSessionProgress] = useState(0)
  const [reflectionText, setReflectionText] = useState("")

  const currentModule = moduleContent[moduleId as keyof typeof moduleContent]

  if (!currentModule) return null

  const completedCount = currentModule.exercises.filter((ex) => ex.completed).length
  const progressPercentage = (completedCount / currentModule.exercises.length) * 100

  const handleStartExercise = (exerciseId: number) => {
    setSelectedExercise(exerciseId)
    setIsSessionActive(true)
    // Simulate progress
    const interval = setInterval(() => {
      setSessionProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsSessionActive(false)
          return 100
        }
        return prev + 2
      })
    }, 100)
  }

  const resetSession = () => {
    setSessionProgress(0)
    setIsSessionActive(false)
    setSelectedExercise(null)
  }

  if (selectedExercise) {
    const exercise = currentModule.exercises.find((ex) => ex.id === selectedExercise)
    if (!exercise) return null

    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-6">
            <Button variant="ghost" onClick={resetSession}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-xl font-semibold text-foreground">{exercise.title}</h1>
              <p className="text-sm text-muted-foreground">
                {exercise.duration} • {exercise.type}
              </p>
            </div>
          </div>

          {/* Exercise Content */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{exercise.title}</span>
                <Badge variant="secondary">{exercise.duration}</Badge>
              </CardTitle>
              <CardDescription>{exercise.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Progress */}
              {isSessionActive && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Session Progress</span>
                    <span className="text-foreground">{Math.round(sessionProgress)}%</span>
                  </div>
                  <Progress value={sessionProgress} className="h-2" />
                </div>
              )}

              {/* Exercise Type Specific Content */}
              {exercise.type === "reflection" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reflection">Your thoughts and insights:</Label>
                    <Textarea
                      id="reflection"
                      placeholder="Take a moment to reflect on the questions and write your thoughts here..."
                      value={reflectionText}
                      onChange={(e) => setReflectionText(e.target.value)}
                      className="min-h-32"
                    />
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Reflection Questions:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• What patterns do you notice in your behavior?</li>
                      <li>• How do these traits serve you in different situations?</li>
                      <li>• What would you like to develop further?</li>
                    </ul>
                  </div>
                </div>
              )}

              {exercise.type === "assessment" && (
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Rate how important each value is to you:</h4>
                  <div className="space-y-4">
                    {["Authenticity", "Growth", "Connection", "Achievement", "Balance"].map((value) => (
                      <div key={value} className="space-y-2">
                        <Label className="text-sm font-medium">{value}</Label>
                        <RadioGroup defaultValue="3" className="flex space-x-4">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <div key={rating} className="flex items-center space-x-2">
                              <RadioGroupItem value={rating.toString()} id={`${value}-${rating}`} />
                              <Label htmlFor={`${value}-${rating}`} className="text-xs">
                                {rating}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {exercise.type === "meditation" && (
                <div className="text-center space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Guided Meditation</h4>
                    <p className="text-sm text-muted-foreground">
                      Find a comfortable position and focus on your breath
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      size="lg"
                      onClick={() => handleStartExercise(exercise.id)}
                      disabled={isSessionActive}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {isSessionActive ? (
                        <>
                          <Pause className="h-5 w-5 mr-2" />
                          In Progress...
                        </>
                      ) : (
                        <>
                          <Play className="h-5 w-5 mr-2" />
                          Start Session
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={resetSession}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSessionActive && sessionProgress < 100}
                >
                  {sessionProgress === 100 ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Complete
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Save Progress
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">{currentModule.title}</h1>
            <p className="text-muted-foreground">{currentModule.description}</p>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="border-border/50 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Module Progress</span>
              <Badge variant="secondary">
                {completedCount} of {currentModule.exercises.length} completed
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Overall Progress</span>
                <span className="text-foreground font-medium">{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Exercises List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Exercises</h2>

          <div className="grid gap-4">
            {currentModule.exercises.map((exercise) => (
              <Card
                key={exercise.id}
                className={`border-border/50 hover:shadow-md transition-all cursor-pointer ${
                  exercise.completed ? "bg-muted/30" : ""
                }`}
                onClick={() => handleStartExercise(exercise.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      {/* Status Icon */}
                      <div className="mt-1">
                        {exercise.completed ? (
                          <CheckCircle className="h-5 w-5 text-primary" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-3">
                          <h3
                            className={`font-semibold ${exercise.completed ? "text-muted-foreground" : "text-foreground"}`}
                          >
                            {exercise.title}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {exercise.duration}
                          </Badge>
                          <Badge variant="secondary" className="text-xs capitalize">
                            {exercise.type}
                          </Badge>
                        </div>
                        <p
                          className={`text-sm text-balance ${exercise.completed ? "text-muted-foreground" : "text-muted-foreground"}`}
                        >
                          {exercise.description}
                        </p>
                      </div>
                    </div>

                    <Button
                      size="sm"
                      variant={exercise.completed ? "outline" : "default"}
                      className={exercise.completed ? "" : "bg-primary hover:bg-primary/90 text-primary-foreground"}
                    >
                      {exercise.completed ? "Review" : "Start"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
