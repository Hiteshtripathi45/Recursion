

function mergesort(aray){
    if (aray.length<=1) {
        return aray;
    }
    let x=Math.floor(aray.length/2)
    let a=mergesort(aray.slice(0,x))
    let b=mergesort(aray.slice(x))
    return merge(a,b)
}
function merge(a,b){
    const result=[]
    let i =0
    let j =0
    while(i<a.length && j<b.length){
        if(a[i]<b[j]){
            result.push(a[i])
            i=i+1
        }
        else {
            result.push(b[j])
            j=j+1
        }   
    }
    result.push(...a.slice(i))
    result.push(...b.slice(j))
    return result


}

z=mergesort([3, 2, 1, 13, 8, 5, 0, 1])
console.log(z)