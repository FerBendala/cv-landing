import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface LanguageProps {
	language: string;
	setLanguage: (language: string) => void;
}

const useLanguageStore = create<LanguageProps>()(
	persist(
		(set) => ({
			language: 'en',
			setLanguage: (language) => set({ language })
		}),
		{
			name: 'lang',
			storage: createJSONStorage(() => sessionStorage)
		}
	)
);

export default useLanguageStore;
