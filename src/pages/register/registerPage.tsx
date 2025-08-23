import { Link } from "react-router";
import { toast } from "sonner";

import { BackgroundLayout } from "@/shared/layouts";
import { Button, FormField } from "@/shared/ui";

export function RegisterPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const values = Object.fromEntries(data.entries());

    toast("Submission data", {
      description: JSON.stringify(values, null, 2),
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };

  return (
    <BackgroundLayout>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="flex flex-col items-center justify-center w-5/10 h-8/10 bg-accent-foreground/20 backdrop-blur-xs rounded-2xl border-border">
          <form
            className="flex flex-col items-center justify-center w-full h-full gap-2 space-y-2"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl text-accent font-bold">Register</h1>
            <FormField
              label="Name"
              type="name"
              id="name"
              placeholder="Enter your name"
            />
            <FormField
              label="Email"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
            <FormField
              label="Password"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
            <FormField
              label="Confirm password"
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
            />
            <div className="flex flex-row text-left text-sm w-8/10">
              <span className="pl-2 text-accent">Already have an account?</span>
              <Link to="/login" className="ml-1 text-[#18CCFC] hover:underline">
                Login
              </Link>
            </div>
            <Button
              variant="secondary"
              className="mt-4 flex flex-row w-8/10 bg-[#18CCFC]/70 h-10 hover:bg-[#18CCFC]/90 items-center justify-center rounded-md px-4 text-accent font-medium shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              type="submit"
            >
              <span>Register</span>
            </Button>
          </form>
        </div>
      </div>
    </BackgroundLayout>
  );
}
