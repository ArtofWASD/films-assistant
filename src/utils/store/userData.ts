import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
interface userData {
  user: {
    user_metadata: {
      first_name: string;
    };
  } | null;
  films: Array<string>;
  getData: () => void;
}
export const userData = create<userData>()(
  devtools(
    persist(
      set => ({
        user: null,
        films: [],
        getData: () => set(state => ({ user: state.user })),
      }),
      { name: 'userData' }
    )
  )
);
