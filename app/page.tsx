// import { Accordion } from "@/components/ui/accordion";
import Image from "next/image";
import { AccordionDemo } from "./accordion";
import { AlertDialogDemo } from "./alertDialog";
import { InputDemo } from "./inputField";
import CardDemo from "./card";
import { CardWithForm } from "./card2";
import { CalendarDemo } from "./calendarDemo";
import { TypographyH1 } from "./heading";
import { ButtonSecondary } from "@/components/ui/ButtonSecondary";
import { ComboboxDemo } from "./combobox";

export default function Home() {
  return (
    <div className="bg-slate-400">
      <h1 className="scroll-m-20 text-4xl text-green-400 text-center font-extrabold tracking-tight lg:text-5xl bg-black">
        Shadcn Ui
      </h1>
      <div className="p-10"></div>
      <AccordionDemo />
      <AlertDialogDemo />

      <h1 className="scroll-m-20 text-4xl text-white text-center font-extrabold tracking-tight lg:text-5xl bg-black pb-4 pt-4">
        Shadcn Ui Card and Components
      </h1>
      <div className="p-10 w-screen h-screen flex justify-around items-center">
        <CardDemo />
        <CardWithForm />
      </div>
      <h1 className="scroll-m-20 text-4xl text-red-700 text-center font-extrabold tracking-tight lg:text-5xl bg-black pb-4 pt-4">
        Shadcn Ui Calneder/Heading and Buttons
      </h1>
      {/* Main div */}
      <div className="p-5 m-7">
        {/* Heading and Buttons */}
        <div className="flex flex-col gap-4 items-start">
          <TypographyH1 />
          <div className="flex gap-4 group">
          <ButtonSecondary className="group-hover:bg-yellow-400 group-hover:text-black bg-black text-red-700" text={"Search"} />
          <ButtonSecondary className="group-hover:bg-yellow-400 group-hover:text-black bg-black text-red-700" text={"Profile"} />
        </div>
        </div>
        {/* Calendar div */}
        <div className="flex justify-center items-center p-5 text-red-700">
          <CalendarDemo />
        </div>
      </div>
      <h1 className="scroll-m-20 text-4xl text-orange-700 text-center font-extrabold tracking-tight lg:text-5xl bg-black pb-4 pt-4">
        Shadcn Ui Combobox Components
      </h1>

      <div className="flex justify-center pt-8 pb-8 mt-8 bg-gray-900">
        <ComboboxDemo/>
      </div>
    </div>
  );
}
