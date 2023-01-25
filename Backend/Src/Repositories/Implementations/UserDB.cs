using verzel.DTOs;
using verzel.interfaces;
using verzel.Models;
using Microsoft.EntityFrameworkCore;

namespace verzel.Repository {
    public class UserDB : IUserDB
    {
        private readonly VerzelContext _context;
        public UserDB(VerzelContext context)
        {
            _context = context;
        }
        public async Task createUser(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> searchForUsuario(string usuario)
        {
            var user = await _context.Users.Where(u => u.Usuario == usuario).AsNoTracking().ToListAsync();
            if(user.Count > 0){
                return true;
            }


            return false;
        }

        public async Task<User> validate(UserDTO user)
        {
            var userResult = await _context.Users
            .AsNoTracking()
            .Where(u=> u.Usuario ==  user.Usuario && 
                u.Senha == user.Senha).FirstOrDefaultAsync();
            
            return userResult;
        }
    }
}