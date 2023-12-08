var createAforNav=document.createElement("a");

var arraysofimg=["./images/home.PNG","./images/shorts.png","./images/video-player.png","./images/profile-user.png","./images/history.png","./images/video.png","./images/clock.png","./images/down-arrow.png","./images/scissors.png","https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/d8kYE1c2rp8m9AiF1-CpIWes0P_PSuRK8R2PjEdLWH9tcPMf07xOE84uSTxL4EbUVXwNhgnPfw=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/DF0VUrCJ4NcHt9dw00zp27HsyOcMFxV4oj-CtkrDpZUeYhPOdnCsFmuMFJsiKSnny3F-piAfNQ=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/gG8joV0APHpj56Xbc0k3imJiMMyiLc03x-1s35MG62JP2TZ7k4qRGoCp9mrv_gflRX93JpMVG5M=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/V-Plqct7lx8nppN7ud386lMMBv9U4qLYZ4x2kx3fvJqIBW53wtAGk8cl2SwzwLBXTSfbLahT=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/az7obtT6R2I2B1Wv-jOMaX8bb4VkBYCAeYlLWe3qH2NgLDnzmmxQ51bESxD8krkbJYaVbNiaNdg=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/OzT7YQEK7nXL_r9cv5N67nZlvZyfoe1qGySJxDCB6CCuIM-aWYfBdeYkDZiL4RGrAHBRO0Wq=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/FWfiAj5FsyKP5oK_Kvj995u-C-IcrxbD6FtQcBhVMWRlbfv-euqNW7-kCbioKMSBv3iHwwDQsw=s88-c-k-c0x00ffffff-no-rj","./images/down-arrow.png","./images/trend.png","./images/mic.png","./images/football.png","./images/games.png","./images/idea.png","./images/shopping-cart.png","./images/fashion.png","./images/news.png"];
var arraysofpara=["Home","Shorts","Subscriptions","Your Channel"," history","your Videos","Watch Later","Show more","your Clips","Netflix India","Error makes","Today Trending","Topper Guild","Teddy Bear","Gamer","Selena art","EF gaming","Show 294 More","Trending","Podcast","Sports","Games","Eduction","Shopping","Fashion","NEWS"];
var numofImg=[];
for(var k in arraysofimg){
  values(arraysofimg[k],arraysofpara[k])
}

//for search-icon
document.querySelector(".search").addEventListener("click",()=>{
  document.querySelector(".inputBox").style.display="block";
  document.querySelector(".user").classList.toggle("hide");
  document.querySelector(".logo").classList.toggle("hide");
  document.querySelector(".hamburger").classList.toggle("hide");
  document.getElementsByTagName("header")[0].style.paddingLeft="0.5rem";
});



//start of side-nav
function openCloseNav() {
    document.getElementById("mySidenav").classList.toggle("slide");
    document.querySelector(".filters").classList.toggle("left-for-filters");
    document.querySelector(".video-container").classList.toggle("for-side-mar");
   
  }

function values(image,paragraph){

numofImg.push(image);

var createDivforNav=document.createElement("div");
var createimgforNav=document.createElement("img");
var createparaforNav=document.createElement("p");
    
createDivforNav.classList.add("style-nav");
createimgforNav.src=image;
createparaforNav.textContent=paragraph;

createDivforNav.appendChild(createimgforNav);
createDivforNav.appendChild(createparaforNav);


document.getElementById("mySidenav").appendChild(createDivforNav);

if(numofImg.length === 3 ){
  forHR();
  //for-nav title
  var par=document.createElement("p");
  par.innerHTML="You >";
  par.classList.add("for-p");
  document.getElementById("mySidenav").appendChild(par);
}
else if(numofImg.length === 9){
  var par=document.createElement("p");
  par.innerHTML="Subscription";
  par.classList.add("for-p");
  forHR();
  document.getElementById("mySidenav").appendChild(par);
}
else if(numofImg.length === 18){
  var par=document.createElement("p");
  par.innerHTML="Explore";
  par.classList.add("for-p");
  forHR();
  document.getElementById("mySidenav").appendChild(par);
}
}

if(numofImg.length === arraysofimg.length ){
  document.getElementById("mySidenav").innerHTML+="<hr />";
  let desc=document.createElement("p");
  desc.innerHTML="@Copywrite 2023";
  desc.classList.add("for-desc");
  document.getElementById("mySidenav").appendChild(desc);
  forHR();
}
function forHR(){
  document.getElementById("mySidenav").innerHTML+="<hr />";
}

document.querySelector(".style-nav").style.background="rgb(86, 85, 90)";
document.querySelector(".style-nav").style.borderRadius="8px";
//end of side-nav

//video-Container
const videoCardContainer = document.querySelector('.video-container');

let api_key = "AIzaSyAnMqeWFfVBq6sLGkJwnQeeZiWToD-CqhI";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 20,
    regionCode: 'IN'
}))
.then(res => res.json())
.then(data => {
    data.items.forEach(item => {
        getChannelIcon(item);
    })
})
.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data => {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
    })
}

const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
}

// search bar

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})