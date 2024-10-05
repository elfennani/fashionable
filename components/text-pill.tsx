import { cn } from "@/utils/cn";

type TextPillProps = {
  children: string;
  className?: string;
};

const TextPill = ({ children, className }: TextPillProps) => {
  return (
    <p
      className={cn(
        "font-semibold py-0.5 md:py-1 px-2 md:px-3 rounded-full uppercase text-white text-[0.625rem] md:text-xs",
        className
      )}
    >
      {children}
    </p>
  );
};

export default TextPill;
