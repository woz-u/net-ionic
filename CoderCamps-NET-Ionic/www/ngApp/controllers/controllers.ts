namespace MyApp.Controllers {

    export class DashController {
    }



    export class ChatsController {
        public chats;

        public remove(chat) {
            this.chatService.remove(chat);
        }

        constructor(private chatService: MyApp.Services.ChatService) {
            this.chats = chatService.all();
        }
    }



    export class ChatDetailController {
        public chat;

        constructor(private chatService: MyApp.Services.ChatService, $stateParams: ng.ui.IStateParamsService) {
            console.log('chat id==');
            console.log($stateParams['chatId']);
            this.chat = chatService.get(+$stateParams['chatId']);
        }
    }



    export class AccountController {
        public settings = {
            enableFriends: true
        }
    }
}
