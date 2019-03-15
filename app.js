//init Classes
const github = new GitHub;
const ui = new UI;

//search
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', e => {
    //input text
    const userText = e.target.value;
    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    //show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.profile);
                }
            })
    } else {
        //clear profile
        ui.clearProfile();
    }
})