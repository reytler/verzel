using verzel.DTOs;
using verzel.Models;

namespace verzel.interfaces {
    public interface IUserDB {
        Task createUser(User user);
        Task<bool> searchForUsuario(string usuario);

        Task<User> validate(UserDTO user);
    }
}