import { create } from 'zustand';
import { supabase } from '../../utils/handlers/supabase';
import { persist, devtools } from 'zustand/middleware'

export const userData = create(devtools((set) => ({
  user: {},
  fetchUser: async () => {
    const response = await supabase.auth.getUser();
    set({ user: await response});
  },
})));
