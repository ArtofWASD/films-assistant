import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
interface userData {
  first_name: string;
  films: Array<string>;
}
export const userData = create(
  devtools(
    persist(
      set => ({
        user: {},
        getData: (data: any) => set((state: any) => ({ user: data })),
      }),
      { name: 'userData' }
    )
  )
);
