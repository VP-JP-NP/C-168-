AFRAME.registerComponent("markerhnadler", {
    init: async function() {
        this.el.addEventListener("markerFound", ()=> {
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost", ()=> {
            this.handleMarkerLost()
        })
    },
    handleMarkerFound: function() {
        var buttonDiv = documment.getElementById("button-div")
        buttonDiv.style.display = "flex"
        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")
        ratingButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "Rate Dish",
                text: "workInProgress",
            })
        })
        orderButton.addEventListener("click", function(){
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks For Order!",
                text: "Your Order Will Be Served Soon At Your Table",
            })
        })

    },
    handleMarkerLost: function() {
        var buttonDiv = documment.getElementById("button-div")
        buttonDiv.style.display = "none"
    }
}
    )