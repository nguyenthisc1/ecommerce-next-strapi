import { create } from 'zustand'

type activeStoreProps = {
    active: boolean
    toggleActive: (value: boolean) => void
}

const activeStore = create<activeStoreProps>((set) => ({
    active: false,
    toggleActive: (value) => set(() => ({ active: value })),
}))

export { activeStore }
