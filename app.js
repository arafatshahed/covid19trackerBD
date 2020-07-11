function formatDate(date) {
  var d = new Date(date);
  var hh = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var dd = "AM";
  var h = hh;
  if (h >= 12) {
    h = hh - 12;
    dd = "PM";
  }
  if (h == 0) {
    h = 12;
  }
  m = m < 10 ? "0" + m : m;

  s = s < 10 ? "0" + s : s;

  /* if you want 2 digit hours:
  h = h<10?"0"+h:h; */

  var pattern = new RegExp("0?" + hh + ":" + m + ":" + s);

  var replacement = h + ":" + m;
  /* if you want to add seconds
  replacement += ":"+s;  */
  replacement += " " + dd;

  return date.replace(pattern, replacement);
}
async function getCovidApi() {
  const jsonFormatData = await fetch(
    "https://corona.lmao.ninja/v2/countries/Bangladesh"
  );
  const jsFormatData = await jsonFormatData.json();
  if (jsFormatData.todayCases == 0 && jsFormatData.todayDeaths == 0) {
    const jsonFormatData2 = await fetch("https://api.covid19api.com/summary");
    const jsFormatData2 = await jsonFormatData2.json();
    document.getElementById("nc").innerHTML =
      jsFormatData2.Countries[13].NewConfirmed;
    document.getElementById("nd").innerHTML =
      jsFormatData2.Countries[13].NewDeaths;
    document.getElementById("nrc").innerHTML =
      jsFormatData2.Countries[13].NewRecovered;
    document.getElementById("tc").innerHTML =
      jsFormatData2.Countries[13].TotalConfirmed;
    document.getElementById("td").innerHTML =
      jsFormatData2.Countries[13].TotalDeaths;
    document.getElementById("tr").innerHTML =
      jsFormatData2.Countries[13].TotalRecovered;
    document.getElementById("tst").innerHTML = jsFormatData.tests;
    const date = jsFormatData2.Countries[13].Date;
    const lastupdated = Date.parse(date);
    const date2 = new Date(parseInt(lastupdated));
    const lastupdated2 = date2.toString();

    const t = formatDate(lastupdated2);
    var s = t.replace("GMT+0600 (Bangladesh Standard Time)", "");
    document.getElementById("update").innerHTML = s;
    console.log(s);
    console.log("Result Coming from late API");
  } else {
    document.getElementById("nc").innerHTML = jsFormatData.todayCases;
    document.getElementById("nd").innerHTML = jsFormatData.todayDeaths;
    document.getElementById("nrc").innerHTML = jsFormatData.todayRecovered;
    document.getElementById("tc").innerHTML = jsFormatData.cases;
    document.getElementById("td").innerHTML = jsFormatData.deaths;
    document.getElementById("tr").innerHTML = jsFormatData.recovered;
    document.getElementById("tst").innerHTML = jsFormatData.tests;
    const date = new Date(parseInt(jsFormatData.updated));
    const lastupdated = date.toString();

    const t = formatDate(lastupdated);
    var s = t.replace("GMT+0600 (Bangladesh Standard Time)", "");
    console.log(formatDate(lastupdated));
    document.getElementById("update").innerHTML = s;
    console.log(s);
    console.log("Result Coming from fast API");
  }
}
getCovidApi();
function theme() {
  if (document.getElementById("chk").value == "on") {
    document.getElementById("chk").value = "off";
    document.getElementsByClassName("board")[0].style.color = "#24252a";
    document.getElementById("myhead").style.color = "#24252a";
    document.body.style.backgroundColor = "#f0f8ff";
  } else {
    document.body.style.backgroundColor = "#24252a";
    document.getElementById("chk").value = "on";
    document.getElementsByClassName("board")[0].style.color = "#f0f8ff";
    document.getElementById("myhead").style.color = "#f0f8ff";
  }
}
