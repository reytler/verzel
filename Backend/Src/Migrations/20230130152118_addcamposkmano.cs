using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace verzel.Migrations
{
    public partial class addcamposkmano : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ANO",
                table: "carro",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "KM",
                table: "carro",
                type: "bigint",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ANO",
                table: "carro");

            migrationBuilder.DropColumn(
                name: "KM",
                table: "carro");
        }
    }
}
