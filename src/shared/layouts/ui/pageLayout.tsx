import { Titlebar } from "@/shared/ui/titlebar";

interface PageLayoutProps {
    children?: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="min-h-screen w-full flex flex-col">
            <Titlebar />
            <header className="h-24">Header</header>
            <main className="page-content">{children}</main>
            <footer className="h-24">Footer</footer>
        </div>
    );
}