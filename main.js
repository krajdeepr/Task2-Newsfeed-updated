var completeData;
var channelList = "";
var data = [
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/ndtv.jpg'></div>",
    heading: "NDTV",
    date: "Posted on 1 June,2019 Category: Category Two",
    matter: `A new report issued by a Turkish think tank with ties to President Recep Tayyip Erdogan’s ruling Justice and Development Party (AKP) has publicly identified a number of reporters working in Turkey with international organizations, accusing them of bias against the government.The report, released by the Foundation for Political Economic and Social Research, or SETA, named Turkish journalists currently working for Deutsche Welle.`,
    popUp: `Officials said “collateral deportations” — where immigrants not targeted in the raids get swept up for being at the scene — are likely.Sandweg said the plan, as it stands now, comes with significant risks.`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/cnn.png'></div>",
    heading: "CNN",
    date: "Posted on 1 June,2019 Category: Category Two",
    matter: `It seems that more than 35 years of uniting headbangers with pummelling music isn’t enough for the guys in Metallica. They’re now looking to enlist some younger fans for the “Met Army.”That’s right. On Monday, the world’s biggest heavy metal band announced that it would be releasing its own children’s book, The ABCs of Metallica, towards the end of the year.“We have a new book coming out,” wrote the band in an official statement`,
    popUp: `The book goes through all 26 letters of the alphabet, using each one to look back at the extensive history of the four-piece, from the “Garage Days,” to the critically-acclaimed Master of Puppets era, to the most recent album, Hardwired… to Self-Destruct (2016).`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/mirror.png'></div>",
    heading: "MIRROR NOW",
    date: "Posted on 30 June,2019 Category: Category Two",
    matter: `Hawaii emergency officials have ordered an evacuation on Maui due to a runaway brush fire.The Maui News reports access in and out of Kihei on Maui was blocked as of 3:15 p.m. Thursday.Officials say the fire started along Kuihelani Highway Thursday morning.A Maui County official says an evacuation was ordered around 3 p.m. and a notice was sent to the cellphones of residents north of Ohukai Road and Maalaea.`,
    popUp: `The official says shelters were set to open at 3:30 p.m. at the War Memorial Gym and at 5 p.m. at the Velma McWayne Santos Community Center for Maalaea evacuees.The official says residents evacuating homes in north Kihei could go to a shelter at Kamalii Elementary School beginning at 3:30 p.m.`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/indiatoday.jpg'></div>",
    heading: "INDIA TODAY",
    date: "Posted on 30 june,2019 Category: Category Four",
    matter: `The youth have been at the forefront of huge rallies against the legislation, which has plunged Hong Kong into chaos amid wider fears about the erosion of civil rights in the Chinese territory. Marco Leung’s banners demanded a full withdrawal of the bill, which would have allowed suspects to be sent to mainland China for trial.Hong Kong leader Carrie Lam declared her effort to amend the extradition laws.`,
    popUp: `Every brave citizen who takes to the street is doing so because they love Hong Kong deeply,” they said in a message read Thursday at a public memorial for their son, who died on June 14 at age 35. “Only by protecting themselves and staying alive can young people continue to speak up bravely against social injustices.`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/zeenews.png'></div>",
    heading: "ZEE NEWS",
    date: "Posted on 2 july,2019 Category: Category Five",
    matter: `As well, the long-awaited study found that between 2004 and 2009, 21 per cent of crew members reported suffering from asthma and 15 per cent were battling depression – rates well above what was found within the control group.However, no cases of cancer were reported among the crew during that time period, even though the military had confirmed crew members were exposed to a nasty chemical cocktail in thick black smoke that filled the vessel.`,
    popUp: `The used British submarine, one of four purchased by the Canadian military in 1998, was on its maiden voyage to Canada on Oct. 5, 2004, when it caught fire in rough seas off the coast of Ireland.`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/timesnow.png'></div>",
    heading: "TIMES NOW",
    date: "Posted on 30 Jan,2018 Category: Category Four",
    matter: `Boris Bytensky argued to have Alek Minassian‘s statement placed under a publication ban until the man’s trial is complete, even if it comes up during the proceedings.Superior Court Justice Anne Molloy described the request as asking to hold a secret trial.Minassian faces 10 counts of first-degree murder and 16 counts of attempted murder. He is set to stand trial before a judge alone next year.Several media outlets,`,
    popUp: `The lawyer for a man accused of killing ten people by driving a van down a busy Toronto sidewalk has asked a judge to prevent the publication of his client’s statement to police.`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/wion.jpg'></div>",
    heading: "WION",
    date: "Posted on 30 Jan,2018 Category: Category Five",
    matter: `The level of frustration and alienation that exists in Alberta right now towards Ottawa and the federation is, I believe, at its highest level, certainly in our country’s modern history,” Kenney said Thursday at the end of the annual premiers’ meeting in Saskatoon.Kenney said he doesn’t think Albertans want to separate — they just want fairness.During the two-day meeting, Kenney said he spoke with Quebec Premier Francois Legault about moving oil by pipeline`,
    popUp: `Legault said he’s open to moving liquefied natural gas by pipeline and hydro-electricity through Quebec, but that there’s no “social acceptability” in his province for an oil pipeline.`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/news9.png'></div>",
    heading: "NEWS9",
    date: "Posted on 30 Jan,2018 Category: Category Four",
    matter: `In a filing in federal court in Manhattan, Epstein’s lawyers argued that home confinement, along with electronic monitoring, surveillance and a bond secured by a mortgage on the Upper East Side home which they valued at $77 million, would ensure that he does not flee the country.A spokesman for New York-based federal prosecutors declined to comment.On Monday, prosecutors said at a court hearing that they will oppose.`,
    popUp: `U.S. District Judge Richard Berman, who is overseeing the case, previously rejected a similar request by Turkish-Iranian gold trader Reza Zarrab, finding it was unfair to allow wealthy defendants to “buy their way out of prison by constructing their own private jail.”`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/republictv.png'></div>",
    heading: "REPUBLIC TV",
    date: "Posted on 30 Jan,2018 Category: Category Four",
    matter: `Democratic presidential candidate Bernie Sanders is coming to Canada later this month to draw attention to the high cost of prescription drugs in the U.S.He said he’ll be crossing the border with a group of Type 1 diabetics, who can purchase insulin at one-tenth the cost in Canada.The Vermont senator did not say where he would be visiting, but CNN reported he would be travelling through Detroit, which borders Windsor, Ont.`,
    popUp: `In an interview with CNN, Sanders said Canada’s single-payer health-care system “allows them to negotiate much better prices with the drug companies.”`
  },
  {
    image:
      "<div class='total-picture'><img class='total-picture' src='static/images/newsx.png'></div>",
    heading: "NEWS X",
    date: "Posted on 30 Jan,2018 Category: Category Four",
    matter: `The planned raids targeting undocumented immigrants in U.S. cities on Sunday will needlessly put American-born children at risk, according to the former head of Immigration and Customs Enforcement (ICE).John Sandweg, who served as ICE’s acting director under the Obama administration, says the plan to round up thousands of people living in the United States illegally is rife with “vulnerabilities and sensitivities.”`,
    popUp: `“In the United States, four million of the 11 million undocumented immigrants are from mixed families, meaning you have typically U.S. citizen children and undocumented parents,” he told Global News on Thursday.`
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
  for (let a = 0; a < channels.length; a++) {
    channelList =
      channelList +
      `<option value='` +
      channels[a] +
      `'>` +
      channels[a] +
      `</option>`;
  }
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
      '])" type="button">Continue Reading</button></div>';
  }
  completeData +=
    `<div id="myModal" class="modal"><div class="modal-content"><div class="modal-header">` +
    `<span onclick="closePopUp()" class="close">&times;</span><h2 id="iHead"></h2></div>` +
    `<div id="popUp_content" class="modal-body"><p>` +
    `</p></div>` +
    `<div class="modal-footer">` +
    `<h3>Till Date</h3></div></div></div>"</div><div class="side">` +
    `<label class="side-label"><strong>SELECT CATEGORY</strong></label><br />` +
    `<select onchange="select()" id="side-select">` +
    `<option value="ALL">All</option>` +
    channelList +
    `</select><br /><br />` +
    `<label class="side-label2"><strong>SUBSCRIBE</strong></label><br />` +
    `<input type="text" placeholder="Email Address" size="13" id="side-input">` +
    `<button class="side-button" onclick="validate()" type="button">Subscribe</button>` +
    `</div>`;
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
        '<button id="myBtn" class="total-button" type="button" onclick="popUpAll(data[' +
        j +
        '])">Continue Reading</button>';
    }
    html +=
      '<div id="myModal" class="modal"><div class="modal-content"><div class="modal-header">' +
      '<span onclick="closePopUp()" class="close">&times;</span><h2 id="iHead"></h2></div>' +
      '<div id="popUp_content" class="modal-body"><p></p>' +
      "</div>" +
      '<div class="modal-footer">' +
      "<h3>Till Date</h3></div></div></div></div>";
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
  document.getElementById("iHead").innerHTML = i.heading;
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
}
