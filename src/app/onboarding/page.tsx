"use client"

import { OnboardingFlow } from "@/components/onboarding-flow"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function OnboardingPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth")
      return
    }
    setIsLoading(false)
  }, [router])

  const handleOnboardingComplete = () => {
    router.push("/dashboard")
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div>Loading...</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <OnboardingFlow onComplete={handleOnboardingComplete} />
    </main>
  )
}