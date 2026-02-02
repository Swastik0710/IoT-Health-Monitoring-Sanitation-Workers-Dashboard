"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Activity,
  HeartPulse,
  Thermometer,
  Wind,
  AlertTriangle,
  Cpu,
  ArrowRight,
  Users,
} from "lucide-react"

/* ===================== DATA ===================== */

const features = [
  {
    icon: HeartPulse,
    title: "Heart Rate Monitoring",
    description:
      "Continuous monitoring of worker's heart rate using HW-61 sensor to detect cardiac abnormalities.",
  },
  {
    icon: Thermometer,
    title: "Body Temperature",
    description:
      "Real-time body temperature measurement using LM35 sensor for fever or heat stroke detection.",
  },
  {
    icon: Wind,
    title: "Gas Detection",
    description:
      "MQ-135 sensor detects hazardous gases like ammonia, hydrogen sulfide, and methane in PPM.",
  },
  {
    icon: AlertTriangle,
    title: "Fall Detection",
    description:
      "MPU-6050 accelerometer and gyroscope detect sudden falls or accidents immediately.",
  },
]

const hardware = [
  { name: "ESP32", description: "Main Microcontroller" },
  { name: "MQ-135", description: "Gas Sensor" },
  { name: "MPU-6050", description: "Accelerometer / Gyroscope" },
  { name: "HW-61", description: "Heart Rate Sensor" },
  { name: "LM35", description: "Temperature Sensor" },
  { name: "SIM800L", description: "GSM Module" },
]

const teamMembers = [
  { name: "Swastik Bhattacharya", roll: "16900323174" },
  { name: "Subham Das", roll: "16900323157" },
  { name: "Sujan Manna", roll: "16900323162" },
  { name: "Suman Bera", roll: "16900323163" },
  { name: "Tanay Jana", roll: "16900323176" },
]

/* ===================== PAGE ===================== */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          <div className="container relative mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm">
                <Cpu className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  Final Year Engineering Project
                </span>
              </div>

              <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
                IoT Based Health Monitoring System for Sanitation Workers
              </h1>

              <p className="mb-8 text-lg text-muted-foreground">
                ESP32 & GSM based real-time health monitoring, hazard detection,
                and emergency alert system for sanitation worker safety.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                  >
                    <Activity className="mr-2 h-5 w-5" />
                    Live Monitoring
                  </Button>
                </Link>

                <Link href="/project">
                  <Button
                    variant="outline"
                    size="lg"
                    className="transition-all duration-300 hover:border-primary hover:text-primary hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold">System Features</h2>
              <p className="text-muted-foreground">
                Key monitoring capabilities for worker safety
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card
                    key={feature.title}
                    className="transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/20"
                  >
                    <CardHeader>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================= HARDWARE ================= */}
        <section className="border-b border-border bg-secondary/30">
          <div className="container mx-auto px-4 py-16">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold">Hardware Components</h2>
              <p className="text-muted-foreground">
                Core devices used in the system
              </p>
            </div>

            <div className="mx-auto max-w-3xl grid grid-cols-2 md:grid-cols-3 gap-4">
              {hardware.map((item) => (
                <Card
                  key={item.name}
                  className="transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-lg font-semibold text-primary">
                      {item.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TEAM MEMBERS ================= */}
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Project Team
              </h2>
              <p className="text-muted-foreground">
                Contributors of this Final Year Project
              </p>
            </div>

            <div className="mx-auto max-w-3xl grid gap-6 sm:grid-cols-2">
              {teamMembers.map((member, index) => (
                <Card
                  key={member.name}
                  className={`
                    h-32
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:border-primary
                    hover:shadow-xl
                    hover:shadow-primary/30
                    ${
                      index === teamMembers.length - 1
                        ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)]"
                        : ""
                    }
                  `}
                >
                  <CardContent className="flex h-full flex-col items-center justify-center text-center">
                    <span className="text-lg font-semibold">
                      {member.name}
                    </span>
                    <span className="text-sm text-muted-foreground mt-1">
                      Roll No: {member.roll}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* ================= CTA ================= */}
        <section className="bg-primary/5">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Ready to Monitor Worker Safety?
            </h2>
            <p className="mb-8 text-muted-foreground">
              View real-time health data and alerts from the live dashboard.
            </p>

            <Link href="/dashboard">
              <Button
                size="lg"
                className="transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/30"
              >
                <Activity className="mr-2 h-5 w-5" />
                Open Live Dashboard
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <HeartPulse className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium">
              IoT Health Monitoring System
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center md:text-right">
  Final Year Engineering Project – ECE<br />
  <span className="text-xs">
    Subject Code: <span className="text-primary font-medium">EC782</span>
  </span>
</p>

        </div>
      </footer>
    </div>
  )
}