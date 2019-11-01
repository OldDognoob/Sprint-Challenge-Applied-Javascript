// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// Making API request
axios.get('https://lambda-times-backend.herokuapp.com/topics')

// .then(staff => console.log(staff))

.then(staff => staff.data.topics.forEach(element => new Tab(element)))

function Tab(tabname){
    const wrapper = document.querySelector('.topics')

    const tab = document.createElement('div')
    wrapper.appendChild(tab)
    tab.classList.add('tab')
    tab.textContent= tabname
    

    return tab
}