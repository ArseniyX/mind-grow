"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrainingModule } from "./training-module"
import {
  Brain,
  Heart,
  Target,
  User,
  Settings,
  TrendingUp,
  Calendar,
  Award,
  Sparkles,
  ChevronRight,
  Clock,
} from "lucide-react"

interface DashboardProps {
  user: { name: string; email: string }
}

export function Dashboard({ user }: DashboardProps) {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [activeModule, setActiveModule] = useState<string | null>(null)

  const modules = [
    {
      id: "identity",
      title: "Identity",
      description: "Discover and develop your authentic self",
      icon: Brain,
      progress: 35,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      exercises: 12,
      completed: 4,
      nextSession: "Personality Assessment",
    },
    {
      id: "emotional",
      title: "Emotional Control",
      description: "Master your emotions and stress responses",
      icon: Heart,
      progress: 60,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      exercises: 15,
      completed: 9,
      nextSession: "Mindfulness Practice",
    },
    {
      id: "structure",
      title: "Structure",
      description: "Build sustainable habits and routines",
      icon: Target,
      progress: 20,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
      exercises: 10,
      completed: 2,
      nextSession: "Morning Routine Setup",
    },
  ]

  const todayStats = {
    streak: 7,
    minutesSpent: 45,
    exercisesCompleted: 3,
    weeklyGoal: 80,
  }

  const handleModuleClick = (moduleId: string) => {
    setActiveModule(moduleId)
  }

  const handleBackToDashboard = () => {
    setActiveModule(null)
  }

  if (activeModule) {
    return <TrainingModule moduleId={activeModule} onBack={handleBackToDashboard} />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold text-foreground">MindGrow</h1>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Welcome back, {user.name.split(" ")[0]}!</h2>
          <p className="text-muted-foreground">Continue your personal growth journey</p>
        </div>

        {/* Today's Progress */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Today&apos;s Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center space-y-1">
                <div className="text-2xl font-bold text-primary">{todayStats.streak}</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-2xl font-bold text-accent">{todayStats.minutesSpent}</div>
                <div className="text-sm text-muted-foreground">Minutes</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-2xl font-bold text-secondary">{todayStats.exercisesCompleted}</div>
                <div className="text-sm text-muted-foreground">Exercises</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-2xl font-bold text-foreground">{todayStats.weeklyGoal}%</div>
                <div className="text-sm text-muted-foreground">Weekly Goal</div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Weekly Progress</span>
                <span className="text-foreground">{todayStats.weeklyGoal}%</span>
              </div>
              <Progress value={todayStats.weeklyGoal} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Training Modules */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground">Training Modules</h3>
            <Badge variant="secondary" className="text-xs">
              3 Active
            </Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
            {modules.map((module) => (
              <Card
                key={module.id}
                className={`border-border/50 hover:shadow-md transition-all cursor-pointer ${
                  selectedModule === module.id ? "ring-2 ring-primary/20" : ""
                }`}
                onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      {/* Icon */}
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-lg ${module.bgColor} ${module.borderColor} border`}
                      >
                        <module.icon className={`h-6 w-6 ${module.color}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{module.title}</h4>
                          <p className="text-sm text-muted-foreground text-balance">{module.description}</p>
                        </div>

                        {/* Progress */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              {module.completed} of {module.exercises} exercises completed
                            </span>
                            <span className="text-foreground font-medium">{module.progress}%</span>
                          </div>
                          <Progress value={module.progress} className="h-2" />
                        </div>

                        {/* Next Session */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>Next: {module.nextSession}</span>
                          </div>
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleModuleClick(module.id)
                            }}
                          >
                            Continue
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Quick Actions</span>
            </CardTitle>
            <CardDescription>Start a session or review your progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                <div className="flex items-center space-x-3">
                  <Brain className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="font-medium">Daily Reflection</div>
                    <div className="text-sm text-muted-foreground">5 min session</div>
                  </div>
                </div>
              </Button>

              <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-accent" />
                  <div className="text-left">
                    <div className="font-medium">Breathing Exercise</div>
                    <div className="text-sm text-muted-foreground">3 min session</div>
                  </div>
                </div>
              </Button>

              <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-secondary" />
                  <div className="text-left">
                    <div className="font-medium">View Achievements</div>
                    <div className="text-sm text-muted-foreground">See progress</div>
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
