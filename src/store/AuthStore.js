import { create } from 'zustand';

const useAuthStore = create((set) => ({
  // 초기값을 localStorage에서 가져옴
  accessToken: localStorage.getItem('accessToken') || null,
  nickname: localStorage.getItem('nickname') || null,
  userId: localStorage.getItem('userId') || null,

  // 사용자 정보를 저장하는 함수
  setAuth: (token, nickname, userId) => {
    set({ accessToken: token, nickname: nickname, userId: userId });
    localStorage.getItem('accessToken');
    localStorage.getItem('nickname');
    localStorage.getItem('userId');
  },

  // 로그아웃 함수 (모든 정보를 초기화)
  clearAuth: () => {
    set({ accessToken: null, nickname: null, userId: null });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('nickname');
    localStorage.removeItem('userId');
  }
}));

export default useAuthStore;
