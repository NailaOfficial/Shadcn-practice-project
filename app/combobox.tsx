"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
      },
      {
        value: "react",
        label: "React",
      },
      {
        value: "node.js",
        label: "Node.js",
      },
      {
        value: "express",
        label: "Express",
      },
      {
        value: "vue.js",
        label: "Vue.js",
      },
      {
        value: "angular",
        label: "Angular",
      },
      {
        value: "svelte",
        label: "Svelte",
      },
      {
        value: "nestjs",
        label: "NestJS",
      },
      {
        value: "gatsby",
        label: "Gatsby",
      },
      {
        value: "vuex",
        label: "Vuex",
      },
      {
        value: "tailwindcss",
        label: "Tailwind CSS",
      },
      {
        value: "bootstrap",
        label: "Bootstrap",
      },
      {
        value: "chakra-ui",
        label: "Chakra UI",
      },
      {
        value: "material-ui",
        label: "Material-UI",
      },
      {
        value: "mongodb",
        label: "MongoDB",
      },
      {
        value: "postgresql",
        label: "PostgreSQL",
      },
      {
        value: "graphql",
        label: "GraphQL",
      },
      {
        value: "apollo",
        label: "Apollo",
      },
      {
        value: "docker",
        label: "Docker",
      },
      {
        value: "firebase",
        label: "Firebase",
      },
      {
        value: "redux",
        label: "Redux",
      },
      {
        value: "typescript",
        label: "TypeScript",
      },
      {
        value: "webpack",
        label: "Webpack",
      },
      {
        value: "parcel",
        label: "Parcel",
      },
      {
        value: "webpack-dev-server",
        label: "Webpack Dev Server",
      },
      {
        value: "nestjs",
        label: "NestJS",
      },
      {
        value: "laravel",
        label: "Laravel",
      },
      {
        value: "django",
        label: "Django",
      },
      {
        value: "ruby-on-rails",
        label: "Ruby on Rails",
      },
      {
        value: "flutter",
        label: "Flutter",
      },
]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
                <ScrollArea className="h-72 rounded-md border">
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
              </ScrollArea>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
