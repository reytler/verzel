using System.ComponentModel.DataAnnotations;

namespace verzel.DTOs{
    public class CarroDTO {

        public long Id {get; set;}

        [Required(ErrorMessage = "O Campo Nome é requerido")]
        public string Nome {get; set;} = "";
        
        [Required(ErrorMessage = "O Campo Marca é requerido")]
        public string Marca {get; set;} = "";

        [Required(ErrorMessage = "O Campo Modelo é requerido")]
        public string Modelo {get; set;} = "";

        [Required(ErrorMessage = "O Campo Ano é requerido")]
        public int Ano {get; set;}

        [Required(ErrorMessage = "O Campo Km é requerido")]
        public long Km {get; set;}

        [Required(ErrorMessage = "O Campo Valor é requerido")]
        public long Valor {get; set;}
        public string? Iduser {get; set;}

        [Required(ErrorMessage = "O Campo Foto é requerido")]
        public byte[]? Foto {get; set;}

    }
}