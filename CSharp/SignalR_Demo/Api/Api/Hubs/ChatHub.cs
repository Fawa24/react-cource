using Api.Models;
using Microsoft.AspNetCore.SignalR;

namespace Api.Hubs
{
    public interface IChatClient
    {
        public Task ReceiveMessage(string userName, string message);
    }

    public class ChatHub : Hub<IChatClient>
    {
        public async Task JoinChat(UserConnection connection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, connection.ChatRoom);

            await Clients.Group(connection.ChatRoom).ReceiveMessage("Admin", $"{connection.UserName} joined the chat");
        }
    }
}
