import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {
  return (
    <Card className="group duration-500 w-[350px] bg-black hover:bg-blue-600 border-2 border-green-500">
      <CardHeader>
        <CardTitle className="text-green-500">Create project</CardTitle>
        <CardDescription className="text-green-500">Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-green-600">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework" className="text-green-500">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next" className="text-green-500">Next.js</SelectItem>
                  <SelectItem value="sveltekit" className="text-green-500">SvelteKit</SelectItem>
                  <SelectItem value="astro" className="text-green-500">Astro</SelectItem>
                  <SelectItem value="nuxt" className="text-green-500">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="text-green-500 bg-blue-950 hover:bg-green-400">Cancel</Button>
        <Button className="text-green-500 bg-blue-950 hover:bg-green-400">Deploy</Button>
      </CardFooter>
    </Card>
  )
}
