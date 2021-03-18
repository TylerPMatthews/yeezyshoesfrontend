export const ADDTOCARTCOUNT = "ADDTOCARTCOUNT"
export const REMOVEFROMCARTCOUNT = "REMOVEFROMCARTCOUNT"

export const addToCartCount = () => {
    return ({
        type:ADDTOCARTCOUNT,
    })
}
export const removeFromCartCount = () => {
    return({
        type:REMOVEFROMCARTCOUNT,
    })
}
