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
            [FromHeader(Name = "Iduser"), Required] string Iduser,
            [FromBody] CarroDTO carro
            )
            {
            var carroDB = _serviceProvider.GetService<ICarroDB>();
            
            
            var newCarro = new Carro(){
                Nome = carro.Nome,
                Marca = carro.Marca,
                Modelo = carro.Modelo,
                Ano = carro.Ano,
                Km = carro.Km,
                Valor = carro.Valor,
                Iduser = Iduser,
                Foto = carro.Foto
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
            [FromHeader(Name = "Iduser"), Required] string Iduser,
            [FromBody] CarroDTO novosdados
            )
            {

            var carroDB = _serviceProvider.GetService<ICarroDB>();
            
            var dados = new Carro(){
                Id = novosdados.Id,
                Nome = novosdados.Nome,
                Marca = novosdados.Marca,
                Modelo = novosdados.Modelo,
                Ano = novosdados.Ano,
                Km = novosdados.Km,
                Valor = novosdados.Valor,
                Iduser = Iduser,
                Foto = novosdados.Foto,
            };

            var carro = await carroDB.findByid(dados.Id);

            if(carro is null){
                return NotFound("Carro não encontrado");
            }else if(carro.Iduser != Iduser){
                return new CustomHttpStatus(401,"Sem autorização para alterar carro");
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
            [FromHeader(Name = "Iduser"), Required] string Iduser,
            [FromRoute(Name = "codigo_carro")] int Id
            )
            {

            var carroDB = _serviceProvider.GetService<ICarroDB>();

            var result = await carroDB.findByid(Id);

            if(result is null){
                return NotFound("Carro não encontrado");
            }else if(result.Iduser != Iduser){
                return new CustomHttpStatus(401,"Sem autorização para deletar carro");
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

            List<Carro> newCars = new List<Carro>();

            foreach (Carro carro in carros){
                Carro value = new Carro(){
                    Id = carro.Id,
                    Nome = carro.Nome,
                    Marca = carro.Marca,
                    Modelo = carro.Modelo,
                    Ano = carro.Ano,
                    Km = carro.Km,
                    Valor = carro.Valor,
                    Foto = carro.Foto
                };
                newCars.Add(value);
            }

            return new CustomHttpStatus(200,newCars);
        }

        /// <summary>
        /// Buscar meus carros
        /// </summary>
        /// <response code="200">tipo Carro</response>
        [HttpGet("mycars")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> getMycars(
            [FromHeader(Name = "Authorization"), Required] string token,
            [FromHeader(Name = "Iduser"), Required] string Iduser
            )
            {

            var carroDB = _serviceProvider.GetService<ICarroDB>();
            
            List<Carro> carros = await carroDB.getMycars(Iduser);

            List<Carro> newCars = new List<Carro>();

            foreach (Carro carro in carros){
                Carro value = new Carro(){
                    Id = carro.Id,
                    Nome = carro.Nome,
                    Marca = carro.Marca,
                    Modelo = carro.Modelo,
                    Ano = carro.Ano,
                    Km = carro.Km,
                    Valor = carro.Valor,
                    Foto = carro.Foto
                };
                newCars.Add(value);
            }

            return new CustomHttpStatus(200,newCars);
        }
    }
}