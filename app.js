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
}
getCovidApi();
