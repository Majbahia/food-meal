const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    if(searchField == ''){
        `<h3> no reslut found</h3>`;
    }
    else{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
    }
    
    
}
const displaySearchResult = meals =>{
    const searchResult = document.getElementById('searchResult');
    searchResult.textContent = '';
  
    meals.forEach(meal => {
        // console.log(meal);
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div onclick="loadMealData(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 220)}</p>
            </div>
          </div>
        `
        searchResult.appendChild(div);
    });
    
    
}
const loadMealData = mealId =>{
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then( res => res.json())
    .then(data => displayData(data.meals[0]));
}
const displayData = meal =>{
    // console.log(meal);
    const displaydata = document.getElementById('displayCard');
    displaydata.textContent= '';

    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =`
 
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 220)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
        `;

        displaydata.appendChild(div);
}