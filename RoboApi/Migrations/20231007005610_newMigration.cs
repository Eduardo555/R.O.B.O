using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RoboApi.Migrations
{
    /// <inheritdoc />
    public partial class newMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Braco",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Lado = table.Column<string>(type: "TEXT", nullable: false),
                    Cotovelo = table.Column<int>(type: "INTEGER", nullable: false),
                    Pulso = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Braco", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cabeca",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Rotacao = table.Column<int>(type: "INTEGER", nullable: false),
                    Inclinacao = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cabeca", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Braco");

            migrationBuilder.DropTable(
                name: "Cabeca");
        }
    }
}
