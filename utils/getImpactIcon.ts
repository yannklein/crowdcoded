import { faLeaf, faRecycle } from '@fortawesome/free-solid-svg-icons'
import { faCreativeCommonsZero } from '@fortawesome/free-brands-svg-icons'
import { ImpactProps } from '@/app/types/Props';

type GetImpactIcon = (impact: string) => ImpactProps

export const getImpactIcon: GetImpactIcon = (impact) => {
  const icons = {
    "SUSTAINABLE": {
      color: "#FFA653",
      icon: faRecycle,
      text: "Sustainable",
    },
    "ZERO_WASTE": {
      color: "#8975FF",
      icon: faCreativeCommonsZero,
      text: "Zero Waste",},
    "ORGANIC": {
      color: "#3AB35C",
      icon: faLeaf,
      text: "Organic",
    },
  }
  return icons[impact]
} 