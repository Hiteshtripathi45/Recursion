function fib(num){
    let a=[]
    let b=0
    let c=1
    let d
    for(i=0;i<num;i++){
        a.push(b)   
        d=b
        b=c
        c=d+c
        
    }
    return a
}

z=fib(8)
console.log(z)


//recursively
function fibrec(num){
    if(n==0)   return []; 
    if(num==1) return [0];
    if(num==2) return [0,1];
    const squence=fibrec(num-1)
    squence.push(squence[squence.length-1]+squence[squence.length-2])
    return squence

}

y=fibrec(0)
console.log(y)

