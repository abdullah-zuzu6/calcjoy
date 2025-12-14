"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function BmiCalculator(){
  const [unit, setUnit] = useState<"metric" | "imperial">("metric")
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState<string>("")

  const calculateBmi = () => {
    const w = Number.parseFloat(weight)
    const h = Number.parseFloat(height)

    if (!w || !h || w <= 0 || h <= 0) {
      return
    }

    let bmiValue: number

    if (unit === "metric") {
      // Weight in kg, height in cm
      bmiValue = w / Math.pow(h / 100, 2)
    } else {
      // Weight in lbs, height in inches
      bmiValue = (w / Math.pow(h, 2)) * 703
    }

    setBmi(Number.parseFloat(bmiValue.toFixed(1)))

    // Determine category
    if (bmiValue < 18.5) {
      setCategory("Underweight")
    } else if (bmiValue < 25) {
      setCategory("Normal weight")
    } else if (bmiValue < 30) {
      setCategory("Overweight")
    } else {
      setCategory("Obese")
    }
  }

  const getBmiColor = () => {
    if (!bmi) return "text-foreground"
    if (bmi < 18.5) return "text-blue-600"
    if (bmi < 25) return "text-green-600"
    if (bmi < 30) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculate Your BMI</CardTitle>
        <CardDescription>Enter your weight and height to calculate your Body Mass Index</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label className="mb-3 block">Unit System</Label>
            <RadioGroup value={unit} onValueChange={(value) => setUnit(value as "metric" | "imperial")}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="metric" id="metric" />
                <Label htmlFor="metric" className="font-normal cursor-pointer">
                  Metric (kg, cm)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="imperial" id="imperial" />
                <Label htmlFor="imperial" className="font-normal cursor-pointer">
                  Imperial (lbs, inches)
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight">Weight {unit === "metric" ? "(kg)" : "(lbs)"}</Label>
            <Input
              id="weight"
              type="number"
              placeholder={unit === "metric" ? "e.g., 70" : "e.g., 154"}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="height">Height {unit === "metric" ? "(cm)" : "(inches)"}</Label>
            <Input
              id="height"
              type="number"
              placeholder={unit === "metric" ? "e.g., 175" : "e.g., 69"}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <Button onClick={calculateBmi} className="w-full">
            Calculate BMI
          </Button>
        </div>

        {bmi !== null && (
          <div className="mt-6 p-6 bg-muted rounded-lg">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Your BMI is</p>
              <p className={`text-5xl font-bold mb-2 ${getBmiColor()}`}>{bmi}</p>
              <p className={`text-xl font-semibold ${getBmiColor()}`}>{category}</p>
            </div>

            <div className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Underweight</span>
                <span className="text-muted-foreground">{"< 18.5"}</span>
              </div>
              <div className="flex justify-between">
                <span>Normal weight</span>
                <span className="text-muted-foreground">18.5 - 24.9</span>
              </div>
              <div className="flex justify-between">
                <span>Overweight</span>
                <span className="text-muted-foreground">25 - 29.9</span>
              </div>
              <div className="flex justify-between">
                <span>Obese</span>
                <span className="text-muted-foreground">{"≥ 30"}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
