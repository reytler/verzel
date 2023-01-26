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
        /// Alterar dados de um carro existente
        /// </summary>
        /// <response code="200">tipo Carro</response>
        [HttpPost("update")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> Update(
            [FromHeader(Name = "Authorization"), Required] string token,
            [FromBody] CarroDTO novosdados
            )
            {

            var carroDB = _serviceProvider.GetService<ICarroDB>();
            
            
            var dados = new Carro(){
                Id = novosdados.Id,
                Nome = novosdados.Nome,
                Marca = novosdados.Marca,
                Modelo = novosdados.Modelo,
                Foto = Convert.FromBase64String(novosdados.Foto)
            };

            var carro = await carroDB.findByid(dados.Id);

            if(carro is null){
                return NotFound("Carro não encontrado");
            }

            await carroDB.updateCarro(dados);

            return new CustomHttpStatus(200,dados);
        }

        /// <summary>
        /// Deletar dados de um carro existente
        /// </summary>
        /// <response code="200">tipo string</response>
        [HttpDelete("delete/{codigo_carro}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> Delete(
            [FromHeader(Name = "Authorization"), Required] string token,
            [FromRoute(Name = "codigo_carro")] int Id
            )
            {

            var carroDB = _serviceProvider.GetService<ICarroDB>();

            var result = await carroDB.findByid(Id);

            if(result is null){
                return NotFound("Carro não encontrado");
            }

            await carroDB.deleteCarro(Id);

            return new CustomHttpStatus(200,"Carro deletado");
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