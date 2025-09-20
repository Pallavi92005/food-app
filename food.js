document.getElementById("submitBtn").addEventListener("click", function () {
    let food = document.getElementById("foodInput").value.toLowerCase();

    
    let url = `https://foodish-api.com/api/images/${food}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            
            document.getElementById("foodName").innerHTML = "Food: " + food;
            let img = document.getElementById("foodImage");
            img.src = data.image;
            img.style.display = "block";
        })
        .catch(err => {
            console.error(err);
            document.getElementById("foodName").innerHTML = "Error: Food not found or API issue.";
            document.getElementById("foodImage").style.display = "none";
        });
});
