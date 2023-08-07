import { create } from "zustand";
import { createApi } from "unsplash-js";

import { Photos } from "./types/Photos";

const unsplash = createApi({
    accessKey: `${process.env.UNSPLASH_ACCESS_KEY}`,
});

interface CoverPhotosState {
    photos: Photos[];
}

const useCoverPhotosStore = create<CoverPhotosState>((set) => ({
    photos: [],
    getPhotosList: async () => {
        const { response } = await unsplash.photos.list({
            page: 1,
            perPage: 12,
        });
        set({ photos: response.results });
    },
}));

export default useCoverPhotosStore;
