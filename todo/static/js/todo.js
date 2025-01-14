var app = angular.module('toDo', []);
app.controller('toDoController', function($scope, $http) {
    $http.get('/todo/api').then(function(response) {
        $scope.todoList = [];
        for (var i = 0; i < response.data.length; i++) {

            var todo = {};
            todo.todoText = response.data[i].text

            todo.done = response.data[i].done
            todo.id = response.data[i].id
            $scope.todoList.push(todo);
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
        oldList = $scope.todoList;
        var newList = [];
        for (var i=0; i<oldList.length; i++){
            if (oldList[i].done){
                $http.delete('/todo/api/' + oldList[i].id)
            } else {
                newList.push(oldList[i]);
            }
        }
        $scope.todoList = newList;
    };
})