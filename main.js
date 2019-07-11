var completeData;var channelList='';
var data = [
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/ndtv.jpg'></div>",
    heading: "NDTV",
    date: "Posted on 1 June,2019 Category: Category Two",
    matter: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`,
    popUp: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit?`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/cnn.png'></div>",
    heading: "CNN",
    date: "Posted on 1 June,2019 Category: Category Two",
    matter: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`,
    popUp: `hello`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/mirror.png'></div>",
    heading: "MIRROR NOW",
    date: "Posted on 30 June,2019 Category: Category Two",
    matter: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`,
    popUp: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit?`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/indiatoday.jpg'></div>",
    heading: "INDIA TODAY",
    date: "Posted on 30 Aug,2018 Category: Category Four",
    matter: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`,
    popUp: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit?`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/zeenews.png'></div>",
    heading: "ZEE NEWS",
    date: "Posted on 2 Dec,2018 Category: Category Five",
    matter: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`,
    popUp: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit?`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/timesnow.jpg'></div>",
    heading: "TIMES NOW",
    date: "Posted on 30 Jan,2018 Category: Category Four",
    matter: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`,
    popUp: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit?`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/wion.jpg'></div>",
    heading: "WION",
    date: "Posted on 30 Jan,2018 Category: Category Five",
    matter: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`,
    popUp: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit?`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/news9.png'></div>",
    heading: "NEWS9",
    date: "Posted on 30 Jan,2018 Category: Category Four",
    matter: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`,
    popUp: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit?`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/republictv.png'></div>",
    heading: "REPUBLIC TV",
    date: "Posted on 30 Jan,2018 Category: Category Four",
    matter: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`,
    popUp: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit?`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/newsx.png'></div>",
    heading: "NEWS X",
    date: "Posted on 30 Jan,2018 Category: Category Four",
    matter: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`,
    popUp: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit?`
  }
];
var channels = [
  "NDTV",
  "CNN",
  "MIRROR NOW",
  "INDIA TODAY",
  "ZEE NEWS",
  "TIMES NOW",
  "WION",
  "NEWS9",
  "REPUBLIC TV",
  "NEWS X"
];
function all() {
  header();
  footer();
  body();
}
function header() {
  var html =
    '<h1 id="news-heading1">NEWSFEED</h1><h6 id="news-heading2"><i>Yet another newsfeed</i></h6>';
  document.getElementById("news").innerHTML = html;
}
function footer() {
  var html = '<p class="foot-text">&copy;NewsFeed 2019</p>';
  document.getElementById("foot").innerHTML = html;
}
function body() {
    for(let a=0;a<channels.length;a++){
        channelList=channelList+`<option value='`+channels[a]+`'>`+channels[a]+`</option>`;
    }
    console.log(channelList);
  completeData = '<div id="total">';
  for (let j = 0; j < data.length; j++) {
    completeData =
      completeData +
      "<div>" +
      data[j].image +
      '<h2 class="total-heading">' +
      data[j].heading +
      "</h2>" +
      '<p class="total-date">' +
      data[j].date +
      "</p>" +
      '<p class="total-content">' +
      data[j].matter +
      "</p>" +
      '<button id="myBtn" class="total-button" onclick="popUpAll(data[' +
      j +
      '])" type="button">Continue Reading</button></div>' +
      '<div id="myModal" class="modal"><div class="modal-content"><div class="modal-header">' +
      '<span onclick="closePopUp()" class="close">&times;</span><h2>More Content</h2></div>' +
      '<div id="popUp_content" class="modal-body"><p>' +
      data[j].popUp +
      "</p></div>" +
      '<div class="modal-footer">' +
      "<h3>Till Date</h3></div></div></div>";
  }
  completeData += `</div><div class="side">
        <label class="side-label"><strong>SELECT CATEGORY</strong></label><br />
        <select onchange="select()" id="side-select">
            <option value="ALL">All</option>`+channelList+
        `</select><br /><br />
        <label class="side-label2"><strong>SUBSCRIBE</strong></label><br />
        <input type="text" placeholder="Email Address" size="13" id="side-input">
        <button class="side-button" onclick="validate()" type="button">Subscribe</button>
    </div>`;
  document.getElementById("main").innerHTML = completeData;
}
function select() {
  var x = document.getElementById("side-select").value;
  if (x === "ALL") {
    var html = "";
    for (var j = 0; j < data.length; j++) {
      html =
        html +
        "<div>" +
        data[j].image +
        '<h2 class="total-heading">' +
        data[j].heading +
        "</h2>" +
        '<p class="total-date">' +
        data[j].date +
        "</p>" +
        '<p class="total-content">' +
        data[j].matter +
        "</p>" +
        '<button id="myBtn" class="total-button" onclick="showPopUp()" type="popUpAll(data[' +
        j +
        '])">Continue Reading</button>' +
        '<div id="myModal" class="modal"><div class="modal-content"><div class="modal-header">' +
        '<span onclick="closePopUp()" class="close">&times;</span><h2>More Content</h2></div>' +
        '<div class="modal-body"><p>' +
        data[j].popUp +
        "</p></div>" +
        '<div class="modal-footer">' +
        "<h3>Till Date</h3></div></div></div></div>";
    }
    document.getElementById("total").innerHTML = html;
  }
  for (var i = 0; i < data.length; i++) {
    if (x === data[i].heading) {
      var html =
        "<div>" +
        data[i].image +
        '<h2 class="total-heading">' +
        data[i].heading +
        "</h2>" +
        '<p class="total-date">' +
        data[i].date +
        "</p>" +
        '<p class="total-content">' +
        data[i].matter +
        "</p>" +
        '<button id="myBtn" class="total-button" onclick="showPopUp()" type="button">Continue Reading</button>' +
        '<div id="myModal" class="modal"><div class="modal-content"><div class="modal-header">' +
        '<span onclick="closePopUp()" class="close">&times;</span><h2>More Content</h2></div>' +
        '<div id="popUp_content" class="modal-body"><p>' +
        data[i].popUp +
        "</p></div>" +
        '<div class="modal-footer">' +
        "<h3>Till Date</h3></div></div></div></div>";
    }
    document.getElementById("total").innerHTML = html;
  }
}
function validate() {
  emailData = JSON.parse(window.localStorage.getItem("emails"));
  if (emailData == null) {
    var emailData = [];
  }
  var email = document.getElementById("side-input").value;
  if (
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)
  ) {
    emailData.push(email);
    window.localStorage.setItem("emails", JSON.stringify(emailData));
    alert("You have entered an valid email address!");
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}
function showPopUp() {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
}
function closePopUp() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}
window.onclick = function(event) {
  modal = document.getElementById("myModal");

  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function popUpAll(i) {
  document.getElementById("popUp_content").innerHTML = i.popUp;
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
}
