const profile = document.getElementById('profile');
const userInfo = document.getElementById('user-info');
const btnContainer = document.getElementById('btn-container');

const userProfile = [
    {
        name: 'Tanya Sinclair',
        designation: 'UX Engineer',
        about:
            'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ',
        image: './images/image-tanya.jpg',
    },

    {
        name: 'John Tarkpor',
        designation: 'Junior Front-end Developer',
        about:
            'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.',
        image: './images/image-john.jpg',
    },
];

function renderDOM(user) {
    profile.innerHTML = ` <img src="${user.image}" alt="Tanya" class="profile" />`;
    userInfo.innerHTML = `
    <p>
        " ${user.about} "
    </p>
    <p><span>${user.name}</span> ${user.designation}</p>
    `;
}

btnContainer.addEventListener('click', (e) => {
    const btn = e.target;
    if (btn.classList.contains('left')) {
        renderDOM(userProfile[0]);
    }
    if (btn.classList.contains('right')) {
        renderDOM(userProfile[1]);
    }
});
