interface ValueInputProps {
    value: number
    onChange: (value: number) => void
}

function clampValue(rawValue: number, minValue: number = 0): number {
    return Number.isNaN(rawValue) ? minValue : Math.max(minValue, rawValue)
}

function ValueInput({ value, onChange }: ValueInputProps) {
    return (
        <div className="flex flex-row gap-2">
            <label className="flex items-center">
                Min. Value $
            </label>
            <input
                className="flex rounded-sm border px-2 max-w-20"
                type="number"
                min={0}
                value={value}
                onChange={(e) => onChange(clampValue(e.target.valueAsNumber))}
                onFocus={(e) => e.target.select()}
            />
        </div>
    )
}

export default ValueInput
