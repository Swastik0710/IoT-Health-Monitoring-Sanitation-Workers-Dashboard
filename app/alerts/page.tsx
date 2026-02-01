"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Bell,
  Wind,
  AlertTriangle,
  HeartPulse,
  Thermometer,
  MessageSquare,
  CheckCircle,
  Filter,
  Download,
} from "lucide-react"

interface Alert {
  id: string
  timestamp: string
  type: "Gas" | "Fall" | "Heart" | "Temperature"
  workerId: string
  workerName: string
  message: string
  value: string
  severity: "Critical" | "Warning" | "Info"
  status: "Sent" | "Pending" | "Failed"
}

// Sample alert data
const alertsData: Alert[] = [
  {
    id: "ALT-001",
    timestamp: "2025-02-01 08:45:23",
    type: "Gas",
    workerId: "SW-001",
    workerName: "Rajesh Kumar",
    message: "High gas concentration detected - Evacuate immediately",
    value: "185 PPM",
    severity: "Critical",
    status: "Sent",
  },
  {
    id: "ALT-002",
    timestamp: "2025-02-01 08:32:15",
    type: "Fall",
    workerId: "SW-003",
    workerName: "Suresh Patel",
    message: "Fall detected - Worker may need assistance",
    value: "Sudden impact",
    severity: "Critical",
    status: "Sent",
  },
  {
    id: "ALT-003",
    timestamp: "2025-02-01 08:15:47",
    type: "Heart",
    workerId: "SW-002",
    workerName: "Amit Singh",
    message: "Elevated heart rate detected",
    value: "112 BPM",
    severity: "Warning",
    status: "Sent",
  },
  {
    id: "ALT-004",
    timestamp: "2025-02-01 07:58:32",
    type: "Temperature",
    workerId: "SW-001",
    workerName: "Rajesh Kumar",
    message: "Body temperature above normal threshold",
    value: "38.2°C",
    severity: "Warning",
    status: "Sent",
  },
  {
    id: "ALT-005",
    timestamp: "2025-02-01 07:45:11",
    type: "Gas",
    workerId: "SW-004",
    workerName: "Vikram Yadav",
    message: "Gas level approaching warning threshold",
    value: "125 PPM",
    severity: "Warning",
    status: "Sent",
  },
  {
    id: "ALT-006",
    timestamp: "2025-02-01 07:30:05",
    type: "Heart",
    workerId: "SW-003",
    workerName: "Suresh Patel",
    message: "Low heart rate detected",
    value: "52 BPM",
    severity: "Warning",
    status: "Sent",
  },
  {
    id: "ALT-007",
    timestamp: "2025-02-01 07:15:28",
    type: "Temperature",
    workerId: "SW-005",
    workerName: "Ravi Sharma",
    message: "Body temperature slightly elevated",
    value: "37.6°C",
    severity: "Info",
    status: "Sent",
  },
  {
    id: "ALT-008",
    timestamp: "2025-02-01 06:55:42",
    type: "Gas",
    workerId: "SW-002",
    workerName: "Amit Singh",
    message: "Dangerous gas levels detected - Emergency evacuation required",
    value: "210 PPM",
    severity: "Critical",
    status: "Sent",
  },
  {
    id: "ALT-009",
    timestamp: "2025-02-01 06:40:18",
    type: "Fall",
    workerId: "SW-001",
    workerName: "Rajesh Kumar",
    message: "Sudden fall detected near manhole area",
    value: "High impact",
    severity: "Critical",
    status: "Sent",
  },
  {
    id: "ALT-010",
    timestamp: "2025-02-01 06:25:33",
    type: "Heart",
    workerId: "SW-004",
    workerName: "Vikram Yadav",
    message: "Heart rate normalized after rest",
    value: "78 BPM",
    severity: "Info",
    status: "Sent",
  },
]

const getAlertIcon = (type: string) => {
  switch (type) {
    case "Gas":
      return <Wind className="h-4 w-4" />
    case "Fall":
      return <AlertTriangle className="h-4 w-4" />
    case "Heart":
      return <HeartPulse className="h-4 w-4" />
    case "Temperature":
      return <Thermometer className="h-4 w-4" />
    default:
      return <Bell className="h-4 w-4" />
  }
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "Critical":
      return "bg-red-500/10 text-red-500 border-red-500/30"
    case "Warning":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/30"
    case "Info":
      return "bg-blue-500/10 text-blue-500 border-blue-500/30"
    default:
      return "bg-muted text-muted-foreground"
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "Gas":
      return "bg-blue-500/10 text-blue-500 border-blue-500/30"
    case "Fall":
      return "bg-red-500/10 text-red-500 border-red-500/30"
    case "Heart":
      return "bg-pink-500/10 text-pink-500 border-pink-500/30"
    case "Temperature":
      return "bg-orange-500/10 text-orange-500 border-orange-500/30"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function AlertsPage() {
  const [filterType, setFilterType] = useState<string>("all")
  const [filterSeverity, setFilterSeverity] = useState<string>("all")

  const filteredAlerts = alertsData.filter((alert) => {
    if (filterType !== "all" && alert.type !== filterType) return false
    if (filterSeverity !== "all" && alert.severity !== filterSeverity) return false
    return true
  })

  const criticalCount = alertsData.filter((a) => a.severity === "Critical").length
  const warningCount = alertsData.filter((a) => a.severity === "Warning").length
  const infoCount = alertsData.filter((a) => a.severity === "Info").length

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Alerts & Notifications</h1>
            <p className="text-muted-foreground mt-1">Log of all alerts sent via GSM (SIM800L)</p>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Log
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-foreground">{alertsData.length}</div>
                  <div className="text-sm text-muted-foreground">Total Alerts</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Bell className="h-5 w-5 text-primary" />
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
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-yellow-500">{warningCount}</div>
                  <div className="text-sm text-muted-foreground">Warnings</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10">
                  <Bell className="h-5 w-5 text-yellow-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-green-500">{alertsData.filter(a => a.status === "Sent").length}</div>
                  <div className="text-sm text-muted-foreground">SMS Sent</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                  <MessageSquare className="h-5 w-5 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6 bg-card border-border">
          <CardContent className="p-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Filters:</span>
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Alert Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Gas">Gas</SelectItem>
                  <SelectItem value="Fall">Fall</SelectItem>
                  <SelectItem value="Heart">Heart Rate</SelectItem>
                  <SelectItem value="Temperature">Temperature</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterSeverity} onValueChange={setFilterSeverity}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severity</SelectItem>
                  <SelectItem value="Critical">Critical</SelectItem>
                  <SelectItem value="Warning">Warning</SelectItem>
                  <SelectItem value="Info">Info</SelectItem>
                </SelectContent>
              </Select>
              <div className="ml-auto text-sm text-muted-foreground">
                Showing {filteredAlerts.length} of {alertsData.length} alerts
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alerts Table */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg text-card-foreground">Alert Log</CardTitle>
            <CardDescription>Complete history of all alerts generated by the IoT system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead className="text-muted-foreground">Timestamp</TableHead>
                    <TableHead className="text-muted-foreground">Type</TableHead>
                    <TableHead className="text-muted-foreground">Worker</TableHead>
                    <TableHead className="text-muted-foreground">Message</TableHead>
                    <TableHead className="text-muted-foreground">Value</TableHead>
                    <TableHead className="text-muted-foreground">Severity</TableHead>
                    <TableHead className="text-muted-foreground">SMS Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAlerts.map((alert) => (
                    <TableRow 
                      key={alert.id} 
                      className={`border-border ${alert.severity === "Critical" ? "bg-red-500/5" : ""}`}
                    >
                      <TableCell className="text-foreground font-mono text-sm">
                        {alert.timestamp}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getTypeColor(alert.type)}>
                          <span className="mr-1">{getAlertIcon(alert.type)}</span>
                          {alert.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium text-foreground">{alert.workerName}</div>
                          <div className="text-sm text-muted-foreground">{alert.workerId}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-foreground max-w-xs truncate">
                        {alert.message}
                      </TableCell>
                      <TableCell className="text-foreground font-mono">
                        {alert.value}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getSeverityColor(alert.severity)}>
                          {alert.severity}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-green-500 text-sm">{alert.status}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* GSM Info */}
        <Card className="mt-6 bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg text-card-foreground">GSM Communication Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-secondary p-4">
                <div className="text-sm text-muted-foreground mb-1">Module</div>
                <div className="font-medium text-foreground">SIM800L GSM/GPRS</div>
              </div>
              <div className="rounded-lg bg-secondary p-4">
                <div className="text-sm text-muted-foreground mb-1">Communication</div>
                <div className="font-medium text-foreground">SMS via AT Commands</div>
              </div>
              <div className="rounded-lg bg-secondary p-4">
                <div className="text-sm text-muted-foreground mb-1">Emergency Contacts</div>
                <div className="font-medium text-foreground">Supervisor + Emergency Services</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
