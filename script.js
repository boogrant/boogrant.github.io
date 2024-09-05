

document.getElementById('new-post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const content = document.getElementById('post-content').value;

    const postContainer = document.getElementById('posts');

    const postElement = document.createElement('div');
    postElement.className = 'post';

    postElement.innerHTML = `
        <strong>${username}</strong>
        <p>${content}</p>
        <span class="like-btn" onclick="toggleLike(this)">❤️</span>
    `;

    postContainer.appendChild(postElement);

    // Clear the form
    document.getElementById('new-post-form').reset();
});

function toggleLike(button) {
    const heart = '❤️';
    const emptyHeart = '🤍';
    button.textContent = button.textContent === heart ? emptyHeart : heart;
}