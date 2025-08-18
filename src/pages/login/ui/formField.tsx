import { Label, Input } from "@/shared/ui";

interface FormFieldProps {
    label: string;
    type: string;
    id: string;
    placeholder: string;
}

export function FormField({ label, type, id, placeholder }: FormFieldProps) {
    return (
        <div className="flex flex-col mb-4">
            <Label htmlFor={id} className="text-accent font-light">{label}</Label>
            <Input id={id} type={type} className="bg-accent-foreground" placeholder={placeholder} />
        </div>
    );
}