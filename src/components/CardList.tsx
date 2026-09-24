import type { Card } from '../types/card'
import { hasMinValue } from '../types/card'

interface CardListProps {
    cards: Card[]
    minValue: number
}

function CardList({cards, minValue}: CardListProps) {
    const visibleCards = cards.filter((card) => hasMinValue(card, minValue))

    if (cards.length === 0) {
        return (
            <p>No cards found</p>
        )
    }
    
    if (visibleCards.length === 0) {
        return (
            <p>No cards match the selected filters</p>
        )
    }

    return(
        <div className="w-full max-w-md">
            <ul className="divide-y divide-zinc-200 rounded-sm border">
            {visibleCards.map((card) => (
                <li 
                    key={card.id}
                    className="flex items-center justify-between px-4 py-2"
                >
                    <div className="flex flex-col items-start">
                        <span>{card.name}</span>
                        <span className="text-zinc-400">{card.rarity} / {card.type}</span>
                    </div>
                    <span className="font-mono">${card.price.usd}</span>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default CardList