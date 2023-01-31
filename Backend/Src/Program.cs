using System.Text;
using verzel.interfaces;
using verzel.Repository;
using verzel.Settings;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using verzel.Services;

var builder = WebApplication.CreateBuilder(args);
var connectionString = "server=verzeldb; database=verzel; user=root; password=master";
var key = Encoding.ASCII.GetBytes(Config.Secret);

builder.Services.AddScoped<IUserDB, UserDB>();
builder.Services.AddScoped<ICarroDB, CarroDB>();

builder.Services.AddAuthentication(x=>{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x=>{
    x.RequireHttpsMetadata = false;
        x.SaveToken = true;
        x.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = false,
            ValidateAudience = false
        };
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<VerzelContext>(
            options => options.UseMySql(connectionString,ServerVersion.AutoDetect(connectionString)));

builder.Services.AddCors();

var app = builder.Build();
DatabaseManagementService.MigrationInitialisation(app);
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options=>options
.AllowAnyOrigin()
.AllowAnyMethod()
.AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
