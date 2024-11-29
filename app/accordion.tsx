import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:text-red-500 hover:no-underline duration-300">Hru?</AccordionTrigger>
          <AccordionContent className="text-blue-700">
            I'm Good Alhamdulillah.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-yellow-400 hover:text-green-500">what do you do?</AccordionTrigger>
          <AccordionContent className="text-pink-700">
            I do job.
          </AccordionContent>
        </AccordionItem>
        </Accordion>
    );
  }
  