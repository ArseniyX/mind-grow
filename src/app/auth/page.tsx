"use client"

import { AuthFlow } from "@/components/auth-flow"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const router = useRouter()

  const handleAuthComplete = (userData: { name: string; email: string }) => {
    // Store user data in localStorage or a state management solution
    localStorage.setItem("user", JSON.stringify(userData))
    router.push("/onboarding")
  }

  return (
    <main className="min-h-screen bg-background">
      <AuthFlow onAuthComplete={handleAuthComplete} />
    </main>
  )
}