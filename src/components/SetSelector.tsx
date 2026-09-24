import * as Select from '@radix-ui/react-select'

interface SetSelectorOption {
  code: string
  name: string
  icon: string
}

interface SetSelectorProps {
  sets: SetSelectorOption[]
  value: string
  onChange: (code: string) => void
}

function SetSelector({ sets, value, onChange }: SetSelectorProps) {
  const selected = sets.find((set) => set.code === value)

  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger className="flex w-full max-w-32 items-center justify-between gap-2 rounded-sm border px-3 py-2">
        <span className="flex items-center gap-2">
          {selected && <img src={selected.icon} alt="" className="h-5 w-5" />}
          <Select.Value>
            {selected ? `${selected.code}` : undefined}
          </Select.Value>
        </span>
        <Select.Icon>▾</Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={4}
          collisionPadding={8}
          className="w-max min-w-[var(--radix-select-trigger-width)] max-w-[calc(100vw-1rem)] overflow-hidden rounded-sm border bg-white shadow"
        >
          <Select.Viewport className="p-1">
            {sets.map((set) => (
              <Select.Item
                key={set.code}
                value={set.code}
                className="flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-sm px-3 py-2 outline-none data-[highlighted]:bg-zinc-100"
              >
                <img src={set.icon} alt="" className="h-5 w-5" />
                <Select.ItemText>
                  {set.code} - {set.name}
                </Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

export default SetSelector
