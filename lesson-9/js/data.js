let data = {
    "towns":[
      {
        name: "Soda Springs",
        photo: "sodasprings.jpg",
        motto: "Historic Oregon Trail Oasis. The Soda is on Us.",
        yearFounded: 1858,
        currentPopulation: 2985,
        averageRainfall: 15.75,
        events: [
          "February 29: Geyser Song Day",
          "May 1-6: Days of May Celebration",
          "October 15-16: Octoberfest"
        ]
      },
      
      {
        name: "Fish Haven",
        photo: "fishhaven.jpg",
        motto: "This is Fish Heaven.",
        yearFounded: 1864,
        currentPopulation: 501,
        averageRainfall: 14.20,
        events: [
          "April 1: How Big Was That Fish Day",
          "May 15-30: Rush the Creek Days",
          "July 24: Bear Lake Blunder Run",
          "December 12: Light the Tree"
        ]
      },


      {

        name: "Preston",
        photo: "preston.jpg",
        motto: "Home of Napoleon Dynamite.",
        yearFounded: 1866,
        currentPopulation: 5204,
        averageRainfall: 16.65,
        events: [
          "March 29: Work Creek Revival",
          "July 8-12: Napoleon Dynamite Festival",
          "November 2-4: Freedom Days"
        ]
      }
    ]
  }
  console.log(data.towns);
  displayData(data)
  function displayData(data){
    const datacities = document.getElementById('cities');
    data.towns.forEach((element) =>{
       datacities.innerHTML += `
       <div class = "cityinfo">
       <h1>${element.name}</h1>
       <h2>${element.motto}</h2>
       <p>Founded in ${element.yearFounded}</p>
       <p>${element.currentPopulation}</p>
       <p>${element.averageRainfall}</p>
       <img class="presimg" src="../lesson-9/images/${element.photo}" alt="Photo of ${element.name}">
   </div>`
    });
}