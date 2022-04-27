// likeCount = [9,12,9];
// quieries = [
//     document.querySelector("#nm"),
//     document.querySelector("#nk"),
//     document.querySelector("#jr"),
// ]
// function likes(idx){
//     likeCount[idx]++;
//     quieries[idx].innerHTML = likeCount[idx];
// }

different = [
    {'element': document.querySelector("#nm"), 'likeCount': 9},
    {'element': document.querySelector("#nk"), 'likeCount': 12},
    {'element': document.querySelector("#jr"), 'likeCount': 9},
]

function likes(idx){
    different[idx].likeCount++;
    different[idx].element.innerHTML = different[idx].likeCount;
}