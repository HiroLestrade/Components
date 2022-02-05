function circularNavMenu(){
    /* Icon list. The complete name is <icon>-outline */
    const icons = ["add",
                    "home",
                    "person",
                    "settings",
                    "mail",
                    "key",
                    "videocam",
                    "game-controller",
                    "camera"];
    
    const menu = document.createElement("div");
    menu.className = "menu";

    const toggle = document.createElement("div");
    toggle.className = "toggle";
    const toggleIcon = document.createElement("ion-icon");
    toggleIcon.setAttribute("name", `${icons[0]}-outline`);
    toggle.appendChild(toggleIcon);
    
    /* How to toogle anithing */
    toggle.onclick = () => {
        menu.classList.toggle("active");
    }

    menu.appendChild(toggle);

    /* li > a > ion-icon */
    for(let i = 0; i < 8; i++){
        let li = document.createElement("li");
        li.style = `--i:${i}`; 

        let a = document.createElement("a");
        a.href = "#";

        let icon = document.createElement("ion-icon");
        icon.setAttribute("name", `${icons[i+1]}-outline`);

        a.appendChild(icon);
        li.appendChild(a);
        menu.appendChild(li);
    }
    

    return menu;
}

const circMenu = circularNavMenu();
document.body.appendChild(circMenu);