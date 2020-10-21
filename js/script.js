window.onload=function()
{
   onLoad();
}

loadData("ToDoTheme") || saveData("ToDoTheme", "light");
function onLoad()
{

    updateTheme(loadData("ToDoTheme"));
    document.body.style.display = "flex";
}

function updateTheme(theme){

  let bgcolor = theme=='light'? "#fffaff" : "#1c1f1d";
  let textcolor = theme=='light'? "12, 12, 12" : "255, 255, 255";
  let shadow = theme=='light'? "#000000" : "#fcfcfc";
  let sidebar = theme=='light'? "#fffaff" : "#0a0a0a";
  let shapecolor = theme=='light'? "#0D0630" : "#D80D09";

  let root=document.documentElement;
  root.style.setProperty("--background-color",bgcolor);
  root.style.setProperty("--text-color",textcolor);
  root.style.setProperty("--shadow",shadow);
  root.style.setProperty("--sidebar-1",sidebar);
  root.style.setProperty("--shapecolor",shapecolor);

  let img=document.getElementById('logo');
  let logo=theme=='light'? "logofinal.png":"logo2_white.png";
  img.setAttribute("src",logo);

  document.getElementsByClassName("current-theme")[0].classList.remove("current-theme");
  let activateclass=theme=='light'? "light":"dark";


  document.getElementById(activateclass).classList.add("current-theme");
  saveData("ToDoTheme", theme);

  let invert= theme=='light'? '0%':'100%';
  let icons=document.getElementsByClassName('icon');
  for(let i=0;i<icons.length;i++)
  {
    icons[i].style.filter=`brightness(100%) invert(${invert})`;
  }
}

var localStorage=('localStorage' in window);

function saveData(key,value)
{
  if(localStorage)
  {
    localStorage.setItem(key,value);
  }
  else{
    alert("Please use newer version of web browser");
  }
}

function loadData(key)
{
  if(localStorage)
  {
    if(key in localStorage)
    {
      return localStorage.getItem(key);
    }
  }
  else {
    alert("Please use newer version of web browser");
  }
}
