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

        public async Task deleteCarro(long Id)
        {
            var carro = new Carro{Id = Id};
            _context.Entry(carro).State = EntityState.Deleted;
            await _context.SaveChangesAsync();
        }

        public async Task<Carro> findByid(long Id)
        {
            var carro = new Carro();
            carro = await _context.Carros
                            .AsNoTracking()
                            .Where(c=>c.Id == Id)
                            .FirstOrDefaultAsync();

            return carro;
        }

        public async Task<List<Carro>> getMycars(string Iduser)
        {
            var carros = new List<Carro>();
            carros = await _context.Carros
                .AsNoTracking()
                .Where(c=>c.Iduser == Iduser)
                .ToListAsync();
            
            return carros;
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
        
        public async Task updateCarro(Carro novosdados)
        {
            _context.Carros.Update(novosdados);
            await _context.SaveChangesAsync();
        }
    }
}