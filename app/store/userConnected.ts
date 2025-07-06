import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { User, UserConnectedStore } from '../types/allTypes'

export const useUserConnected = create<UserConnectedStore>()(
  persist(
    (set) => ({
      userConnected: null,
      setUserConnected: (authenticatedUser: User | null) => set({ userConnected: authenticatedUser }),
    }),
    {
      name: 'user-connected-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
