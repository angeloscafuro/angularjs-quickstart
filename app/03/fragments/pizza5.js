/**
 *
 */
angular.module("pizza5App",[]);

function PizzaMenuCtrl($scope) {
    $scope.menu = [
            {
                id : 0,
                name: "Margherita",
                price: 5,
                ingredients : ["Flour","Salt","Cheese","Tomato"]
            },
        {
            id : 0,
            name: "Napoli",
            price: 5,
            ingredients : ["Flour","Salt","Cheese","Tomato", "Anchovies"]
        },

        {
            id : 0,
            name: "Four Seasons",
            price: 5,
            ingredients : ["Flour","Salt","Cheese","Tomato","Mushrooms","Olives"]
        }
        ];
}




angular.module("pizza5App").controller("PizzaMenuCtrl",PizzaMenuCtrl);

