async function deleteFormHandler(event){
    event.preventDefault();
    // get post id from url http://localhost:3001/post/1 and split
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
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
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);