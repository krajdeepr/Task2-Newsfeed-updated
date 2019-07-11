var completedata;
var data=[
    {
        image:"<div class='total-picture'></div>",
        heading:"NDTV",
        date:"Posted on 1 June,2019 Category: Category Two",
        matter:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`
    },
    {
        image:"<div class='total-picture'></div>",
        heading:"CNN",
        date:"Posted on 1 June,2019 Category: Category Two",
        matter:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`
    },
    {
        image:"<div class='total-picture'></div>",
        heading:"MIRROR NOW",
        date:"Posted on 30 June,2019 Category: Category Two",
        matter:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`
    },
    {
        image:"<div class='total-picture'></div>",
        heading:"INDIA TODAY",
        date:"Posted on 30 Aug,2018 Category: Category Four",
        matter:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`
    },
    {
        image:"<div class='total-picture'></div>",
        heading:"ZEE NEWS",
        date:"Posted on 2 Dec,2018 Category: Category Five",
        matter:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`
    },
    {
        image:"<div class='total-picture'></div>",
        heading:"TIMES NOW",
        date:"Posted on 30 Jan,2018 Category: Category Four",
        matter:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`

    },
    {
        image:"<div class='total-picture'></div>",
        heading:"WION",
        date:"Posted on 30 Jan,2018 Category: Category Five",
        matter:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`

    },
    {
        image:"<div class='total-picture'></div>",
        heading:"NEWS9",
        date:"Posted on 30 Jan,2018 Category: Category Four",
        matter:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`
    },
    {
        image:"<div class='total-picture'></div>",
        heading:"REPUBLIC TV",
        date:"Posted on 30 Jan,2018 Category: Category Four",
        matter:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`
    },
    {
        image:"<div class='total-picture'></div>",
        heading:"NEWS X",
        date:"Posted on 30 Jan,2018 Category: Category Four",
        matter:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam est. Distinctio
        consequuntur voluptatum rerum suscipit? Qui, iste. Earum nostrum ex numquam alias aliquam ad odio
        placeat ab expedita nulla excepturi dolorum commodi, labore quis possimus iste illum. Deleniti
        rem, explicabo porro ipsam cumque cum. Ipsa cupiditate, officiis ex similique ea corrupti quaerat eos
        nemo`
    }
];
function all(){
    header();
    footer();
    body();
}
function header(){
    var html='<h1 id="news-heading1">NEWSFEED</h1><h6 id="news-heading2"><i>Yet another newsfeed</i></h6>';
    document.getElementById("news").innerHTML = html;
}
function footer(){
    var html='<p class="foot-text">&copy;NewsFeed 2019</p>';
    document.getElementById("foot").innerHTML = html;

}
function body()
{
    completedata='<div id="total">';
    for(let j=0;j<data.length;j++)
        {
          completedata=completedata+'<div>'+data[j].image+
         '<h2 class="total-heading">'+data[j].heading+'</h2>'+
         '<p class="total-date">'+data[j].date+'</p>'+
         '<p class="total-content">'+data[j].matter+'</p>'+
         '<button class="total-button" type="button">Continue Reading</button></div>'; 
        }
        completedata+=`</div><div class="side">
        <label class="side-label"><strong>SELECT CATEGORY</strong></label><br />
        <select onchange="select()" id="side-select">
            <option value="ALL">All</option>
            <option value="NDTV">NDTV</option>
            <option value="CNN">CNN</option>
            <option value="MIRROR NOW">MIRROR NOW</option>
            <option value="INDIA TODAY">INDIA TODAY</option>
            <option value="ZEE NEWS">ZEE NEWS</option>
            <option value="TIMES NOW">TIMES NOW</option>
            <option value="WION">WION</option>
            <option value="NEWS9">NEWS9</option>
            <option value="REPUBLIC TV">REPUBLIC TV</option>
            <option value="NEWS X">NEWS X</option>
        </select><br /><br />
        <label class="side-label2"><strong>SUBSCRIBE</strong></label><br />
        <input type="text" placeholder="Email Address" size="13" id="side-input">
        <button class="side-button" onclick="validate()" type="button">Subscribe</button>
    </div>`;
    document.getElementById("main").innerHTML = completedata;
}
function select(){
    var x=document.getElementById("side-select").value;
    if(x==="ALL"){
        var html='';
        for(var j=0;j<data.length;j++)
        {
          html=html+'<div>'+data[j].image+
         '<h2 class="total-heading">'+data[j].heading+'</h2>'+
         '<p class="total-date">'+data[j].date+'</p>'+
         '<p class="total-content">'+data[j].matter+'</p>'+
         '<button class="total-button" type="button">Continue Reading</button></div>'; 
        }
        document.getElementById("total").innerHTML = html;
    }
    for(var i=0;i<data.length;i++)
    {
        if(x===data[i].heading){
        var html='<div>'+data[i].image+
        '<h2 class="total-heading">'+data[i].heading+'</h2>'+
        '<p class="total-date">'+data[i].date+'</p>'+
        '<p class="total-content">'+data[i].matter+'</p>'+
        '<button class="total-button" type="button">Continue Reading</button></div>';
        }
        document.getElementById("total").innerHTML = html; 
    }
}
function validate() {

    var email = document.getElementById('side-input');
    if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email.value))
  {
      
        window.localStorage.setItem('email', email.value);
        console.log(window.localStorage.getItem('email'));
        alert("You have entered an valid email address!");
  }
  else{
    alert("You have entered an invalid email address!");
  }
    return (false);
}
