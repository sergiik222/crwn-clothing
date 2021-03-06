import {createSelector} from "reselect";

const selectShop = state => state.shop;


export const selectIsCollectionFetching = createSelector([selectShop],
    shop => shop.isFetching)

export const selectIsCollectionLoaded = createSelector([selectShop],
    shop => !!shop.collections)

export const selectShopCollections = createSelector([selectShop],
    shop => shop.collections)

export const selectCollection = collectionUrlParam => createSelector([selectShopCollections],
    collections => collections ? collections[collectionUrlParam] : null )

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(
        key => collections[key]
    ) : []
)

export default selectShopCollections