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
  console.log(jsFormatData.flag);
  console.log(jsFormatData);
}
getCovidApi();
