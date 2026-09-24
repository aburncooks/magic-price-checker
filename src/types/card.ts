export interface Card {
  id: string
  name: string
  price: {
    usd: string | null
    usd_foil: string | null
    usd_etched: string | null
    eur: string | null
    eur_foil: string | null
    tix: string | null
  }
  mana_cost: string
  colours: string[]
  rarity: string
  type: string
}

export function hasMinValue(card: Card, minValue: number): boolean {
  return card.price.usd !== null && parseFloat(card.price.usd) >= minValue
}
