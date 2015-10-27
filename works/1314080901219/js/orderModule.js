// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var orderModule = angular.module('orderModule', []);

// use the myAppModule variable to
// configure the module with a controller
orderModule.controller('createOrderCtrl', function ($scope) {
    // controller code would go here
        var someData = {
            id: '���',
            number: '���',
            name: 'Ʒ��',
            type: '���',
            xinghao: '�ͺ�',
            color:'��ɫ',
            numbers:'����',
            danwei:'��λ',
            danjia:'����',
            jine:'���',
            avg:'ƽ����',
            jiubianma:'�ɱ���'
        };
        $scope.data = someData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
orderModule.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});// javascript.js