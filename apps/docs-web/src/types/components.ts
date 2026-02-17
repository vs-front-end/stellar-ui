export interface IComponentProp {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface IComponentUsage {
  exampleCode: string;
  importCode: string;
  usageCode: string;
  props?: IComponentProp[];
}

export interface IComponentVariant {
  name: string;
  description: string;
  code: string;
  component: () => JSX.Element;
}
