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
    }
}