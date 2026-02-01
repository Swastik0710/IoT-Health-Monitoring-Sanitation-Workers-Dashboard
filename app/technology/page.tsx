import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Cpu,
  Wind,
  Activity,
  Thermometer,
  Radio,
  Zap,
  Code,
  Server,
  Globe,
  Database,
  Wifi,
  Settings,
} from "lucide-react"

const hardwareComponents = [
  {
    name: "ESP32",
    category: "Microcontroller",
    icon: Cpu,
    description: "Dual-core 32-bit processor with built-in WiFi and Bluetooth. Acts as the central processing unit for all sensor data and communication.",
    specs: [
      "Clock Speed: 240 MHz",
      "RAM: 520 KB SRAM",
      "Flash: 4 MB",
      "WiFi: 802.11 b/g/n",
      "Bluetooth: 4.2 BR/EDR + BLE",
      "GPIO Pins: 34",
      "ADC: 12-bit, 18 channels",
    ],
    usage: "Reads data from all sensors, processes it against thresholds, controls GSM module for SMS alerts, and transmits data to web server via WiFi.",
  },
  {
    name: "MQ-135",
    category: "Gas Sensor",
    icon: Wind,
    description: "Air quality sensor for detecting harmful gases including ammonia, nitrogen oxides, alcohol, benzene, smoke, and CO2.",
    specs: [
      "Detection Range: 10-1000 PPM",
      "Power Supply: 5V DC",
      "Heater Resistance: 33Ω",
      "Load Resistance: 10-47 KΩ",
      "Heater Power: 800mW",
      "Sensitivity: Rs/Ro varies",
    ],
    usage: "Continuously monitors air quality in the worker's vicinity. Outputs analog voltage proportional to gas concentration, which ESP32 converts to PPM values.",
  },
  {
    name: "MPU-6050",
    category: "Motion Sensor",
    icon: Activity,
    description: "6-axis accelerometer and gyroscope for motion detection and fall sensing using I2C communication.",
    specs: [
      "Accelerometer: ±2g to ±16g",
      "Gyroscope: ±250 to ±2000°/s",
      "Interface: I2C (400kHz)",
      "Power Supply: 3.3V - 5V",
      "Resolution: 16-bit ADC",
      "On-chip DMP",
    ],
    usage: "Detects sudden changes in acceleration indicating falls. Monitors orientation changes to identify if worker is prone or moving.",
  },
  {
    name: "HW-61 / Pulse Sensor",
    category: "Heart Rate Sensor",
    icon: Activity,
    description: "Optical heart rate sensor using photoplethysmography (PPG) to detect blood volume changes.",
    specs: [
      "Operating Voltage: 3.3V - 5V",
      "Output: Analog Signal",
      "Detection: Green LED + Photodiode",
      "Sampling Rate: Up to 100Hz",
      "Current: <4mA",
    ],
    usage: "Measures pulse by detecting blood volume changes in fingertip or earlobe. ESP32 calculates BPM from peak intervals in the signal.",
  },
  {
    name: "LM35",
    category: "Temperature Sensor",
    icon: Thermometer,
    description: "Precision centigrade temperature sensor with linear voltage output directly proportional to temperature.",
    specs: [
      "Range: -55°C to 150°C",
      "Accuracy: ±0.5°C (at 25°C)",
      "Output: 10mV/°C",
      "Power Supply: 4V - 30V",
      "Current Draw: <60µA",
    ],
    usage: "Measures body temperature when placed in contact with skin. Output voltage is converted to temperature: T(°C) = Vout × 100",
  },
  {
    name: "SIM800L",
    category: "GSM Module",
    icon: Radio,
    description: "Quad-band GSM/GPRS module for SMS communication and cellular connectivity.",
    specs: [
      "Bands: 850/900/1800/1900 MHz",
      "Power Supply: 3.4V - 4.4V",
      "Operating Current: 1A peak",
      "GPRS: Multi-slot Class 12",
      "SMS: Text and PDU mode",
      "Interface: UART (AT Commands)",
    ],
    usage: "Sends SMS alerts to emergency contacts when dangerous conditions are detected. Communicates via AT commands from ESP32.",
  },
  {
    name: "LM2596",
    category: "Power Supply",
    icon: Zap,
    description: "Step-down (buck) DC-DC converter module for efficient power regulation.",
    specs: [
      "Input Voltage: 4V - 40V",
      "Output Voltage: 1.25V - 37V",
      "Output Current: 3A (max)",
      "Efficiency: Up to 92%",
      "Switching Freq: 150kHz",
    ],
    usage: "Converts battery voltage to stable 3.3V/5V required by ESP32 and sensors. Ensures consistent power supply during operation.",
  },
]

const softwareTechnologies = [
  {
    name: "Arduino IDE",
    category: "Development Environment",
    icon: Code,
    description: "Primary IDE for writing and uploading firmware code to ESP32.",
    features: ["C/C++ programming", "ESP32 board support", "Library management", "Serial monitor"],
  },
  {
    name: "HTML/CSS/JavaScript",
    category: "Frontend",
    icon: Globe,
    description: "Web technologies for building the responsive monitoring dashboard.",
    features: ["Responsive design", "Real-time updates", "Charts and graphs", "Mobile-friendly"],
  },
  {
    name: "Next.js / React",
    category: "Web Framework",
    icon: Server,
    description: "Modern React framework for building the production-ready web dashboard.",
    features: ["Server-side rendering", "Component architecture", "API routes", "TypeScript support"],
  },
  {
    name: "Firebase (Optional)",
    category: "Backend Service",
    icon: Database,
    description: "Cloud platform for real-time database, authentication, and hosting.",
    features: ["Realtime Database", "Cloud Functions", "User Authentication", "Free tier available"],
  },
]

const communicationProtocols = [
  {
    name: "I2C",
    description: "Inter-Integrated Circuit protocol used for MPU-6050 communication",
    usage: "SDA (GPIO 21), SCL (GPIO 22) on ESP32",
  },
  {
    name: "UART",
    description: "Universal Asynchronous Receiver/Transmitter for GSM module",
    usage: "TX (GPIO 17), RX (GPIO 16) for SIM800L",
  },
  {
    name: "HTTP/HTTPS",
    description: "Web protocol for sending sensor data to cloud server",
    usage: "POST requests with JSON payload",
  },
  {
    name: "AT Commands",
    description: "Hayes command set for controlling GSM module",
    usage: "AT+CMGF, AT+CMGS for SMS",
  },
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Technology Stack</h1>
          <p className="text-muted-foreground mt-1">Hardware components and software technologies used</p>
        </div>

        {/* Hardware Components */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Cpu className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Hardware Components</h2>
              <p className="text-sm text-muted-foreground">Physical components used in the IoT system</p>
            </div>
          </div>

          <div className="grid gap-6">
            {hardwareComponents.map((component) => {
              const Icon = component.icon
              return (
                <Card key={component.name} className="bg-card border-border">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-card-foreground">{component.name}</CardTitle>
                          <Badge variant="outline" className="mt-1">{component.category}</Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-4">{component.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Specifications</h4>
                        <ul className="space-y-2">
                          {component.specs.map((spec, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              <span className="text-muted-foreground">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Usage in Project</h4>
                        <p className="text-sm text-muted-foreground">{component.usage}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Software Technologies */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
              <Code className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Software Technologies</h2>
              <p className="text-sm text-muted-foreground">Development tools and frameworks</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {softwareTechnologies.map((tech) => {
              const Icon = tech.icon
              return (
                <Card key={tech.name} className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10">
                        <Icon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <CardTitle className="text-base text-card-foreground">{tech.name}</CardTitle>
                        <CardDescription className="text-xs">{tech.category}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{tech.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Communication Protocols */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
              <Wifi className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Communication Protocols</h2>
              <p className="text-sm text-muted-foreground">Data transmission standards used</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {communicationProtocols.map((protocol) => (
              <Card key={protocol.name} className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="text-lg font-bold text-primary mb-2">{protocol.name}</div>
                  <p className="text-sm text-muted-foreground mb-2">{protocol.description}</p>
                  <code className="text-xs bg-secondary px-2 py-1 rounded text-foreground">{protocol.usage}</code>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Circuit Diagram Info */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10">
              <Settings className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Pin Connections</h2>
              <p className="text-sm text-muted-foreground">ESP32 GPIO pin mapping</p>
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-medium text-foreground">Component</th>
                      <th className="text-left py-3 px-4 font-medium text-foreground">Pin</th>
                      <th className="text-left py-3 px-4 font-medium text-foreground">ESP32 GPIO</th>
                      <th className="text-left py-3 px-4 font-medium text-foreground">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3 px-4 text-foreground">MQ-135</td>
                      <td className="py-3 px-4 text-muted-foreground">A0 (Analog Out)</td>
                      <td className="py-3 px-4"><code className="bg-secondary px-2 py-0.5 rounded">GPIO 34</code></td>
                      <td className="py-3 px-4 text-muted-foreground">ADC1 Channel 6</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-foreground">MPU-6050</td>
                      <td className="py-3 px-4 text-muted-foreground">SDA / SCL</td>
                      <td className="py-3 px-4"><code className="bg-secondary px-2 py-0.5 rounded">GPIO 21 / 22</code></td>
                      <td className="py-3 px-4 text-muted-foreground">I2C Bus</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-foreground">HW-61 (Pulse)</td>
                      <td className="py-3 px-4 text-muted-foreground">Signal Out</td>
                      <td className="py-3 px-4"><code className="bg-secondary px-2 py-0.5 rounded">GPIO 35</code></td>
                      <td className="py-3 px-4 text-muted-foreground">ADC1 Channel 7</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-foreground">LM35</td>
                      <td className="py-3 px-4 text-muted-foreground">Vout</td>
                      <td className="py-3 px-4"><code className="bg-secondary px-2 py-0.5 rounded">GPIO 32</code></td>
                      <td className="py-3 px-4 text-muted-foreground">ADC1 Channel 4</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-foreground">SIM800L</td>
                      <td className="py-3 px-4 text-muted-foreground">TX / RX</td>
                      <td className="py-3 px-4"><code className="bg-secondary px-2 py-0.5 rounded">GPIO 16 / 17</code></td>
                      <td className="py-3 px-4 text-muted-foreground">UART2</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-foreground">Power (All)</td>
                      <td className="py-3 px-4 text-muted-foreground">VCC / GND</td>
                      <td className="py-3 px-4"><code className="bg-secondary px-2 py-0.5 rounded">3.3V / GND</code></td>
                      <td className="py-3 px-4 text-muted-foreground">Via LM2596 regulator</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sample Code Snippet */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Sample Arduino Code Structure</h2>
              <p className="text-sm text-muted-foreground">Basic firmware code outline for ESP32</p>
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-0">
              <pre className="p-6 overflow-x-auto text-sm font-mono text-foreground">
{`// IoT Health Monitoring System - ESP32 Firmware
#include <WiFi.h>
#include <Wire.h>
#include <HTTPClient.h>

// Pin Definitions
#define MQ135_PIN 34
#define PULSE_PIN 35
#define LM35_PIN  32
#define GSM_TX    17
#define GSM_RX    16

// Thresholds
#define HEART_LOW  60
#define HEART_HIGH 100
#define TEMP_WARNING 37.5
#define GAS_DANGER 150

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);  // I2C for MPU-6050
  initSensors();
  connectWiFi();
  initGSM();
}

void loop() {
  float heartRate = readHeartRate();
  float temperature = readTemperature();
  int gasLevel = readGasLevel();
  bool fallDetected = checkFall();

  if (isEmergency(heartRate, temperature, gasLevel, fallDetected)) {
    sendSMSAlert();
  }
  
  sendToCloud(heartRate, temperature, gasLevel, fallDetected);
  delay(3000);
}

void sendSMSAlert() {
  // AT+CMGF=1 (Text mode)
  // AT+CMGS="+91XXXXXXXXXX"
  // Send alert message
}`}
              </pre>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
