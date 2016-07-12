var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var ChatService = (function () {
            function ChatService() {
                // Some fake testing data
                this.chats = [{
                        id: 0,
                        name: 'Ben Sparrow',
                        lastText: 'You on your way?',
                        face: 'img/ben.png'
                    }, {
                        id: 1,
                        name: 'Max Lynx',
                        lastText: 'Hey, it\'s me',
                        face: 'img/max.png'
                    }, {
                        id: 2,
                        name: 'Adam Bradleyson',
                        lastText: 'I should buy a boat',
                        face: 'img/adam.jpg'
                    }, {
                        id: 3,
                        name: 'Perry Governor',
                        lastText: 'Look at my mukluks!',
                        face: 'img/perry.png'
                    }, {
                        id: 4,
                        name: 'Mike Harrington',
                        lastText: 'This is wicked good ice cream.',
                        face: 'img/mike.png'
                    }];
            }
            ChatService.prototype.all = function () {
                return this.chats;
            };
            ChatService.prototype.remove = function (chat) {
                this.chats.splice(this.chats.indexOf(chat), 1);
            };
            ChatService.prototype.get = function (chatId) {
                return this.chats.filter(function (c) { return c.id == chatId; })[0];
            };
            return ChatService;
        }());
        Services.ChatService = ChatService;
        angular.module('MyApp').service('chatService', ChatService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=services.js.map