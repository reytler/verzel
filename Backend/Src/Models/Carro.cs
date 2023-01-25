using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace verzel.Models
{
    [Table("carro")]
    public class Carro{
        [Key,Column("ID")]
        public long Id {get; set;}

        [Column("NOME")]
        public string? Nome {get; set;}

        [Column("MARCA")]
        public string? Marca {get; set;}

        [Column("MODELO")]
        public string? Modelo {get; set;}
        
        [Column("FOTO")]
        public byte[]? Foto {get; set;}

    }
}