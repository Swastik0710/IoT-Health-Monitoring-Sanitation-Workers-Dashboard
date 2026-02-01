import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Activity,
  HeartPulse,
  Thermometer,
  Wind,
  AlertTriangle,
  Cpu,
  Radio,
  Shield,
  ArrowRight,
  Wifi,
} from "lucide-react"

const features = [
  {
    icon: HeartPulse,
    title: "Heart Rate Monitoring",
    description: "Continuous monitoring of worker's heart rate using HW-61 sensor to detect cardiac abnormalities.",
  },
  {
    icon: Thermometer,
    title: "Body Temperature",
    description: "Real-time body temperature measurement using LM35 sensor for fever or heat stroke detection.",
  },
  {
    icon: Wind,
    title: "Gas Detection",
    description: "MQ-135 sensor detects hazardous gases like ammonia, hydrogen sulfide, and methane in PPM.",
  },
  {
    icon: AlertTriangle,
    title: "Fall Detection",
    description: "MPU-6050 accelerometer and gyroscope detect sudden falls or accidents immediately.",
  },
]

const hardware = [
  { name: "ESP32", description: "Main Microcontroller" },
  { name: "MQ-135", description: "Gas Sensor" },
  { name: "MPU-6050", description: "Accelerometer/Gyroscope" },
  { name: "HW-61", description: "Heart Rate Sensor" },
  { name: "LM35", description: "Temperature Sensor" },
  { name: "SIM800L", description: "GSM Module" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          <div className="container relative mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm">
                <Cpu className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Final Year Engineering Project</span>
              </div>
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
                IoT Based Health Monitoring System for Sanitation Workers
              </h1>
              <p className="mb-8 text-lg text-muted-foreground text-balance">
                Using ESP32 microcontroller and GSM communication for real-time health monitoring, 
                hazard detection, and emergency alerts to protect sanitation workers in hazardous environments.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/dashboard">
                    <Activity className="mr-2 h-5 w-5" />
                    Live Monitoring
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  <Link href="/project">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="border-b border-border bg-secondary/30">
          <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sanitation workers face severe health risks due to exposure to toxic gases (ammonia, hydrogen sulfide, methane), 
                extreme heat, and physical hazards in sewers and confined spaces. Traditional monitoring methods are manual, 
                delayed, and often fail to prevent fatalities. There is an urgent need for a real-time, automated monitoring 
                system that can detect dangers and alert supervisors instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground">System Features</h2>
              <p className="text-muted-foreground">
                Comprehensive monitoring capabilities for worker safety
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title} className="bg-card border-border">
                    <CardHeader>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg text-card-foreground">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* System Diagram Placeholder */}
        <section className="border-b border-border bg-secondary/30">
          <div className="container mx-auto px-4 py-16">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground">System Architecture</h2>
              <p className="text-muted-foreground">
                Block diagram showing data flow from sensors to cloud dashboard
              </p>
            </div>
            <Card className="mx-auto max-w-4xl bg-card border-border overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  {/* Sensors */}
                  <div className="flex flex-col gap-3">
                    <div className="text-sm font-medium text-muted-foreground mb-2 text-center">Sensors</div>
                    <div className="grid grid-cols-2 gap-2">
                      {["MQ-135", "MPU-6050", "HW-61", "LM35"].map((sensor) => (
                        <div key={sensor} className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-success" />
                          <span className="text-foreground">{sensor}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center">
                    <ArrowRight className="h-8 w-8 text-muted-foreground rotate-90 md:rotate-0" />
                  </div>

                  {/* ESP32 */}
                  <div className="text-center">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Controller</div>
                    <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <div className="text-center">
                        <Cpu className="h-8 w-8 mx-auto mb-1" />
                        <span className="text-xs font-medium">ESP32</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center">
                    <ArrowRight className="h-8 w-8 text-muted-foreground rotate-90 md:rotate-0" />
                  </div>

                  {/* Communication */}
                  <div className="text-center">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Communication</div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2">
                        <Radio className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">SIM800L GSM</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2">
                        <Wifi className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">WiFi Module</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center">
                    <ArrowRight className="h-8 w-8 text-muted-foreground rotate-90 md:rotate-0" />
                  </div>

                  {/* Output */}
                  <div className="text-center">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Output</div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 rounded-lg bg-destructive/10 border border-destructive/30 px-3 py-2">
                        <Shield className="h-4 w-4 text-destructive" />
                        <span className="text-sm text-foreground">SMS Alert</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/30 px-3 py-2">
                        <Activity className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">Dashboard</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hardware Components */}
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Hardware Components</h2>
              <p className="text-muted-foreground">
                Key components used in this IoT system
              </p>
            </div>
            <div className="mx-auto max-w-3xl grid grid-cols-2 md:grid-cols-3 gap-4">
              {hardware.map((item) => (
                <Card key={item.name} className="bg-card border-border">
                  <CardContent className="p-4 text-center">
                    <div className="mb-2 text-lg font-semibold text-primary">{item.name}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5">
          <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Ready to Monitor Worker Safety?
              </h2>
              <p className="mb-8 text-muted-foreground">
                Access the live dashboard to view real-time health data and alerts from the IoT monitoring system.
              </p>
              <Button asChild size="lg">
                <Link href="/dashboard">
                  <Activity className="mr-2 h-5 w-5" />
                  Open Live Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <HeartPulse className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">IoT Health Monitoring System</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Final Year Engineering Project - B.Tech/B.E.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
