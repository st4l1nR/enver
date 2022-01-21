import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type props = UseFormRegisterReturn &
  React.HTMLProps<HTMLInputElement> & {
    error?: string;
  };

const TextField = React.forwardRef(({ error, ...props }: props, ref: any) => {
  return (
    <div>
      <div className={`border-2 border-gray-400 rounded-md focus-within:border-primary ${error && "border-red-500 focus-within:border-red-500"}`}>
        <input
          className="w-full px-3 py-2 text-gray-300 bg-transparent outline-none appearance-none caret-gray-400 focus:outline-none placeholder:text-gray-400"
          type="text"
          ref={ref}
          {...props}
        />
      </div>
      <div className="mt-3 text-sm font-semibold text-red-500">{error}</div>
    </div>
  );
});

export default TextField;
