import { create } from 'zustand';

export const useMovieLikes = create((set) => ({
  likeCount: 0, // Corrected: Replace `.` with `,`
  addToLikes: () => set((state) => ({ likeCount: state.likeCount + 1 })),
}));
