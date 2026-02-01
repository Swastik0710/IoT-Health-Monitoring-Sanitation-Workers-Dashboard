"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  User,
  Search,
  HeartPulse,
  Thermometer,
  Wind,
  AlertTriangle,
  MapPin,
  Clock,
  Shield,
  Phone,
  Users,
} from "lucide-react"

interface Worker {
  id: string
  name: string
  shift: string
  zone: string
  healthStatus: "Normal" | "Warning" | "Critical"
  heartRate: number
  temperature: number
  gasLevel: number
  fallDetected: boolean
  lastUpdate: string
  phone: string
  supervisorPhone: string
}

const workersData: Worker[] = [
  {
    id: "SW-001",
    name: "Rajesh Kumar",
    shift: "Morning (6:00 AM - 2:00 PM)",
    zone: "Zone A - Main Road",
    healthStatus: "Normal",
    heartRate: 78,
    temperature: 36.8,
    gasLevel: 45,
    fallDetected: false,
    lastUpdate: "2 min ago",
    phone: "+91 98765 43210",
    supervisorPhone: "+91 98765 00001",
  },
  {
    id: "SW-002",
    name: "Amit Singh",
    shift: "Morning (6:00 AM - 2:00 PM)",
    zone: "Zone B - Industrial Area",
    healthStatus: "Warning",
    heartRate: 105,
    temperature: 37.4,
    gasLevel: 120,
    fallDetected: false,
    lastUpdate: "1 min ago",
    phone: "+91 98765 43211",
    supervisorPhone: "+91 98765 00001",
  },
  {
    id: "SW-003",
    name: "Suresh Patel",
    shift: "Morning (6:00 AM - 2:00 PM)",
    zone: "Zone C - Residential",
    healthStatus: "Critical",
    heartRate: 55,
    temperature: 38.5,
    gasLevel: 85,
    fallDetected: true,
    lastUpdate: "30 sec ago",
    phone: "+91 98765 43212",
    supervisorPhone: "+91 98765 00002",
  },
  {
    id: "SW-004",
    name: "Vikram Yadav",
    shift: "Afternoon (2:00 PM - 10:00 PM)",
    zone: "Zone A - Main Road",
    healthStatus: "Normal",
    heartRate: 82,
    temperature: 36.6,
    gasLevel: 55,
    fallDetected: false,
    lastUpdate: "5 min ago",
    phone: "+91 98765 43213",
    supervisorPhone: "+91 98765 00002",
  },
  {
    id: "SW-005",
    name: "Ravi Sharma",
    shift: "Afternoon (2:00 PM - 10:00 PM)",
    zone: "Zone D - Market Area",
    healthStatus: "Normal",
    heartRate: 75,
    temperature: 36.5,
    gasLevel: 38,
    fallDetected: false,
    lastUpdate: "3 min ago",
    phone: "+91 98765 43214",
    supervisorPhone: "+91 98765 00002",
  },
  {
    id: "SW-006",
    name: "Mohan Das",
    shift: "Night (10:00 PM - 6:00 AM)",
    zone: "Zone B - Industrial Area",
    healthStatus: "Warning",
    heartRate: 95,
    temperature: 37.2,
    gasLevel: 110,
    fallDetected: false,
    lastUpdate: "4 min ago",
    phone: "+91 98765 43215",
    supervisorPhone: "+91 98765 00003",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Normal":
      return "bg-green-500/10 text-green-500 border-green-500/30"
    case "Warning":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/30"
    case "Critical":
      return "bg-red-500/10 text-red-500 border-red-500/30"
    default:
      return "bg-muted text-muted-foreground"
  }
}

const getMetricStatus = (type: string, value: number, fallDetected?: boolean) => {
  if (type === "heartRate") {
    if (value < 60 || value > 100) return "text-yellow-500"
    return "text-green-500"
  }
  if (type === "temperature") {
    if (value > 37.5) return "text-red-500"
    if (value > 37.2) return "text-yellow-500"
    return "text-green-500"
  }
  if (type === "gasLevel") {
    if (value > 150) return "text-red-500"
    if (value > 100) return "text-yellow-500"
    return "text-green-500"
  }
  if (type === "fall" && fallDetected) {
    return "text-red-500"
  }
  return "text-green-500"
}

export default function WorkersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null)

  const filteredWorkers = workersData.filter(
    (worker) =>
      worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.zone.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const normalCount = workersData.filter((w) => w.healthStatus === "Normal").length
  const warningCount = workersData.filter((w) => w.healthStatus === "Warning").length
  const criticalCount = workersData.filter((w) => w.healthStatus === "Critical").length

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Worker Tracking</h1>
          <p className="text-muted-foreground mt-1">Monitor health status of all sanitation workers</p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-foreground">{workersData.length}</div>
                  <div className="text-sm text-muted-foreground">Total Workers</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-green-500">{normalCount}</div>
                  <div className="text-sm text-muted-foreground">Normal Status</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                  <Shield className="h-5 w-5 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-yellow-500">{warningCount}</div>
                  <div className="text-sm text-muted-foreground">Warning</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-red-500">{criticalCount}</div>
                  <div className="text-sm text-muted-foreground">Critical</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, ID, or zone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Workers List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredWorkers.map((worker) => (
              <Card 
                key={worker.id} 
                className={`bg-card border-border cursor-pointer transition-all hover:border-primary/50 ${
                  selectedWorker?.id === worker.id ? "border-primary" : ""
                } ${worker.healthStatus === "Critical" ? "border-red-500/50 bg-red-500/5" : ""}`}
                onClick={() => setSelectedWorker(worker)}
              >
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${
                        worker.healthStatus === "Critical" 
                          ? "bg-red-500/20 animate-pulse" 
                          : worker.healthStatus === "Warning"
                          ? "bg-yellow-500/20"
                          : "bg-green-500/20"
                      }`}>
                        <User className={`h-6 w-6 ${
                          worker.healthStatus === "Critical" 
                            ? "text-red-500" 
                            : worker.healthStatus === "Warning"
                            ? "text-yellow-500"
                            : "text-green-500"
                        }`} />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{worker.name}</div>
                        <div className="text-sm text-muted-foreground">{worker.id}</div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3" />
                          {worker.zone}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <Badge variant="outline" className={getStatusColor(worker.healthStatus)}>
                        {worker.healthStatus === "Critical" && worker.fallDetected ? "FALL DETECTED" : worker.healthStatus}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        Updated {worker.lastUpdate}
                      </div>
                    </div>
                  </div>

                  {/* Quick Metrics */}
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    <div className="rounded-lg bg-secondary p-2 text-center">
                      <HeartPulse className={`h-4 w-4 mx-auto mb-1 ${getMetricStatus("heartRate", worker.heartRate)}`} />
                      <div className={`text-sm font-medium ${getMetricStatus("heartRate", worker.heartRate)}`}>
                        {worker.heartRate}
                      </div>
                      <div className="text-xs text-muted-foreground">BPM</div>
                    </div>
                    <div className="rounded-lg bg-secondary p-2 text-center">
                      <Thermometer className={`h-4 w-4 mx-auto mb-1 ${getMetricStatus("temperature", worker.temperature)}`} />
                      <div className={`text-sm font-medium ${getMetricStatus("temperature", worker.temperature)}`}>
                        {worker.temperature}°
                      </div>
                      <div className="text-xs text-muted-foreground">Temp</div>
                    </div>
                    <div className="rounded-lg bg-secondary p-2 text-center">
                      <Wind className={`h-4 w-4 mx-auto mb-1 ${getMetricStatus("gasLevel", worker.gasLevel)}`} />
                      <div className={`text-sm font-medium ${getMetricStatus("gasLevel", worker.gasLevel)}`}>
                        {worker.gasLevel}
                      </div>
                      <div className="text-xs text-muted-foreground">PPM</div>
                    </div>
                    <div className="rounded-lg bg-secondary p-2 text-center">
                      <AlertTriangle className={`h-4 w-4 mx-auto mb-1 ${getMetricStatus("fall", 0, worker.fallDetected)}`} />
                      <div className={`text-sm font-medium ${getMetricStatus("fall", 0, worker.fallDetected)}`}>
                        {worker.fallDetected ? "YES" : "NO"}
                      </div>
                      <div className="text-xs text-muted-foreground">Fall</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Worker Details / Map Placeholder */}
          <div className="space-y-4">
            {/* Selected Worker Details */}
            {selectedWorker ? (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Worker Details</CardTitle>
                  <CardDescription>{selectedWorker.name}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ID</span>
                      <span className="text-foreground font-mono">{selectedWorker.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shift</span>
                      <span className="text-foreground text-sm text-right">{selectedWorker.shift}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Zone</span>
                      <span className="text-foreground text-sm text-right">{selectedWorker.zone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <Badge variant="outline" className={getStatusColor(selectedWorker.healthStatus)}>
                        {selectedWorker.healthStatus}
                      </Badge>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="text-sm font-medium text-foreground mb-2">Contact Information</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Worker:</span>
                        <span className="text-foreground">{selectedWorker.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Supervisor:</span>
                        <span className="text-foreground">{selectedWorker.supervisorPhone}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full" variant={selectedWorker.healthStatus === "Critical" ? "destructive" : "default"}>
                    {selectedWorker.healthStatus === "Critical" ? "Send Emergency Alert" : "View Full History"}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card border-border">
                <CardContent className="p-8 text-center">
                  <User className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <div className="text-foreground font-medium">Select a Worker</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Click on a worker card to view details
                  </div>
                </CardContent>
              </Card>
            )}

            {/* GPS Map Placeholder */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-card-foreground">Location Map</CardTitle>
                <CardDescription>GPS tracking (Future Integration)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg bg-secondary flex items-center justify-center border border-dashed border-border">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">
                      GPS Module Integration
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      (Placeholder for future NEO-6M GPS)
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded bg-secondary p-2">
                    <div className="text-muted-foreground">Zone Coverage</div>
                    <div className="font-medium text-foreground">4 Active Zones</div>
                  </div>
                  <div className="rounded bg-secondary p-2">
                    <div className="text-muted-foreground">Active Workers</div>
                    <div className="font-medium text-foreground">{workersData.length} Deployed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
