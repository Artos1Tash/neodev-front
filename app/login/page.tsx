/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1ztOjIUO9hp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-mono">Login</CardTitle>
        <CardDescription className="font-mono">Please enter your username and password to login.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 font-mono">
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" placeholder="Your username" required />
        </div>
        <div className="space-y-2 font-mono">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full hover:bg-blue-500 transition-colors">Sign in</Button>
      </CardFooter>
    </Card>
  )
}