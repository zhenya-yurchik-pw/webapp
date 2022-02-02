import create from 'zustand';

import { IState } from '../models/IState';

const countStore = create<IState>((set) => ({
  count: 0,
  incCount: () => set((state) => ({ count: state.count + 1 })),
  decCount: () => set((state) => ({ count: state.count - 1 })),
}));

export default countStore;
