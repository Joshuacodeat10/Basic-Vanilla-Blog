document.addEventListener('DOMContentLoaded', ()=>{
    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => 
        response.json()

    ).then(blogPosts => DisplayBlogs(blogPosts)
    
).catch(err => console.log('You have an error which is',err)
    )
    function DisplayBlogs(blogPosts){
        for(post of blogPosts){
           const blogContainer= document.querySelector('.blog-posts')
           const div=document.createElement('div')
           div.className='posts'
           const h2= document.createElement('h2')
           h2.innerText=post.title
            const p =document.createElement('p')
           
            p.innerText=post.body;
            // document.createElement('')
         
           const button= document.createElement('button')
           button.innerText='delete'
           button.className='delete'
        button.addEventListener('click',function(){
            fetch('https://jsonplaceholder.typicode.com/posts/post.id',{
                method:'DELETE'
            }).then(div.remove())
            })

           blogContainer.appendChild(div)
           div.appendChild(h2)
           div.appendChild(p)
           div.appendChild(button)
        }
    }
    
})