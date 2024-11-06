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

