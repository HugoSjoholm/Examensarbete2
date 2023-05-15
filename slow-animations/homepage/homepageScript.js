sleep(100)
function logout() {
    window.location.href = "../"
}

function clear() {
  localStorage.removeItem('posts');

  const basePost = `<div class="post"><div class="imgContainer"><img src="https://i.redd.it/i34z4ahfzr961.jpg" alt="" srcset=""></div><div class="textContainer"><div class="handleContainer"><span class="userName">@Smurre</span><button class="trash-button"><svg class="svgIcon" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button></div><span class="postText">Bruh ingen använder denna sidan, suger ju!</span></div></div><div class="post"><div class="imgContainer"><img src="posts/1.png" alt="" srcset=""></div><div class="textContainer"><div class="handleContainer"><span class="userName">@asterix_the_king</span><button class="trash-button"><svg class="svgIcon" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button></div><span class="postText">Eyo this is a post. Var e oreo, saknar hon asså fr.</span></div></div>`;

  localStorage.setItem('posts', basePost)
}

function savePost(obj) {

    console.log('saving');
    
    document.getElementById('loadingContainer').style.display = 'block';
    document.getElementById('loadingContainer').style.opacity = '1';
    document.getElementById('loadingContainer').style.top = '40%';
    setTimeout(function() {
      document.getElementById('loadingContainer').style.display = 'none';
      document.getElementById('loadingContainer').style.opacity = '0';
      
      
      document.getElementById('loadingContainer').style.top = '-400%';

      wipePosts()
      const data = localStorage.getItem('posts');
      const parent = obj.parentNode.parentNode;
      const myTextarea = parent.querySelector('textarea').value;
      const username = localStorage.getItem('username'); 

      console.log(myTextarea.value);
      new Date().getTime()
      let html =             
      `<div class="post">`+
      `  <div class="imgContainer">`+
      `      <img src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png" alt="" srcset="">`+
      `  </div>`+
      `  <div class="textContainer">`+
      `      <div class="handleContainer">`+
      `          <span class="userName">@${username}</span>`+
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


    }, 4000);
    


    
}


function laodPosts() {

  wipePosts()
  
  let content = document.getElementById('content');
  let html = localStorage.getItem('posts') + '<div id="end"><h1>Hmm.... Här tog det slut med posts</h1></div>';
  //console.log(html)
  sleep(100);
  content.innerHTML += html;

  
  var elements = document.getElementsByClassName('post');

  // Loop through the elements and set the animation delay
  for (var i = 0; i < elements.length; i++) {
    // Set the animation delay to the index multiplied by a delay factor
    elements[i].style.animationDelay = i * 1 + 's';
  }
}

function wipePosts() {
  let allPosts = [];
  allPosts = document.getElementsByClassName('post');
  //console.log(allPosts)
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

document.getElementById('author').innerHTML += localStorage.getItem('username')

laodPosts();
document.addEventListener("mousemove", logKey);
let xPos = 0;
let yPos = 0;

function logKey(e) {
  xPos = e.screenX;
  yPos = e.screenY;
 //console.log(`${e.screenX}, ${e.screenY}`);
}

function makeDraggable() {
  
  const allPosts = document.getElementsByClassName('post');
  for (let myElement of allPosts) {
    myElement.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', event.target.id);

    });
    
    myElement.addEventListener('drag', (event) => {
      console.log("WHEEEE!!");
      const draggedElement = event.target;
      const x = event.clientX;
      const y = event.clientY;
      draggedElement.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
    
    myElement.addEventListener('dragend', (event) => {
            console.log("oop");
      const draggedElement = event.target;
      const x = event.clientX;
      const y = event.clientY;
      draggedElement.style.transform = `translate(${xPos}px, ${yPos}px)`;
      console.log(`${xPos}px ${yPos}px`);
    });
  }

}


