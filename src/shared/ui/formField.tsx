import { Label, Input } from "@/shared/ui";

interface FormFieldProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
}

export function FormField({ label, type, id, placeholder }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2 mb-4 w-8/10">
      <Label htmlFor={id} className="text-accent font-light">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        name={type}
        className="bg-accent-foreground text-accent"
        placeholder={placeholder}
      />
    </div>
  );
}
