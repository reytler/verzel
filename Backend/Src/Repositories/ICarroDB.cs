using verzel.Models;

namespace verzel.interfaces
{
    public interface ICarroDB {
        Task createCarro(Carro carro);
        Task updateCarro(Carro novosdados);

        Task deleteCarro(long carro);

        Task<Carro> findByid(long Id);
        Task<List<Carro>> searchCarro(string nome, string marca);
    }
}