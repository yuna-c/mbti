import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // 로컬 스토리지에 저장

const useTestStore = create(
  persist(
    (set) => ({
      results: [],
      currentResult: null, // 현재 테스트 결과를 저장하는 상태
      setResults: (newResults) => set({ results: newResults }), // 전체 결과 업데이트
      addResult: (newResult) => set((state) => ({ results: [...state.results, newResult] })), // 결과 추가
      setCurrentResult: (result) => set({ currentResult: result }), // 현재 결과 저장
      clearResults: () => set({ results: [], currentResult: null }) // 전체 및 현재 결과 초기화
    }),
    {
      name: 'test', // 로컬 스토리지에 저장될 키 이름
      getStorage: () => localStorage // 로컬 스토리지를 사용
    }
  )
);

export default useTestStore;
