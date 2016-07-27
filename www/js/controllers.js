angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('IntroCtrl', function($scope,$state,$ionicSlideBoxDelegate) {
   $scope.startApp = function(){
    $state.go('main');
   }
   $scope.next = function(){
    ionicSlideBoxDelegate.next();
   }
   $scope.previous = function(){
    ionicSlideBoxDelegate.previous();
   }
   $scope.slideChanged = function(index){
    $scope.slideIndex = index;
   }
})


    .controller('HymnsCtrl', function($scope, Hymns) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.hymns = Hymns.all();
        $scope.remove = function(hymn) {
            Chats.remove(hymn);
        };
    })

    .controller('HymnDetailCtrl', function($scope, $stateParams, Hymns) {
        $scope.hymn = Hymns.get($stateParams.hymnNumber);
    })
;
