import { ImpactProps } from "@/app/types";
import {
  faLeaf,
  faRecycle,
  faGraduationCap,
  faHandHoldingHeart,
  faEarthAsia,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import { faCreativeCommonsZero } from "@fortawesome/free-brands-svg-icons";

type GetImpactIcon = (impact: string) => ImpactProps | undefined;

export const getImpactIcon: GetImpactIcon = (impact) => {
  const icons = {
    SUSTAINABLE: {
      color: "#FFA653",
      icon: faRecycle,
      text: "Sustainable",
      tooltip: "This business is sustainable",
    },
    ZERO_WASTE: {
      color: "#8975FF",
      icon: faCreativeCommonsZero,
      text: "Zero Waste",
      tooltip: "This business is zero waste",
    },
    ORGANIC: {
      color: "#3AB35C",
      icon: faLeaf,
      text: "Organic",
      tooltip: "This business is organic",
    },
    EDUCATES: {
      color: "#8975FF",
      icon: faGraduationCap,
      text: "Educates",
      tooltip: "This business educates",
    },
    SOCIAL: {
      color: "#FFA1A1",
      icon: faHandHoldingHeart,
      text: "Social Hero",
      tooltip: "This business is a social hero",
    },
    CLIMATE: {
      color: "#466EFF",
      icon: faEarthAsia,
      text: "Climate Hero",
      tooltip: "This business is a climate hero",
    },
    EQUAL: {
      color: "#5ED5E5",
      icon: faScaleBalanced,
      text: "Equal",
      tooltip: "This business promotes equality",
    },
  };
  return icons[impact] || undefined;
};
