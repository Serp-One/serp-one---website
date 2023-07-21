import { cn } from "@/lib/utils";

export const TextGradient: React.FC<any> = ({ className = "", ...rest }) => (
  <span
    className={cn(
      "text-transparent bg-clip-text bg-gradient-to-l from-[#ad5389] to-[#3c1053]",
      className
    )}
    {...rest}
  />
);

export const PageContaier: React.FC<any> = ({ className = "", ...rest }) => (
  <div className={cn("w-full m-auto max-w-7xl px-4 md:px-8", className)} {...rest} />
);

export const ZStack: React.FC<any> = ({ children, ...rest }) => (
  <div className="grid grid-cols-1 grid-rows-1">
    {(Array.isArray(children) ? children : [children])?.map(
      (elem: React.ReactNode, i: number) => (
        <div
          key={i}
          className={cn(
            ["z-[0]", "z-[1]", "z-[2]", "z-[3]", "z-[4]", "z-[5]", "z-[6]", "z-[7]", "z-[8]"][i],
            "col-start-1 row-start-1 col-span-1 row-span-1"
          )}
        >
          {elem}
        </div>
      )
    )}
  </div>
);
