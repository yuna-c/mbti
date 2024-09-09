import { create } from 'zustand';

const useTestStore = create((set) => ({
  results: [],
  setResults: (newResults) => set({ results: newResults }), // 결과 업데이트
  addResult: (newResult) => set((state) => ({ results: [...state.results, newResult] })), // 결과 목록 저장
  // setLoading: (isLoading) => set({ loading: isLoading }), // 로딩 상태 업데이트
  clearResults: () => set({ results: [] }) // 결과 초기화
}));

export default useTestStore;
