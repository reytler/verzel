using verzel.Utils;
using verzel.DTOs;
using verzel.interfaces;
using verzel.Models;
using Microsoft.AspNetCore.Mvc;
using verzel.Services;
using Microsoft.AspNetCore.Authorization;
using System.ComponentModel.DataAnnotations;

namespace verzel.Controllers
{
    [ApiController]
    [Route("verzel/v1/user")]

    public class UserController : ControllerBase 
    {
        private readonly VerzelContext _context;

        private IServiceProvider _serviceProvider;

        public UserController(
                VerzelContext context,
                IServiceProvider serviceProvider
            ){
            _context = context;
            _serviceProvider = serviceProvider;
        }

        [HttpGet("working")]
        [AllowAnonymous]
        public ActionResult working() {
            return Ok("Working");
        }

        /// <summary>
        /// Criar novo usuário
        /// </summary>
        /// <response code="201">tipo User</response>
        /// <response code="422">Email já utilizado</response>
        [HttpPost("create")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> Create(
            [FromHeader(Name = "Authorization"), Required] int idUsuario,
            [FromBody] UserDTO user
            )
            {
            var userDB = _serviceProvider.GetService<IUserDB>();
            bool exists = await userDB!.searchForUsuario(user.Usuario);

            if(exists){
                return new CustomHttpStatus(422, "Usuário já utilizado");
            }

            var newUser = new User(){
                Nome = user.Nome,
                Usuario = user.Usuario,
                Senha = Cripto.GerarHash(user.Senha),
                Role = user.Role
            };

            await userDB.createUser(newUser);

            newUser.Senha = "";

            return new CustomHttpStatus(201,newUser);
        }

        /// <summary>
        /// Fazer Login
        /// </summary>
        /// <response code="201">tipo User</response>
        /// <response code="422">Email já utilizado</response>
        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<ActionResult> Login(
            [FromBody] UserDTO user
            )
            {
            var userDB = _serviceProvider.GetService<IUserDB>();
            
            var userDto = new UserDTO(){
                Usuario = user.Usuario,
                Senha = Cripto.GerarHash(user.Senha)
            };

            var userResult = await userDB.validate(userDto);

            if(userResult == null){
                return NotFound(new {message = "Usuário ou senha inválidos"});
            }

            var token = TokenService.GenerateToken(userResult);

            userResult.Senha = "";

            var response = new {
                user = userResult,
                token = token
            };

            return new CustomHttpStatus(201,response);
        }
    }
}