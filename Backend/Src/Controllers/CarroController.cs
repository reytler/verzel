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
        /// Cadastrar novo carro
        /// </summary>
        /// <response code="201">tipo Carro</response>
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

        /// <summary>
        /// Buscar carros
        /// </summary>
        /// <response code="200">tipo Carro</response>
        [HttpGet("search")]
        [AllowAnonymous]
        public async Task<ActionResult> Search(
            [FromQuery(Name = "nome")] string? nome="",
            [FromQuery(Name = "marca")] string? marca=""
            )
            {

            var carroDB = _serviceProvider.GetService<ICarroDB>();
            
            List<Carro> carros = await carroDB.searchCarro(nome,marca);

            return new CustomHttpStatus(200,carros);
        }
    }
}