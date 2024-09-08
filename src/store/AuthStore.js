import { create } from 'zustand';

const useAuthStore = create((set) => ({
  // 초기값을 localStorage에서 가져옴
  accessToken: localStorage.getItem('accessToken') || null,
  nickname: localStorage.getItem('nickname') || null,
  userId: localStorage.getItem('userId') || null,

  // 사용자 정보를 저장하는 함수
  setAuth: (token, nickname, userId) => {
    set((state) => ({
      ...state, // 기존 상태를 유지
      accessToken: token,
      nickname: nickname,
      userId: userId
    }));
    localStorage.setItem('accessToken', token);
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('userId', userId);
  },

  // 로그아웃 함수 (모든 정보를 초기화)
  clearAuth: () => {
    set((state) => ({
      ...state, // 기존 상태를 유지
      accessToken: null,
      nickname: null,
      userId: null
    }));
    localStorage.removeItem('accessToken');
    localStorage.removeItem('nickname');
    localStorage.removeItem('userId');
  }
}));

export default useAuthStore;
