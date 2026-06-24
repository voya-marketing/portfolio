import { cn } from "@/components/shared/cn";

export default function Container({
  children,
  className
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={cn("mx-auto max-w-[1440px] px-6 md:px-20", className)}>
      {children}
    </div>
  );
}
