
//  Q-1...

function demo(callback)
{

let a=50 ,b=100;
console.log(a)
callback(a,b);

}
function  res(var1,var2)
{    
    console.log(var1+var2)
}

demo(res);

//  Q-2...

function display(){
    setTimeout(()=>{
        console.log(1)
        setTimeout(()=>{
            console.log(2)
            setTimeout(()=>{
                console.log(3)
                setTimeout(()=>{
                    console.log(4)
                    setTimeout(()=>{
                        console.log(5)
                        setTimeout(()=>{
                            console.log(6)
                            setTimeout(()=>{
                                console.log(7)
                            },7000)
                        },6000)
                    },5000)
                },4000)
            },3000)
        },2000)
    },1000)
}

display();

//  Q-3...

var promise = new Promise((resolve,reject)=>{

    function display(){
        setTimeout(()=>{
            console.log(1)
            setTimeout(()=>{
                console.log(2)
                setTimeout(()=>{
                    console.log(3)
                    setTimeout(()=>{
                        console.log(4)
                        setTimeout(()=>{
                            console.log(5)
                            setTimeout(()=>{
                                console.log(6)
                                setTimeout(()=>{
                                    console.log(7)
                                },7000)
                            },6000)
                        },5000)
                    },4000)
                },3000)
            },2000)
        },1000)
    }
    
    display();
});
    
promise.then((result)=>{
    console.log(result)
})
    
.catch((err)=>{
    console.log(err)
})

//  Q-4...

let disp="yes"        
var promise =  new Promise (function(resolve,reject){
    if (disp){
        resolve("Promise Resolved")
    }
    else{
        reject("Promise Rejected")
    }
})
promise.then(function(result){
    console.log(result) 
})
.catch((error)=>{
    console.log(error)
})


//  Q-5...

function display(res){
    console.log("Welcome");
    resfun();
}
function resfun(){
    console.log("Google");
}
display(resfun);


//  Q-6...

function fun1(res){
    console.log('1');
    res();
}
function fun2(res){
    console.log('2')
    res();
}
function fun3(res){
    console.log('3')
    res();
}


fun1(()=>{
    fun2(()=>{
        fun3()
    })
})


//  Q-7...

var array = [1,2,3,"",4,5,6,7]

                let promise = new Promise((resolve,reject)=>{
                 
                    if(array.includes("")){
                        resolve("There is a String")
                    }
                    else{
                        reject("No Strings")
                    }
                })
                
                promise.then((a)=>{
                    console.log(a)
                })
                
                .catch((b)=>{
                    console.log(b)
                })


//  Q-8...


let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('hello')}, 1000); 
    });
async function display() {
    let result = await promise; 
    console.log(result);
    console.log('Welcome');
}
display();

//  Q-9...

const promise1 = Promise.resolve(50);
const promise2 = 500;
const promise3 = "Welcome";
const promise4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("hello");
        }, 1000);
    });

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
    console.log(values);
});