import { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ImpactProps = {
  text: string;
  icon: IconDefinition;
  color: string;
  tooltip?: string;
};

export type ProjectProps = {
  id: string;
  title: string;
  description: string;
  owners: string;
  status: string;
  goal: number;
  mission: string;
  impacts: string[];
};

// ContactForm component
export type ContactFormProps = {
  formId: string;
  dict: any;
};

// HowItWorks component
export type Step = {
  icon: IconProp;
  description: JSX.Element;
};

// Tooltip component
export type TooltipProps = {
  message: string;
  children: ReactNode;
};
