import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Gauge, DollarSign, Activity, ArrowRightLeft, Sparkles, Zap, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
    
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
              Welcome to CalcJoy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
              Your all-in-one calculation companion. From simple math to complex conversions, we make calculations
              joyful and effortless.
            </p>
            <div className="flex gap-4 justify-center flex-wrap animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-400">
              <Button asChild size="lg" className="group relative overflow-hidden">
                <Link href="/calculators" className="relative z-10">
                  <span className="relative z-10">Explore Calculators</span>
                  <span className="absolute inset-0 animate-shimmer" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-transform duration-300 bg-transparent"
              >
                <Link href="/converters">Unit Converters</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Popular Calculators & Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 group">
              <CardHeader>
                <Calculator className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Simple Calculator</CardTitle>
                <CardDescription>Perform basic arithmetic operations with ease</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/calculators/simple">Try Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 group">
              <CardHeader>
                <Activity className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Scientific Calculator</CardTitle>
                <CardDescription>Advanced calculations for students and professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/calculators/scientific">Try Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 group">
              <CardHeader>
                <Gauge className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>BMI Calculator</CardTitle>
                <CardDescription>Calculate your Body Mass Index and health status</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/calculators/bmi">Try Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 group">
              <CardHeader>
                <DollarSign className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Income Tax Calculator</CardTitle>
                <CardDescription>Estimate your income tax and take-home pay</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/calculators/income-tax">Try Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 group">
              <CardHeader>
                <ArrowRightLeft className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Unit Converters</CardTitle>
                <CardDescription>Convert between different units instantly</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/converters">Explore</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted/30 py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Why Choose CalcJoy?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 hover:scale-105 transition-transform">
              <Zap className="w-12 h-12 mx-auto mb-4 text-accent animate-float" />
              <h3 className="text-xl font-semibold mb-3">Fast & Accurate</h3>
              <p className="text-muted-foreground">Get instant, precise results for all your calculations</p>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 hover:scale-105 transition-transform">
              <Sparkles
                className="w-12 h-12 mx-auto mb-4 text-primary animate-float"
                style={{ animationDelay: "1s" }}
              />
              <h3 className="text-xl font-semibold mb-3">Free to Use</h3>
              <p className="text-muted-foreground">All calculators and converters are completely free</p>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 hover:scale-105 transition-transform">
              <Shield className="w-12 h-12 mx-auto mb-4 text-accent animate-float" style={{ animationDelay: "2s" }} />
              <h3 className="text-xl font-semibold mb-3">Mobile Friendly</h3>
              <p className="text-muted-foreground">Works perfectly on all devices and screen sizes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
