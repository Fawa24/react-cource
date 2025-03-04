namespace HookFormsWithBackend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();
            builder.Services.AddRouting();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicyOneName", builder =>
                {
                    builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
                });
            });

            var app = builder.Build();

            app.UseCors("CorsPolicyOneName");

            app.UseRouting();
            app.MapControllers();

            app.Run();
        }
    }
}
