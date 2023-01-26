using System.ComponentModel.DataAnnotations;

namespace verzel.DTOs{
    public class LoginDTO {

        [Required(ErrorMessage = "O Campo Usuário é requerido")]
        public string Usuario {get; set;} = "";
        
        [Required(ErrorMessage = "O Campo Senha é requerido")]
        public string Senha {get; set;} = "";

    }
}