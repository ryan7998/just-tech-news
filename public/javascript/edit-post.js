async function editFormHandler(event) {
    event.preventDefault();
    // get post id from url http://localhost:3001/post/1 and split
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];
    const title = document.querySelector('input[name="post-title"]').value;


    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok){
        document.location.replace('/dashboard/');
    }else{
        alert(response.statusText);
    }
}
  
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);