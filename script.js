var app = angular.module('qgApp', []);

app.controller('quotation', function($scope) {

    $scope.name = "me";
    $scope.quantity = "10";
    $scope.rate = "20";


    $scope.addData = function() {

        $scope.quot.push({
            name: $scope.name,
            quantity: $scope.quantity,
            rate: $scope.rate,


        })
        $scope.name = ''
        $scope.quantity = ''
        $scope.rate = ''





    }


    $scope.quot = [

    ]


    $scope.makePdf = function() {

        var l = {}
        var x = ["Name", "Quantity", "Rate", "Amount"]
        l.content = []
        l.content.push({ table: { body: [] } })
        l.content[0].table.body.push(x);
        let total = 0

        for (var i = 0; i < $scope.quot.length; i++) {

            a = []

            a.push($scope.quot[i].name)
            a.push($scope.quot[i].quantity)
            a.push($scope.quot[i].rate)
            a.push($scope.quot[i].quantity * $scope.quot[i].rate)
            total = total + $scope.quot[i].rate * $scope.quot[i].quantity

            l.content[0].table.body.push(a);


        }

        to = []
        to.push(" ")
        to.push(" ")
        to.push("Total")
        to.push(total)
        l.content[0].table.body.push(to);

        pdfMake.createPdf(l).open()

    }

});