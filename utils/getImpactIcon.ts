export const getImpactIcon = (impact: string) => {
  const icons = {
    "low carbon": "💥",
    "local": "🌍",
  }
  return icons[impact]
} 