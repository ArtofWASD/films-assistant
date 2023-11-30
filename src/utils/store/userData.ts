import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
interface userData {
  user: {
    user_metadata: {
      first_name: string;
    };
  } | null;
  films: Array<string>;
  getData: (data: any) => void;
  logOut: () => void;
}
export const userData = create<userData>()(
  devtools(
    persist(
      set => ({
        user: null,
        films: [],
        getData: data => set(() => ({ user: data }), false, "getData"),
        logOut: () => set(state => ({ user: null }), false, "logOut"),
      }),
      { name: "User" },
    )
  )
);
