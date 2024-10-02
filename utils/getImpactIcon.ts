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
      tooltip: {
        en: "We support businesses that take action to **reduce their use of non-renewable resources** and that produce renewable goods and services. That includes reducing plastic usage and reducing our reliance on fossil fuels.",
        ja: "**非再生可能資源の使用削減**に取り組む企業や、再生可能な商品やサービスを生産する企業を支援します。これには、プラスチックの使用削減や化石燃料への依存を減らすことが含まれます。"
      }
    },
    ORGANIC: {
      color: "#3AB35C",
      icon: faLeaf,
      text: "Eco-friendly",
      tooltip: {
        en: "We support businesses that produce organic/permaculture-sourced products, that uses natural resource in a renewable way and that are **not harmful to existing eco-systems**. That includes avoiding agro-chemicals.",
        ja: "オーガニックまたはパーマカルチャー由来の製品を生産し、自然資源を再生可能な方法で使用し、**既存の生態系に害を与えない**企業を支援します。これには、農業用化学物質の回避が含まれます。"
      }
    },
    EDUCATES: {
      color: "#8975FF",
      icon: faGraduationCap,
      text: "Educates",
      tooltip: {
        en: "We support businesses that **help people acquire new knowledge and skills** to emancipate themselves and to give them more freedom to do what they want.",
        ja: "人々が新しい知識やスキルを**習得する手助け**をし、自立し、自分の望むことをするための自由を得られるよう支援する企業を支援します。"
      }
    },
    SOCIAL: {
      color: "#FFA1A1",
      icon: faHandHoldingHeart,
      text: "Social Hero",
      tooltip: {
        en: "We support businesses that **help, support and improve people's life**, that are good with their employees and their community.",
        ja: "**人々の生活を助け、支援し、改善する**企業を支援し、従業員や地域社会に対して良い姿勢を持つ企業を応援します。"
      }
    },
    CLIMATE: {
      color: "#466EFF",
      icon: faEarthAsia,
      text: "Climate Hero",
      tooltip: {
        en: "We support businesses that **fight against climate change** and that reduce their carbon footprint as much as possible.",
        ja: "**気候変動と戦い**、可能な限りカーボンフットプリントを削減する企業を支援します。"
      }
    },
    EQUAL: {
      color: "#5ED5E5",
      icon: faScaleBalanced,
      text: "Equal",
      tooltip: {
        en: "We support businesses that **promote and improve any form of equality**. That includes gender, sexual, physical appearance, cultural and economic equality.",
        ja: "**あらゆる形の平等を促進し改善する**企業を支援します。これには、性別、性的、外見、文化的、経済的平等が含まれます。"
      }
    },
  };
  return icons[impact] || undefined;
};
