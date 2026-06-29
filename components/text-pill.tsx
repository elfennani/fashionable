import { cn } from "@/utils/cn";

type TextPillProps = {
  children: string;
  className?: string;
};

const TextPill = ({ children, className }: TextPillProps) => {
  return (
    <p
      className={cn(
        "font-semibold py-0.5 px-2 rounded-full uppercase text-white text-[0.625rem]",
        className
      )}
    >
      {children}
    </p>
  );
};

export default TextPill;
