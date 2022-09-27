export const addCart =(product) =>{
    return{
        type :"ADDITEM",
        payload: product
    }
}
export const searchResult =(product) =>{
    return{
        type: "RESULT_SEARCH",
        payload: product
    }
}
