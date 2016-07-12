var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var DashController = (function () {
            function DashController() {
            }
            return DashController;
        }());
        Controllers.DashController = DashController;
        var ChatsController = (function () {
            function ChatsController(chatService) {
                this.chatService = chatService;
                this.chats = chatService.all();
            }
            ChatsController.prototype.remove = function (chat) {
                this.chatService.remove(chat);
            };
            return ChatsController;
        }());
        Controllers.ChatsController = ChatsController;
        var ChatDetailController = (function () {
            function ChatDetailController(chatService, $stateParams) {
                this.chatService = chatService;
                console.log('chat id==');
                console.log($stateParams['chatId']);
                this.chat = chatService.get(+$stateParams['chatId']);
            }
            return ChatDetailController;
        }());
        Controllers.ChatDetailController = ChatDetailController;
        var AccountController = (function () {
            function AccountController() {
                this.settings = {
                    enableFriends: true
                };
            }
            return AccountController;
        }());
        Controllers.AccountController = AccountController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=controllers.js.map