var app = angular.module('toDo', []);
app.controller('toDoController', function($scope, $http) {

    $http.get('/todo/api/').then(function(response) {
        
        $scope.todoList = []; // Ensure todoList is initialized as an array.

        if (response.data && Array.isArray(response.data)) {
            for (var i = 0; i < response.data.length; i++) {
                var todo = {
                    todoText: response.data[i].text,
                    done: response.data[i].done
                };
                $scope.todoList.push(todo);
            }
        } else {
            console.error('Response data is not valid:', response.data);
        }
    });

    $scope.saveData = function() {
        var data = {text: $scope.todoInput, done: false}
        $http.put('/todo/api', data)
    };
    

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText: $scope.todoInput, done: false});
        $scope.todoInput = '';
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(element)  {
            if (!element.done){ 
                $scope.todoList.push(element);
            }
        });
    }
})