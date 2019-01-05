const github = new GitHub;
const ui = new UI;

const searchUser = document.getElementById('searchUser');

// Add event listener to input

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make http call

        github.getUser(userText).then( data =>{


            if(data.profile.message === 'Not Found'){
                ui.showAlert('User Not Found', "alert alert-danger");

            }else{
                ui.showUser(data.profile);
                ui.showRepos(data.repo);
            }
        });

    }else{
        // Clear profile

        ui.clearProfile();
    }


});