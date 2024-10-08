import { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { JsonValue } from "@prisma/client/runtime/library";

export type ImpactProps = {
  text: string;
  icon: IconDefinition;
  color: string;
  tooltip?: string;
};

export type ProjectProps = {
  // from project table
  id: string;
  title: string;
  description: string;
  status: string;
  goal: number;
  impacts: string[];
  ownersPicture?: string;
  projectPicture?: string;
  gmapsUrl?: string;
  links?: JsonValue;
  // to be get rid of
  owners: string;
  mission: string;
  // from project_translations table
  projectTranslations: { 
    id: string;
    title: string;
    description: string;
    owners: string;
    lang: string;
    meetStory: JsonValue;
    mission: string;
    work: string;
    milestones?: {
      id: string;
      stepNb: number;
      date: Date;
      title: string;
      description: string;
      completed: boolean;
    }[];
  }[];
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
