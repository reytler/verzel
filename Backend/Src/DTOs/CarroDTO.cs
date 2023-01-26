using System.ComponentModel.DataAnnotations;

namespace verzel.DTOs{
    public class CarroDTO {

        [Required(ErrorMessage = "O Campo Nome é requerido")]
        public string Nome {get; set;} = "";
        
        [Required(ErrorMessage = "O Campo Marca é requerido")]
        public string Marca {get; set;} = "";

        [Required(ErrorMessage = "O Campo Modelo é requerido")]
        public string Modelo {get; set;} = "";

        [Required(ErrorMessage = "O Campo Foto é requerido")]
        public string? Foto {get; set;}

    }
}