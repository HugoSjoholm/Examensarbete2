function logout() {
    window.location.href = "/no-animations/index.html"
}

function savePost(obj) {
    const parent = obj.parentNode.parentNode;
    const myTextarea = parent.querySelector('textarea');

    console.log(myTextarea.value);

}

const content = document.getElementById('content');

// Fetch all post files
fetch('posts/')
  .then(response => response.json())
  .then(files => {
    // Loop through each post file
    files.forEach(file => {
      // Fetch the post data
      fetch(`posts/${file}`)
        .then(response => response.json())
        .then(post => {
            console.log(response);
          // Create HTML elements for the post
          const postElement = document.createElement('div');
          postElement.classList.add('post');
          content.appendChild(postElement);
          
          const imgContainer = document.createElement('div');
          imgContainer.classList.add('imgContainer');
          postElement.appendChild(imgContainer);
          
          const img = document.createElement('img');
          img.src = `posts/${post.profile_pic}`;
          img.alt = '';
          imgContainer.appendChild(img);
          
          const textContainer = document.createElement('div');
          textContainer.classList.add('textContainer');
          postElement.appendChild(textContainer);
          
          const handleContainer = document.createElement('div');
          handleContainer.classList.add('handleContainer');
          textContainer.appendChild(handleContainer);
          
          const username = document.createElement('span');
          username.classList.add('userName');
          username.textContent = post.username;
          handleContainer.appendChild(username);
          
          const trashButton = document.createElement('button');
          trashButton.classList.add('trash-button');
          handleContainer.appendChild(trashButton);
          
          const trashIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          trashIcon.setAttribute('class', 'svgIcon');
          trashIcon.setAttribute('viewBox', '0 0 448 512');
          trashButton.appendChild(trashIcon);
          
          const trashPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          trashPath.setAttribute('d', 'M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z');
          trashIcon.appendChild(trashPath);
          
          const postText = document.createElement('span');
          postText.classList.add('postText');
          postText.textContent = post.text;
          textContainer.appendChild(postText);
        });
    });
  })
  .catch(error => console.error(error));


  async function loopThroughFilesInDirectory(dirPath) {
    // Make a GET request to retrieve the list of files in the directory
    const response = await fetch(dirPath);
    console.log("reached here");
    let files = await response;
    console.log(files);
    files = files.json();
    // Initialize an array to store file paths
    const filePaths = [];
    console.log("reached here 2 ");

    // Loop through all files
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
  
      // Check if file is a directory
      if (file.type === 'dir') {
        // If file is a directory, loop through its files recursively
        const nestedFilePaths = await loopThroughFilesInDirectory(file.path);
        filePaths.push(...nestedFilePaths);
      } else {
        // If file is not a directory and has a .json extension, add its path to the array
        if (file.path.endsWith('.json')) {
            console.log(file.path);
          filePaths.push(file.path);
        }
      }
    }
  
    // Return the array of file paths
    console.log(filePaths);
    return filePaths;
  }
  