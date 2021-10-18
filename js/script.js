
// Fonction appelée lors du click du bouton
function start() {

  const city = document.getElementById("city-input").value;

  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather.getThreeDayForecast().then(function (response) {

      // Récupère la donnée d'une API
      const data = response.data;

      for (let i = 0; i < 4; i++) {

        // On peut accéder aux informations qui sont rencoyées dans la réponse et on les stocks dans des constantes
        // Les informations sont imbriquées dans un json et on utilise les . pour aller chercher dedans ou [?] si c'est
        // dans un tableau qui est lui meme dans l'objet.
        const main = data.list[i].weather[0].main;
        const description = data.list[i].weather[0].description;
        const temp = data.list[i].temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

        // On modifie le DOM pour y inclure les informations que on a récupéré
        // ici je profite du fait que j'ai renommé les id avec un numéro en fonction du jour
        // du coup je fais une boucle qui va aller modif l'element avec l'id "0-forecast-main" puis le suivant
        // et ainsi de suite t'as capté
        document.getElementById(i + '-forecast-main').innerHTML = main;
        document.getElementById(i + '-forecast-more-info').innerHTML = description;
        document.getElementById(i + '-weather-container').innerHTML = icon;
        document.getElementById(i + '-forecast-temp').innerHTML = `${temp}°C`;
      }
    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });
}

