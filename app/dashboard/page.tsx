"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  HeartPulse,
  Thermometer,
  Wind,
  AlertTriangle,
  RefreshCw,
  Activity,
  Clock,
  User,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"

interface HealthData {
  heartRate: number
  temperature: number
  gasLevel: number
  fallDetected: boolean
  timestamp: Date
}

interface ChartData {
  time: string
  heartRate: number
  temperature: number
  gasLevel: number
}

// Simulated sensor data generator
function generateSensorData(): HealthData {
  return {
    heartRate: Math.floor(70 + Math.random() * 30),
    temperature: Number((36.0 + Math.random() * 2).toFixed(1)),
    gasLevel: Math.floor(50 + Math.random() * 150),
    fallDetected: Math.random() > 0.95, // 5% chance of fall detection
    timestamp: new Date(),
  }
}

function getHeartRateStatus(value: number): { status: string; color: string } {
  if (value < 60) return { status: "Low", color: "text-yellow-500" }
  if (value > 100) return { status: "High", color: "text-red-500" }
  return { status: "Normal", color: "text-green-500" }
}

function getTemperatureStatus(value: number): { status: string; color: string } {
  if (value < 36.0) return { status: "Low", color: "text-blue-500" }
  if (value > 37.5) return { status: "Fever", color: "text-red-500" }
  return { status: "Normal", color: "text-green-500" }
}

function getGasStatus(value: number): { status: string; color: string } {
  if (value > 150) return { status: "Danger", color: "text-red-500" }
  if (value > 100) return { status: "Warning", color: "text-yellow-500" }
  return { status: "Safe", color: "text-green-500" }
}

export default function DashboardPage() {
  const [healthData, setHealthData] = useState<HealthData | null>(null)
  const [chartData, setChartData] = useState<ChartData[]>([])
  const [isLive, setIsLive] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  useEffect(() => {
    // Initialize with some data
    const initialData: ChartData[] = []
    for (let i = 10; i >= 0; i--) {
      const data = generateSensorData()
      initialData.push({
        time: new Date(Date.now() - i * 3000).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        heartRate: data.heartRate,
        temperature: data.temperature,
        gasLevel: data.gasLevel,
      })
    }
    setChartData(initialData)
    setHealthData(generateSensorData())
  }, [])

  useEffect(() => {
    if (!isLive) return

    const interval = setInterval(() => {
      const newData = generateSensorData()
      setHealthData(newData)
      setLastUpdate(new Date())

      setChartData((prev) => {
        const updated = [
          ...prev.slice(-19),
          {
            time: newData.timestamp.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
            heartRate: newData.heartRate,
            temperature: newData.temperature,
            gasLevel: newData.gasLevel,
          },
        ]
        return updated
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isLive])

  if (!healthData) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-96">
            <RefreshCw className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </div>
    )
  }

  const heartStatus = getHeartRateStatus(healthData.heartRate)
  const tempStatus = getTemperatureStatus(healthData.temperature)
  const gasStatus = getGasStatus(healthData.gasLevel)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Live Health Monitoring</h1>
            <p className="text-muted-foreground mt-1">Real-time sensor data from IoT devices</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Last update: {lastUpdate.toLocaleTimeString()}</span>
            </div>
            <Button
              variant={isLive ? "default" : "outline"}
              size="sm"
              onClick={() => setIsLive(!isLive)}
            >
              {isLive ? (
                <>
                  <Activity className="mr-2 h-4 w-4" />
                  Live
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Paused
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Worker Info */}
        <Card className="mb-6 bg-card border-border">
          <CardContent className="p-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Worker ID: SW-001</div>
                  <div className="text-sm text-muted-foreground">Rajesh Kumar</div>
                </div>
              </div>
              <Badge variant="outline" className="ml-auto">
                Shift: Morning (6:00 AM - 2:00 PM)
              </Badge>
              <Badge 
                className={
                  healthData.fallDetected || gasStatus.status === "Danger" 
                    ? "bg-red-500/10 text-red-500 border-red-500/30" 
                    : "bg-green-500/10 text-green-500 border-green-500/30"
                }
              >
                {healthData.fallDetected || gasStatus.status === "Danger" ? "Alert Active" : "All Systems Normal"}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Metric Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Heart Rate Card */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-2">
                <HeartPulse className="h-4 w-4" />
                Heart Rate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-3xl font-bold text-foreground">{healthData.heartRate}</div>
                  <div className="text-sm text-muted-foreground">BPM</div>
                </div>
                <div className={`text-sm font-medium ${heartStatus.color}`}>
                  {heartStatus.status}
                </div>
              </div>
              <div className="mt-4 h-2 w-full rounded-full bg-secondary">
                <div
                  className={`h-2 rounded-full transition-all ${
                    heartStatus.status === "Normal" ? "bg-green-500" : heartStatus.status === "High" ? "bg-red-500" : "bg-yellow-500"
                  }`}
                  style={{ width: `${Math.min((healthData.heartRate / 150) * 100, 100)}%` }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Temperature Card */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-2">
                <Thermometer className="h-4 w-4" />
                Body Temperature
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-3xl font-bold text-foreground">{healthData.temperature}</div>
                  <div className="text-sm text-muted-foreground">°C</div>
                </div>
                <div className={`text-sm font-medium ${tempStatus.color}`}>
                  {tempStatus.status}
                </div>
              </div>
              <div className="mt-4 h-2 w-full rounded-full bg-secondary">
                <div
                  className={`h-2 rounded-full transition-all ${
                    tempStatus.status === "Normal" ? "bg-green-500" : tempStatus.status === "Fever" ? "bg-red-500" : "bg-blue-500"
                  }`}
                  style={{ width: `${((healthData.temperature - 35) / 5) * 100}%` }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Gas Level Card */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-2">
                <Wind className="h-4 w-4" />
                Gas Level (MQ-135)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-3xl font-bold text-foreground">{healthData.gasLevel}</div>
                  <div className="text-sm text-muted-foreground">PPM</div>
                </div>
                <div className={`text-sm font-medium ${gasStatus.color}`}>
                  {gasStatus.status}
                </div>
              </div>
              <div className="mt-4 h-2 w-full rounded-full bg-secondary">
                <div
                  className={`h-2 rounded-full transition-all ${
                    gasStatus.status === "Safe" ? "bg-green-500" : gasStatus.status === "Warning" ? "bg-yellow-500" : "bg-red-500"
                  }`}
                  style={{ width: `${Math.min((healthData.gasLevel / 200) * 100, 100)}%` }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Fall Detection Card */}
          <Card className={`bg-card border-border ${healthData.fallDetected ? "border-red-500/50 bg-red-500/5" : ""}`}>
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Fall Detection (MPU-6050)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div>
                  <div className={`text-xl font-bold ${healthData.fallDetected ? "text-red-500" : "text-green-500"}`}>
                    {healthData.fallDetected ? "FALL DETECTED" : "Normal"}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {healthData.fallDetected ? "Alert sent via GSM" : "Stable position"}
                  </div>
                </div>
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  healthData.fallDetected ? "bg-red-500 animate-pulse" : "bg-green-500/20"
                }`}>
                  <AlertTriangle className={`h-5 w-5 ${healthData.fallDetected ? "text-white" : "text-green-500"}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Heart Rate Chart */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-card-foreground">Heart Rate Trend</CardTitle>
              <CardDescription>Real-time heart rate monitoring over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="heartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="time" stroke="#666" fontSize={11} />
                    <YAxis domain={[50, 130]} stroke="#666" fontSize={11} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1a1f35",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        color: "#fff",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="heartRate"
                      stroke="#ef4444"
                      fill="url(#heartGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Gas Level Chart */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-card-foreground">Gas Level Trend</CardTitle>
              <CardDescription>MQ-135 sensor readings (PPM)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="time" stroke="#666" fontSize={11} />
                    <YAxis domain={[0, 200]} stroke="#666" fontSize={11} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1a1f35",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        color: "#fff",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="gasLevel"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={false}
                    />
                    {/* Danger threshold line */}
                    <Line
                      type="monotone"
                      dataKey={() => 150}
                      stroke="#ef4444"
                      strokeDasharray="5 5"
                      strokeWidth={1}
                      dot={false}
                      name="Danger Threshold"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-4 bg-blue-500 rounded" />
                  <span>Gas Level</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-0.5 w-4 bg-red-500" style={{ borderTop: "2px dashed #ef4444" }} />
                  <span>Danger Threshold (150 PPM)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status Legend */}
        <Card className="mt-6 bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg text-card-foreground">Status Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">Normal - All parameters safe</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-yellow-500" />
                <span className="text-sm text-muted-foreground">Warning - Monitor closely</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-red-500" />
                <span className="text-sm text-muted-foreground">Danger - Immediate action needed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-blue-500" />
                <span className="text-sm text-muted-foreground">Low - Below normal range</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
