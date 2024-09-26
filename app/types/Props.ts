import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

type ImpactProps = {
  text: string
  icon: IconDefinition
  color: string
}

type ProjectProps = {
  id: string;
  title: string;
  description: string;
  owners: string;
  status: string;
  goal: number;
  impacts: string[];
};

export type { ImpactProps, ProjectProps };