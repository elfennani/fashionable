import { ReactNode } from "react";

type Props = { label: string; children: ReactNode | ReactNode[] };

const FormInputContainer = (props: Props) => {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-semibold tracking-tight uppercase">
        {props.label}
      </span>
      {props.children}
    </label>
  );
};

export default FormInputContainer;
