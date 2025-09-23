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
      title: "Emotional Mastery",
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
      title: "Daily Routines",
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
    if (moduleId === 'identity') {
      // Navigate to identity development section
      window.location.href = '/identity';
    } else {
      setActiveModule(moduleId)
    }
  }

  const handleBackToDashboard = () => {
    setActiveModule(null)
  }

  if (activeModule) {
    return <TrainingModule moduleId={activeModule} onBack={handleBackToDashboard} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/5">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-md sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">MindGrow</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="rounded-xl hover:bg-primary/10">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-xl hover:bg-primary/10">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Welcome back, {user.name.split(" ")[0]}!</h2>
          <p className="text-muted-foreground text-lg">Continue your personal growth journey</p>
        </div>

        {/* Today's Progress */}
        <Card className="border-border/30 shadow-lg bg-gradient-to-br from-card via-card to-primary/5">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <span className="text-lg">Today&apos;s Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="p-3 rounded-xl bg-primary/10 inline-block">
                  <div className="text-3xl font-bold text-primary">{todayStats.streak}</div>
                </div>
                <div className="text-sm font-medium text-muted-foreground">Day Streak 🔥</div>
              </div>
              <div className="text-center space-y-2">
                <div className="p-3 rounded-xl bg-accent/10 inline-block">
                  <div className="text-3xl font-bold text-accent">{todayStats.minutesSpent}</div>
                </div>
                <div className="text-sm font-medium text-muted-foreground">Minutes ⏱️</div>
              </div>
              <div className="text-center space-y-2">
                <div className="p-3 rounded-xl bg-secondary/10 inline-block">
                  <div className="text-3xl font-bold text-secondary">{todayStats.exercisesCompleted}</div>
                </div>
                <div className="text-sm font-medium text-muted-foreground">Exercises ✅</div>
              </div>
              <div className="text-center space-y-2">
                <div className="p-3 rounded-xl bg-muted inline-block">
                  <div className="text-3xl font-bold text-foreground">{todayStats.weeklyGoal}%</div>
                </div>
                <div className="text-sm font-medium text-muted-foreground">Weekly Goal 🎯</div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-muted/50 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground font-medium">Weekly Progress</span>
                <span className="font-bold text-primary">{todayStats.weeklyGoal}%</span>
              </div>
              <Progress value={todayStats.weeklyGoal} className="h-3 bg-muted" />
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
                className={`border-border/30 hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-card to-card/50 hover:scale-[1.02] ${
                  selectedModule === module.id ? "ring-2 ring-primary/30 shadow-lg" : ""
                }`}
                onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      {/* Icon */}
                      <div
                        className={`flex items-center justify-center w-14 h-14 rounded-xl ${module.bgColor} ${module.borderColor} border-2 shadow-sm`}
                      >
                        <module.icon className={`h-7 w-7 ${module.color}`} />
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
                            <span className="font-bold text-primary">{module.progress}%</span>
                          </div>
                          <Progress value={module.progress} className="h-2.5 bg-muted" />
                        </div>

                        {/* Next Session */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>Next: {module.nextSession}</span>
                          </div>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-200"
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
        <Card className="border-border/30 shadow-lg bg-gradient-to-br from-card via-card to-secondary/5">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Calendar className="h-4 w-4 text-secondary" />
              </div>
              <span className="text-lg">Quick Actions</span>
            </CardTitle>
            <CardDescription>Start a session or review your progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start h-auto p-5 bg-gradient-to-br from-primary/5 to-transparent border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-200 group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Daily Reflection</div>
                    <div className="text-sm text-muted-foreground">5 min session</div>
                  </div>
                </div>
              </Button>

              <Button variant="outline" className="justify-start h-auto p-5 bg-gradient-to-br from-accent/5 to-transparent border-accent/20 hover:border-accent/40 hover:bg-accent/10 transition-all duration-200 group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Heart className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Breathing Exercise</div>
                    <div className="text-sm text-muted-foreground">3 min session</div>
                  </div>
                </div>
              </Button>

              <Button variant="outline" className="justify-start h-auto p-5 bg-gradient-to-br from-secondary/5 to-transparent border-secondary/20 hover:border-secondary/40 hover:bg-secondary/10 transition-all duration-200 group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Award className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">View Achievements</div>
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
