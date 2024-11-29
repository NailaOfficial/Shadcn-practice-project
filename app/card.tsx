import Image from "next/image";
import { Card } from "@/components/ui/card";

const CardDemo = () => {
  return (
    <Card className=" group duration-500 w-[400px] hover:[450px] hover:bg-blue-700 hover:p-8 p-6 divide-x-2 divide-slate-300 flex justify-start item-center">
      <Image 
        src="/user.png"
        alt="User" 
        width={100} 
        height={100} 
        className="w-[50px] duration-500 h-[50px] rounded-full mr-3 group-hover:opasity-30"
      />
      <p className="pl-3 group hover:pl-10 w-full group-hover:text-white duration-500">I am Naila</p>
    </Card>
  );
};

export default CardDemo;
