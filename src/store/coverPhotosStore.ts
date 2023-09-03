import { create } from "zustand";
import { createApi } from "unsplash-js";

const unsplash = createApi({
    accessKey: `${process.env.UNSPLASH_ACCESS_KEY}`,
});

interface CoverPhotosState {
    photos: any;
    getPhotosList: () => void;
    getSearchedPhotos: (query: string) => void;
}

const useCoverPhotosStore = create<CoverPhotosState>((set) => ({
    photos: [],
    getPhotosList: async () => {
        const { response } = await unsplash.photos.list({
            page: 1,
            perPage: 12,
        });
        set({ photos: response?.results });
    },
    getSearchedPhotos: async (query) => {
        const { response } = await unsplash.search.getPhotos({
            query,
            page: 1,
            perPage: 12,
        });
        set({ photos: response?.results });
    },
}));

export default useCoverPhotosStore;
