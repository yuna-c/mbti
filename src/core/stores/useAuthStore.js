import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      nickname: null,
      userId: null,

      setAuth: (token, nickname, userId) => {
        set({ accessToken: token, nickname: nickname, userId: userId });
      },

      setNickname: (nickname) => {
        set({ nickname });
      },

      clearAuth: () => {
        set({ accessToken: null, nickname: null, userId: null });
      }
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage
    }
  )
);

export default useAuthStore;
