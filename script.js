function fetchData(){
    fetch("https://ddeinfernocakeshop.herokuapp.com/customers/").then(response => {
        if (!response.ok){
            throw Error('ERROR');
        }
        return response.json();
    }).then(data => {
        console.log(data);
        const html = data.map(customer => {
            return `<ul>Customer-id: ${customer.id} <br/> Firstname: ${customer.firstname} <br/> Lastname: ${customer.lastname} <br/> Home Address: ${customer.home_address} <br/> Phone Number: ${customer.phone_number}</ul>`
        }).join("")
        console.log(html)
        document.querySelector("#app").insertAdjacentHTML('afterbegin', html);
    }). catch(error => {
        console.log(error);
    });
}
fetchData();

function fetchData2(){
    fetch("https://ddeinfernocakeshop.herokuapp.com/cakes/").then(response => {
        if (!response.ok){
            throw Error('ERROR');
        }
        return response.json();
    }).then(data => {
        console.log(data);
        const html = data.map(cake => {
            return `<ul>Cake-id: ${cake.id} <br/> Name: ${cake.name} <br/> Price: ${cake.price} <br/> Description: ${cake.description}</ul>`
        }).join("")
        console.log(html)
        document.querySelector("#app2").insertAdjacentHTML('afterbegin', html);
    }). catch(error => {
        console.log(error);
    });
}

fetchData2();

function fetchData3(){
    fetch("https://ddeinfernocakeshop.herokuapp.com/recipes/").then(response => {
        if (!response.ok){
            throw Error('ERROR');
        }
        return response.json();
    }).then(data => {
        console.log(data);
        const html = data.map(recipe => {
            return `<ul>Cake-id: ${recipe.cake} <br/> Ingredients: ${recipe.ingredients} </ul>`
        }).join("")
        console.log(html)
        document.querySelector("#app3").insertAdjacentHTML('afterbegin', html);
    }). catch(error => {
        console.log(error);
    });
}

fetchData3();

function fetchData4(){
    fetch("https://ddeinfernocakeshop.herokuapp.com/orders/").then(response => {
        if (!response.ok){
            throw Error('ERROR');
        }
        return response.json();
    }).then(data => {
        console.log(data);
        const html = data.map(order => {
            return `<ul>Customer-id: ${order.customer} <br/> Cake-id: ${order.cake} <br/> Quantity: ${order.quantity}</ul>`
        }).join("")
        console.log(html)
        document.querySelector("#app4").insertAdjacentHTML('afterbegin', html);
    }). catch(error => {
        console.log(error);
    });
}

fetchData4();
