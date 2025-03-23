using Api.Hubs;

namespace Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddControllers();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowReactApp",
                    policy =>
                    {
                        policy.WithOrigins("http://localhost:5173")
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                            .AllowCredentials();
                    });
            });

            builder.Services.AddSignalR();

            var app = builder.Build();

            app.UseCors("AllowReactApp");

            app.UseRouting();

            app.MapControllers();

            app.MapHub<ChatHub>("/chathub");

            app.UseAuthentication();

            app.Run();
        }
    }
}
