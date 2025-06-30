import { create } from 'zustand'
import { User, UserConnectedStore } from '../types/allTypes'

export const useUserConnected = create<UserConnectedStore>((set) => ({
    userConnected: null,
    setUserConnected: (autheticatedUser: User | null) => set({ userConnected: autheticatedUser })
}))