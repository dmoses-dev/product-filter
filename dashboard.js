const output = document.getElementById('dash-output')

let kapexUsers = JSON.parse(localStorage.getItem('kapex'))
output.innerHTML = kapexUsers.username
output.style.color = 'white'
