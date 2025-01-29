let btn = document.getElementById('btn');
btn.addEventListener("click", () => {
    cardData.forEach(card => {
        createCard(card.thumbnail, card.title, card.time, card.cname, card.views, card.day)
    })

})
function formatteTime(day) {
    let years = Math.floor(day / 365);
    let months = Math.floor((day % 365) / 30);
    let days = day % 30;
    let timestr = "";
    if (years > 0) {
        timestr += years + " years ";
    }
    if (months > 0) {
        timestr += months + " months ";
    }
    if (days > 0 || (years === 0 && months === 0)) {
        timestr += days + " days";
    }

    return timestr.trim();
}
function createCard(thumbnail, title, time, cname, views, day) {
    let viewstr;
    if (views < 1000) {
        viewstr = views;
    } else if (views >= 1000000) {
        viewstr = (views / 1000000).toFixed(1) + "M";
    } else {
        viewstr = (views / 1000).toFixed(1) + "K";
    }
    let timedata = formatteTime(day);
    let html = ` <div class="card">
            <div class="imgContainer">
                <img src=${thumbnail} alt="" >
            <p id="time">${time}</p>
            </div>
            <div class="layoutPara">
                <h3>${title}</h3>
                <p>${cname} . ${viewstr} views . ${timedata} ago</p>
            </div>
            </div>`
    document.querySelector(".container").innerHTML += html;
}
let cardData = [
    {
        thumbnail: "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA"
        , title: "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1"
        , time: "33.11",
        cname: "CodeWithHarray",
        views: "1200000",
        day: "500"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg"
        , title: "Your First HTML Website | Sigma Web Development Course - Tutorial #2"
        , time: "33.11",
        cname: "CodeWithHarray",
        views: "134000",
        day: "475"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDpdOoVMCl1Z3qDixA988oU8Cot0w"
        , title: "Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3"
        , time: "33.11",
        cname: "CodeWithHarray",
        views: "129800",
        day: "345"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAPrVzyLHFYcUIk5bv_LXaJrgOztA"
        , title: "Basic css and properties| Sigma Web Development Course - Tutorial #4"
        , time: "33.11",
        cname: "CodeWithHarray",
        views: "1903300",
        day: "234"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/1BsVhumGlNc/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBzUcEscAQXVAJpBm0Ta4GoTrML6Q"
        , title: "Basic JS and properties| Sigma Web Development Course - Tutorial #5"
        , time: "33.11",
        cname: "CodeWithHarray",
        views: "120",
        day: "10"
    }
]

