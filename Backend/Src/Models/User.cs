using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace verzel.Models {
    [Table("usuario")]
    public class User{
        [Key,Column("CODIGO")]
        public string? Id {get; set;}

        [Column("NOME")]
        public string? Nome {get; set;}

        [Column("USUARIO")]
        public string? Usuario {get; set;}

        [Column("SENHA")]
        public string? Senha {get; set;}

        [Column("ROLE")]
        public string? Role {get; set;}

    }
}