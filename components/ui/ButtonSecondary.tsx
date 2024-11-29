// components/ui/ButtonSecondary.tsx
import { Button } from "@/components/ui/button";

interface ButtonSecondaryProps {
  text: string;
  className?: string;  // Allow className to be passed as a prop
}

export function ButtonSecondary({ text, className }: ButtonSecondaryProps) {
  return (
    <Button variant="secondary" className={className}>
      {text}
    </Button>
  );
}
