let url  = "https://api.github.com/users";
window.fetch(url)
    .then((res)=>{ res.json()
    .then((userData)=>{
        userData.map((user)=>{
            console.log(user);
            let sub_container = document.createElement('div');
            let img_container = document.createElement('div');
            let user_container = document.createElement('h3');
            let name = document.createElement('h2');
            let type = document.createElement('h2');
            let login = document.createElement('h2');
            let main_container = document.getElementById('container');
            let img = document.createElement('img');

            name.innerText = `UserId : ${user.id}`;
            login.innerText = `Name : ${user.login}`;
            type.innerText = `Type : ${user.type}`;
            user_container.appendChild(name);
            user_container.appendChild(login);
            user_container.appendChild(type);
            main_container.appendChild(sub_container);
            sub_container.appendChild(img_container);
            sub_container.appendChild(user_container);

            img_container.appendChild(img);
            img.src=`${user.avatar_url}`;
            img.style.height="250px";
            img.style.width="250px";
            img.style.borderRadius="50px";
            sub_container.style.backgroundColor="lightgreen";
            sub_container.style.margin = "10px";
            sub_container.style.borderRadius="10px 30px";
            sub_container.style.display="flex";
            sub_container.style.alignItems="center";
            sub_container.style.cursor="pointer";
            sub_container.style.justifyContent="space-evenly";
            console.log(sub_container);

            sub_container.addEventListener("click",()=>{
                showDetails(user);
            })
        })
    });
    // console.log(res)
}).catch((err)=>{console.log("Error in fetching data "+ err)});

function showDetails(user){
    document.body.innerHTML =`
    <div style="padding:40px;text-align:center;background:lightblue;border-radius:20px;margin:38px;">
    <img src="${user.avatar_url}" style="width:300px;height:300px;border-radius:20px;">
    <h1>${user.login}</h1>

    <p style="font-size:20px;margin:10px">User ID: ${user.id}</p>
    <p style ="font-size:20px;">Profiole URL:
    <a href="${user.html_url}" target="_blank">${user.html_url}</a>
    </p>

    <button onclick="location.reload()"
    style="margin-top:30px;
    padding:15px 30px;
    font-size:18px;
    background:black;
    color:white;
    border:none;
    border-radius:10px;
    cursor:pointer;">
    Go Back
    </button>
    </div>
    `;
}