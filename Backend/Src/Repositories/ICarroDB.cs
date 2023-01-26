using verzel.Models;

namespace verzel.interfaces
{
    public interface ICarroDB {
        Task createCarro(Carro user);
    }
}