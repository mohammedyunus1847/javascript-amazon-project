const xhr=new XMLHttpRequest();

xhr.open('Get','https://Supersimplebackend.dev');
xhr.send();


xhr.addEventListener('load',()=>{
    console.log(xhr.response)
})
