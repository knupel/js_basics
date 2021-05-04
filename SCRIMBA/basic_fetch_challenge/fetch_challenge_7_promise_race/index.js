const taskA = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res('a')
      },4000)
})       
} 
const taskB = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res('b')
      },2000)
})
}
const taskC = ()=>{
    return new Promise((res) => {
      setTimeout(()=>{
            res('c')
      },10000)
})
}

(async function() {
    try{
          const result = await Promise.race([taskA(),taskB(),taskC()])
          console.log(result)
    
    }catch(err){
        console.log(err)
    }
})();