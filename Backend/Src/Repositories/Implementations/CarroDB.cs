using Microsoft.EntityFrameworkCore;
using verzel.interfaces;
using verzel.Models;

namespace verzel.Repository
{
    public class CarroDB : ICarroDB
    {
        private readonly VerzelContext _context;

        public CarroDB(VerzelContext context){
            _context = context;
        }
        public async Task createCarro(Carro carro)
        {
            await _context.Carros.AddAsync(carro);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Carro>> searchCarro(string nome, string marca)
        {
            var carros = new List<Carro>();

            if(nome.Length > 0 && marca.Length > 0){

                carros = await _context.Carros
                    .AsNoTracking()
                    .Where(c => c.Nome.Contains(nome) && c.Marca.Contains(marca))
                    .ToListAsync();
                
                return carros;
            }

            if(nome.Length > 0){

                carros = await _context.Carros
                    .AsNoTracking()
                    .Where(c=>c.Nome.Contains(nome))
                    .ToListAsync();
                
                return carros;
            }

            if(marca.Length > 0){

                carros = await _context.Carros
                    .AsNoTracking()
                    .Where(c => c.Marca.Contains(marca))
                    .ToListAsync();
                
                return carros;
            }

            carros = await _context.Carros.AsNoTracking().ToListAsync();

            return carros;
        }
    }
}