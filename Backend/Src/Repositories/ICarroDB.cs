using verzel.Models;

namespace verzel.interfaces
{
    public interface ICarroDB {
        Task createCarro(Carro carro);
        Task<List<Carro>> searchCarro(string nome, string marca);
    }
}