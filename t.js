document.write('<body><button onclick="changeUrl()">Load page in iframe</button><iframe name="iFrameName"></iframe></body>');
function changeUrl() {
    var site = "https://www.google.com/";
    document.getElementsByName('iFrameName')[0].src = site;
}

