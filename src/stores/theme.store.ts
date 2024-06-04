import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface FilterProps {
	theme: 'light' | 'dark';
	setTheme: (shouldChange: boolean) => void;
}

const useThemeStore = create<FilterProps>()(
	persist(
		(set) => ({
			theme: 'dark',
			setTheme: (shouldChange) => {
				if (shouldChange) {
					set((state) => ({
						theme: state.theme === 'dark' ? 'light' : 'dark'
					}));
				}
			}
		}),
		{
			name: 'theme',
			storage: createJSONStorage(() => sessionStorage)
		}
	)
);

export { useThemeStore };
