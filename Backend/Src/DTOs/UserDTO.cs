using System.ComponentModel.DataAnnotations;

namespace verzel.DTOs{
    public class UserDTO {

        [Required(ErrorMessage = "O Campo Nome é requerido")]
        public string? Nome {get; set;}

        [Required(ErrorMessage = "O Campo Usuário é requerido")]
        public string Usuario {get; set;} = "";
        
        [Required(ErrorMessage = "O Campo Senha é requerido")]
        public string Senha {get; set;} = "";

        [Required(ErrorMessage = "O Campo role é requerido")]
        public string? Role {get; set;}
    }
}