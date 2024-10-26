/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { cn } from "@/utils/cn";
import * as React from "react";
import { Range, getTrackBackground } from "react-range";
import colors from "tailwindcss/colors";

type Props = {
  steps?: number;
  min?: number;
  max?: number;
  values: readonly [number, number];
  onChange: (range: [number, number]) => void;
};

const RangeInput: React.FC<Props> = ({
  max = 100,
  min = 0,
  steps = 1,
  onChange,
  values: newValues,
}) => {
  const [values, setValues] = React.useState(newValues as unknown as number[]);

  React.useEffect(() => {
    setValues(values);
  }, [newValues]);

  return (
    <div className="flex flex-wrap flex-col">
      <Range
        values={values as [number, number]}
        step={steps}
        min={min}
        max={max}
        rtl={false}
        onChange={setValues}
        onFinalChange={(values) => {
          onChange(values as [number, number]);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              className="h-0.5 w-full rounded self-center"
              style={{
                background: getTrackBackground({
                  values: values as [number, number],
                  colors: [
                    colors.neutral[200],
                    colors.rose[400],
                    colors.neutral[200],
                  ],
                  min,
                  max,
                  rtl: false,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            key={props.key}
            className={cn("w-1 h-4 bg-neutral-700", isDragged && "bg-rose-500")}
          />
        )}
      />
      <output className="mt-2" id="output">
        <span className="text-rose-400 font-semibold">
          {values[0].toFixed(1)} MAD
        </span>{" "}
        à{" "}
        <span className="text-rose-400 font-semibold">
          {values[1].toFixed(1)} MAD
        </span>
      </output>
    </div>
  );
};

export default RangeInput;
