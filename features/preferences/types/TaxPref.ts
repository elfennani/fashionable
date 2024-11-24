type TaxPref =
  | {
      type: "province";
      name: string;
      tax: number;
    }
  | {
      type: "city";
      name: string;
      tax: number;
    }
  | {
      type: "default";
      tax: number;
    };

export default TaxPref;
