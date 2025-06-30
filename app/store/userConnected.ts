import { create } from 'zustand'
import { User, UserConnectedStore } from '../types/allTypes'

export const useUserConnected = create<UserConnectedStore>((set) => ({
    userConnected: null,
    setUserConnected: (autheticatedUser: User) => set({ userConnected: autheticatedUser })
}))