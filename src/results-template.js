export default "<html>" +
  "<style>p {color: green;} ul {list-style: none; display: flex; flex-wrap: wrap;} li {flex: 1 33%; list-style: none;} #logo { background-image: url(https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SX425_.jpg); background-size: contain; height: 200px; width: 200px;}</style>" +
  "<div id='results'>" +
  "<p>{{title}}</p>" +
  "<table><tbody>" +
  "{{#things}}" +
  "<tr>" +
  "<td>{{name}}</td>" +
  "</tr>" +
  "{{/things}}" +
  "</tbody>" +
  "</table>" +
  "<div id='logo'></div>" +
  "</div>" +
  "</html>";
