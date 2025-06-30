import { create } from 'zustand'
import { User, UserConnectedStore } from '../types/allTypes'

const useUserConnected = create<UserConnectedStore>((set) => ({
    user: null,
    setUserConnected: (autheticatedUser: User) => set({ user: autheticatedUser })
}))