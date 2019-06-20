export function  changeClass(state,option){
    // console.log(state,option);
    // state.style = "";
    state.styleList = state.styleList2;
}
export function  removeClass(state,option){
    // console.log("removeClass");
    state.styleList = state.style;
    // state.style = "animated";
}