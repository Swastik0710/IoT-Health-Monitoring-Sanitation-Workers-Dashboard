import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Target,
  AlertCircle,
  Lightbulb,
  CheckCircle,
  Cog,
  Factory,
  Hospital,
  Building,
  Construction,
  ArrowRight,
  Cpu,
  Radio,
  Wifi,
  Activity,
} from "lucide-react"

const objectives = [
  "Design and develop a IoT device for real-time health monitoring of sanitation workers.",
  "Implement sensors for heart rate, body temperature, gas levels, and fall detection.",
  "Establish GSM-based communication for instant SMS alerts to supervisors and emergency contacts.",
  "Create a web-based dashboard for centralized monitoring and data visualization.",
  "Ensure low power consumption and reliable operation in harsh working conditions.",
]

const advantages = [
  "Real-time monitoring reduces response time during emergencies",
  "Automatic alerts eliminate dependency on manual reporting",
  "Low-cost implementation using readily available components",
  "Scalable system architecture for large workforce deployment",
  "Cloud-based dashboard accessible from any location",
  "Historical data analysis for preventive health measures",
  "GSM backup ensures alerts even without internet connectivity",
  "Modular design allows easy sensor upgrades and maintenance",
]

const applications = [
  {
    icon: Factory,
    title: "Municipal Sanitation Departments",
    description: "Monitoring sewage workers and manhole maintenance crews",
  },
  {
    icon: Construction,
    title: "Industrial Hazardous Areas",
    description: "Workers in chemical plants, refineries, and manufacturing units",
  },
  {
    icon: Building,
    title: "Mining Operations",
    description: "Underground miners exposed to toxic gases and extreme conditions",
  },
  {
    icon: Hospital,
    title: "Healthcare Waste Management",
    description: "Workers handling biomedical waste and hazardous materials",
  },
]

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Project Explanation</h1>
          <p className="text-muted-foreground mt-1">Complete documentation for academic evaluation and viva</p>
        </div>

        {/* Problem Statement */}
        <Card className="mb-8 bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                <AlertCircle className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <CardTitle className="text-xl text-card-foreground">Problem Statement</CardTitle>
                <CardDescription>Identifying the critical safety challenges</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Sanitation workers, particularly those involved in sewer cleaning and maintenance, face severe occupational 
              health hazards. According to reports, India witnesses multiple deaths of sanitation workers every year due to:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2 text-foreground">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                <span><strong>Toxic Gas Exposure:</strong> Hydrogen sulfide (H2S), ammonia (NH3), and methane (CH4) in sewers can cause instant unconsciousness and death.</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                <span><strong>Heat Stroke:</strong> Working in confined spaces with poor ventilation leads to dangerous body temperature elevation.</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                <span><strong>Cardiac Emergencies:</strong> Physical exertion combined with toxic exposure triggers heart-related emergencies.</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                <span><strong>Falls and Injuries:</strong> Slippery surfaces and unstable structures cause frequent accidents.</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              The absence of real-time monitoring systems means that help often arrives too late. This project addresses 
              this gap by providing continuous health surveillance with instant emergency alerts.
            </p>
          </CardContent>
        </Card>

        {/* Objectives */}
        <Card className="mb-8 bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl text-card-foreground">Objectives</CardTitle>
                <CardDescription>Key goals of this project</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                    {index + 1}
                  </div>
                  <span className="text-foreground">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Block Diagram Explanation */}
        <Card className="mb-8 bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                <Cog className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <CardTitle className="text-xl text-card-foreground">Block Diagram Explanation</CardTitle>
                <CardDescription>System architecture and data flow</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Visual Block Diagram */}
            <div className="rounded-lg bg-secondary p-6">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Input Block */}
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground mb-3">INPUT (Sensors)</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded bg-card border border-border p-3 text-sm">
                      <div className="font-medium text-foreground">MQ-135</div>
                      <div className="text-xs text-muted-foreground">Gas Sensor</div>
                    </div>
                    <div className="rounded bg-card border border-border p-3 text-sm">
                      <div className="font-medium text-foreground">MPU-6050</div>
                      <div className="text-xs text-muted-foreground">Accelerometer</div>
                    </div>
                    <div className="rounded bg-card border border-border p-3 text-sm">
                      <div className="font-medium text-foreground">HW-61</div>
                      <div className="text-xs text-muted-foreground">Heart Rate</div>
                    </div>
                    <div className="rounded bg-card border border-border p-3 text-sm">
                      <div className="font-medium text-foreground">LM35</div>
                      <div className="text-xs text-muted-foreground">Temperature</div>
                    </div>
                  </div>
                </div>

                <ArrowRight className="h-8 w-8 text-primary shrink-0 rotate-90 lg:rotate-0" />

                {/* Processing Block */}
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground mb-3">PROCESSING</div>
                  <div className="rounded-xl bg-primary p-6 text-center">
                    <Cpu className="h-10 w-10 mx-auto mb-2 text-primary-foreground" />
                    <div className="font-bold text-primary-foreground">ESP32</div>
                    <div className="text-xs text-primary-foreground/80">Microcontroller</div>
                  </div>
                </div>

                <ArrowRight className="h-8 w-8 text-primary shrink-0 rotate-90 lg:rotate-0" />

                {/* Communication Block */}
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground mb-3">COMMUNICATION</div>
                  <div className="space-y-2">
                    <div className="rounded bg-card border border-border p-3">
                      <Radio className="h-5 w-5 mx-auto mb-1 text-green-500" />
                      <div className="text-sm font-medium text-foreground">SIM800L GSM</div>
                      <div className="text-xs text-muted-foreground">SMS Alerts</div>
                    </div>
                    <div className="rounded bg-card border border-border p-3">
                      <Wifi className="h-5 w-5 mx-auto mb-1 text-blue-500" />
                      <div className="text-sm font-medium text-foreground">WiFi</div>
                      <div className="text-xs text-muted-foreground">Dashboard</div>
                    </div>
                  </div>
                </div>

                <ArrowRight className="h-8 w-8 text-primary shrink-0 rotate-90 lg:rotate-0" />

                {/* Output Block */}
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground mb-3">OUTPUT</div>
                  <div className="space-y-2">
                    <div className="rounded bg-card border border-border p-3">
                      <Activity className="h-5 w-5 mx-auto mb-1 text-primary" />
                      <div className="text-sm font-medium text-foreground">Web Dashboard</div>
                    </div>
                    <div className="rounded bg-card border border-red-500/30 bg-red-500/5 p-3">
                      <AlertCircle className="h-5 w-5 mx-auto mb-1 text-red-500" />
                      <div className="text-sm font-medium text-foreground">SMS Alert</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Explanation */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Data Flow Explanation:</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border p-4">
                  <div className="font-medium text-foreground mb-2">1. Sensor Data Acquisition</div>
                  <p className="text-sm text-muted-foreground">
                    All four sensors (MQ-135, MPU-6050, HW-61, LM35) continuously measure environmental 
                    and physiological parameters and send analog/digital signals to the ESP32.
                  </p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <div className="font-medium text-foreground mb-2">2. Data Processing</div>
                  <p className="text-sm text-muted-foreground">
                    The ESP32 reads sensor values, processes them using predefined thresholds, 
                    and determines if any parameter exceeds safe limits indicating a potential emergency.
                  </p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <div className="font-medium text-foreground mb-2">3. Alert Generation</div>
                  <p className="text-sm text-muted-foreground">
                    When dangerous conditions are detected, the ESP32 triggers the SIM800L GSM module 
                    to send SMS alerts using AT commands to predefined emergency contacts.
                  </p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <div className="font-medium text-foreground mb-2">4. Dashboard Update</div>
                  <p className="text-sm text-muted-foreground">
                    Simultaneously, data is transmitted via WiFi to the cloud server, 
                    updating the web dashboard in real-time for remote monitoring by supervisors.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Working Principle */}
        <Card className="mb-8 bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                <Lightbulb className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <CardTitle className="text-xl text-card-foreground">Working Principle</CardTitle>
                <CardDescription>How the system operates</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-foreground leading-relaxed">
              The IoT-based health monitoring system operates on a continuous monitoring and threshold-based 
              alert mechanism. The working principle can be explained in the following steps:
            </p>

            <div className="space-y-4">
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</div>
                  <h4 className="font-semibold text-foreground">Initialization</h4>
                </div>
                <p className="text-muted-foreground ml-11">
                  When powered on, the ESP32 initializes all connected sensors, establishes WiFi connection, 
                  and tests the GSM module by sending an initialization message. All sensors are calibrated 
                  to ensure accurate readings.
                </p>
              </div>

              <div className="rounded-lg border border-border p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</div>
                  <h4 className="font-semibold text-foreground">Continuous Monitoring Loop</h4>
                </div>
                <p className="text-muted-foreground ml-11">
                  The system enters an infinite loop where it reads data from all sensors every 2-3 seconds. 
                  Heart rate is measured using pulse detection, temperature via analog voltage conversion, 
                  gas levels through resistance change measurement, and fall detection using accelerometer axis changes.
                </p>
              </div>

              <div className="rounded-lg border border-border p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">3</div>
                  <h4 className="font-semibold text-foreground">Threshold Comparison</h4>
                </div>
                <div className="text-muted-foreground ml-11">
                  <p className="mb-2">Each sensor reading is compared against predefined safety thresholds:</p>
                  <ul className="space-y-1 text-sm">
                    <li>Heart Rate: 60-100 BPM (Normal), {"<"}60 or {">"}100 (Alert)</li>
                    <li>Temperature: {"<"}37.5°C (Normal), {">"}37.5°C (Warning), {">"}38.5°C (Critical)</li>
                    <li>Gas Level: {"<"}100 PPM (Safe), 100-150 PPM (Warning), {">"}150 PPM (Danger)</li>
                    <li>Fall Detection: Sudden acceleration change {">"}2g triggers fall alert</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-border p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">4</div>
                  <h4 className="font-semibold text-foreground">Alert Mechanism</h4>
                </div>
                <p className="text-muted-foreground ml-11">
                  When any threshold is exceeded, the ESP32 immediately activates the SIM800L module and sends 
                  a formatted SMS containing worker ID, alert type, current reading, timestamp, and location (if GPS available) 
                  to the supervisor and emergency contacts.
                </p>
              </div>

              <div className="rounded-lg border border-border p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">5</div>
                  <h4 className="font-semibold text-foreground">Dashboard Synchronization</h4>
                </div>
                <p className="text-muted-foreground ml-11">
                  All sensor data, whether normal or critical, is transmitted to the cloud server via HTTP POST requests. 
                  The web dashboard receives this data and updates the visual display in real-time, maintaining a 
                  complete log for historical analysis and reporting.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advantages */}
        <Card className="mb-8 bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <CardTitle className="text-xl text-card-foreground">Advantages</CardTitle>
                <CardDescription>Benefits of this system</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border border-border p-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{advantage}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Applications */}
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Factory className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl text-card-foreground">Applications</CardTitle>
                <CardDescription>Where this system can be deployed</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {applications.map((app) => {
                const Icon = app.icon
                return (
                  <Card key={app.title} className="bg-secondary border-0">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{app.title}</div>
                          <div className="text-sm text-muted-foreground mt-1">{app.description}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
