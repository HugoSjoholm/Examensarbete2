sleep(100)
function logout() {
    window.location.href = "/no-animations/index.html"
}

function clear() {
  localStorage.removeItem('posts');

  const basePost = '<div draggable="true" class="post"><div class="imgContainer"><img src="posts/1.png" alt="" srcset=""></div><div class="textContainer"><div class="handleContainer"><span class="userName">@asterix_the_king</span><button class="trash-button"><svg class="svgIcon" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button></div><span class="postText">Eyo this is a post. Var e oreo, saknar hon asså fr.</span></div></div>'

  localStorage.setItem('posts', basePost)
}

function savePost(obj) {
    wipePosts()
    const data = localStorage.getItem('posts');
    const parent = obj.parentNode.parentNode;
    const myTextarea = parent.querySelector('textarea').value;

    console.log(myTextarea.value);
    new Date().getTime()
    let html =             
    `<div draggable="true" class="post">`+
    `  <div class="imgContainer">`+
    `      <img src="posts/1.png" alt="" srcset="">`+
    `  </div>`+
    `  <div class="textContainer">`+
    `      <div class="handleContainer">`+
    `          <span class="userName">@asterix_the_king</span>`+
    `          <button class="trash-button">`+
    `              <svg class="svgIcon" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>`+
    `          </button>`+
    `      </div>`+
    `      <span class="postText">`+
    `          ${myTextarea}`+
    `      </span>`+
    `  </div>`+
    `</div>`;
    sleep(500);

    localStorage.setItem('posts', html + data)

    laodPosts();
}


function laodPosts() {

  wipePosts()
  
  let content = document.getElementById('content');
  let html = localStorage.getItem('posts') + '<div id="end"><h1>Hmm.... Här tog det slut med posts</h1></div>';
  console.log(html)
  sleep(100);
  content.innerHTML += html;

  makeDraggable();
}

function wipePosts() {
  let allPosts = [];
  allPosts = document.getElementsByClassName('post');
  console.log(allPosts)
  for (let item of allPosts) {
    item.remove();
  }
  try {
    document.getElementById('end').remove();
  } catch (error) {
    console.log("An error occurred while trying to remove the element:", error);
  }
}

async function sleep(ms) {
  await new Promise(resolve => setTimeout(resolve, ms));
}



laodPosts();

function makeDraggable() {
  
  const allPosts = document.getElementsByClassName('post');
  for (let myElement of allPosts) {
    myElement.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', event.target.id);
      const draggedElement = event.target;
      const x = event.clientX;
      const y = event.clientY;
      draggedElement.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    myElement.addEventListener('drag', (event) => {
      const draggedElement = event.target;
      const x = event.clientX;
      const y = event.clientY;
      draggedElement.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    myElement.addEventListener('dragend', (event) => {
      // do something when element is dropped
    });
  }

}

