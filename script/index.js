// get started button function
const appendMessage = async(searchtext)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchtext}`);
    const data = await res.json();
    const retro = data.posts;
    showDisplay(retro);
    //titleAppend(retro);

}

const showDisplay = (retros) => {
    const retroContainer = document.getElementById('message_append');
    retroContainer.innerText = '';
    console.log(retros)
    let i = 0;
    retros.forEach(retro =>{
        //console.log(retros);
        
        const retroCard = document.createElement('div');
        retroCard.classList = `flex p-2 gap-5 rounded-2xl w-full border-2 border-[#797DFC] my-2`;
        retroCard.innerHTML = `
        <div class="flex">
        <!-- White box -->
                <div class="indicator py-2">
                <span class="indicator-item badge ${retros[i]?.isActive?"bg-green-900":"bg-red-700"}"></span>
                    <div class="grid w-28 h-28 bg-base-300 place-items-center rounded-lg"><figure><img src="${retros[i].image}"></figure></div>
                  </div>
                <div class="p-2 bg-violet-50 rounded-2xl">
                

                    <div class="flex gap-5 py-1">
                      <p># ${retros[i].category}</p>
                      <p>Author : ${retros[i].author.name}</p>
                    </div>
                    <div class="py-2 px-3">
                      <h2 class="mulish_font py-2">${retros[i].title}</h2>
                      <p>${retros[i].description}</p>
                    </div>
                    <!-- icon add -->
                    <div class="flex justify-between border-t-2 border-dotted py-3">

                       <div class="flex items-center gap-7">
                        <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                          </svg>
                          <p>${retros[i].comment_count}</p>
                          </div> 

                          <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                          <p>${retros[i].view_count}</p>
                          </div>

                          <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>  
                            <p>${retros[i].posted_time} min</p>                           
                          </div>
                      
                    </div>
                      <div class="flex justify-end p-1 ">
                        <button onclick="titleAppend(${retros[i].view_count})" class="btn bg-[#3bbd92] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                          </svg>
                        </button>
                      </div>
                   


            </div>
        </div></div>`;
    retroContainer.appendChild(retroCard);
    i++;
    })
    
}
//title append
const titleAppend = async(view)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?`);
    const data = await res.json();
    const retro = data.posts;
    titleAppendfunc(view,retro);

}

const titleAppendfunc = (view,retro) =>{
    //console.log('clicked : ',view)
    const currentPost = retro.find(({view_count}) => view_count === view);

    //console.log('current : ',currentPost)
    
    const titleContainer =document.getElementById('title_append_containner');
    const newDiv = document.createElement('div');
    newDiv.classList = `flex justify-between py-3 gap-3 p-2 bg-white rounded-xl my-2 shadow-lg`;
    newDiv.innerHTML = `
    <div>
    <h3 class="mulish_font">${currentPost.title}</h3>
</div>
<div class="flex justify-between gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"          stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
      <span>${currentPost.view_count}</span>
</div>
    
    `;
    titleContainer.appendChild(newDiv);



  const countElement = document.getElementById('count_number');
  const countText = countElement.innerText;
  const countNum = parseInt(countText)
  const countTitle = countNum + 1;
  countElement.innerText = countTitle;

  countElement.appendChild(countTitle);

};




// Catagory search
const catacorySearch = () =>{
    const searchField = document.getElementById('catagory_search');
    const searchText = searchField.value;
    console.log(searchText);
    appendMessage(searchText);

    
}



// latest post section er function

const latestPost = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const latestData = data;
    showlatestPost(latestData);
    
}
const showlatestPost = (posts) =>{
    //console.log(posts)
    //console.log(posts.title)
    const latestpostContainer = document.getElementById('latest_post_container');
    let i = 0;
    posts.forEach(latest =>{
       // console.log(posts[i].title)
        

        //console.log(latest);
        const postCard = document.createElement('div');
        postCard.classList = `card  bg-base-100 shadow-xl`;
        postCard.innerHTML =`
                <figure><img src="${posts[i].cover_image}"/></figure>
                <div class="card-body">
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                          </svg>
                            <p>${posts[i].author.posted_date || `Not published date`}</p>                          
                    </div>
                  <h3 class="mulish_font">${posts[i].title}</h3>
                  <p>${posts[i].description}</p>
                  <div class="flex gap-4 items-center py-2"><img src="images/images/Ellipse 1.png">
                    <div>
                        <p class="mulish_font">${posts[i].author.name}</p>
                        <p>${posts[i].author.designation || `Unknown`}</p>
                    </div>
                </div>      
        `;
        latestpostContainer.appendChild(postCard);
        i++;
    })
}

latestPost();