import { Link } from "react-router";
import { BackgroundLayout } from "@/shared/layouts";
import { FormField } from "./formField";
import { GradientButton, Button, Divider } from "@/shared/ui";
import { Github, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function LoginPage() {
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

  console.log("Form submitted:", values);
};


  return (
    <BackgroundLayout>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div
          className="flex flex-col items-center justify-center w-5/10 h-8/10 bg-accent-foreground/20 backdrop-blur-xs rounded-2xl border-border"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-full h-full gap-2 space-y-2"
          >
            <h1 className="text-3xl text-accent font-bold">Login</h1>
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
            <div className="flex flex-row text-left text-sm w-8/10">
              <span className="pl-2 text-accent">Don't have an account?</span>
              <Link
                to="/register"
                className="ml-1 text-[#18CCFC] hover:underline"
              >
                Register
              </Link>
            </div>
            <div className="flex flex-col w-full gap-0 items-center justify-center">
              <Button
                variant="secondary"
                className="mt-4 flex flex-row w-8/10 bg-[#18CCFC]/70 h-10 hover:bg-[#18CCFC]/90 items-center justify-center rounded-md px-4 text-accent font-medium shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                type="submit"
              >
                <span>Login</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
              <Divider className="w-8/10">or</Divider>
              <GradientButton
                className="flex flex-row items-center justify-center bg-accent-foreground w-8/10"
                variant="default"
                type="button"
              >
                <span className="text-accent">Log In with GitHub</span>
                <a href="">
                  <Github className="ml-1 h-6 w-6 text-accent transition-colors duration-300" />
                </a>
              </GradientButton>
            </div>
          </form>
        </div>
      </div>
    </BackgroundLayout>
  );
}
