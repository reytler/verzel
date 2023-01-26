using verzel.Utils;
using verzel.DTOs;
using verzel.interfaces;
using verzel.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.ComponentModel.DataAnnotations;

namespace verzel.Controllers
{
    [ApiController]
    [Route("verzel/v1/carro")]

    public class CarroController : ControllerBase 
    {
        private readonly VerzelContext _context;

        private IServiceProvider _serviceProvider;

        public CarroController(
                VerzelContext context,
                IServiceProvider serviceProvider
            ){
            _context = context;
            _serviceProvider = serviceProvider;
        }

        /// <summary>
        /// Criar novo usuário
        /// </summary>
        /// <response code="201">tipo User</response>
        /// <response code="422">Email já utilizado</response>
        [HttpPost("create")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> Create(
            [FromHeader(Name = "Authorization"), Required] string token,
            [FromBody] CarroDTO carro
            )
            {
            var carroDB = _serviceProvider.GetService<ICarroDB>();
            
            
            var newCarro = new Carro(){
                Nome = carro.Nome,
                Marca = carro.Marca,
                Modelo = carro.Modelo,
                Foto = Convert.FromBase64String(carro.Foto)
            };

            await carroDB.createCarro(newCarro);

            return new CustomHttpStatus(201,newCarro);
        }
    }
}