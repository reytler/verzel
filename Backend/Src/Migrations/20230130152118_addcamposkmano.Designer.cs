﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace verzel.Migrations
{
    [DbContext(typeof(VerzelContext))]
    [Migration("20230130152118_addcamposkmano")]
    partial class addcamposkmano
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("verzel.Models.Carro", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasColumnName("ID");

                    b.Property<int?>("Ano")
                        .HasColumnType("int")
                        .HasColumnName("ANO");

                    b.Property<byte[]>("Foto")
                        .HasColumnType("longblob")
                        .HasColumnName("FOTO");

                    b.Property<string>("Iduser")
                        .HasColumnType("longtext")
                        .HasColumnName("IDUSER");

                    b.Property<long?>("Km")
                        .HasColumnType("bigint")
                        .HasColumnName("KM");

                    b.Property<string>("Marca")
                        .HasColumnType("longtext")
                        .HasColumnName("MARCA");

                    b.Property<string>("Modelo")
                        .HasColumnType("longtext")
                        .HasColumnName("MODELO");

                    b.Property<string>("Nome")
                        .HasColumnType("longtext")
                        .HasColumnName("NOME");

                    b.Property<long>("Valor")
                        .HasColumnType("bigint")
                        .HasColumnName("VALOR");

                    b.HasKey("Id");

                    b.ToTable("carro");
                });

            modelBuilder.Entity("verzel.Models.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("varchar(255)")
                        .HasColumnName("CODIGO");

                    b.Property<string>("Nome")
                        .HasColumnType("longtext")
                        .HasColumnName("NOME");

                    b.Property<string>("Role")
                        .HasColumnType("longtext")
                        .HasColumnName("ROLE");

                    b.Property<string>("Senha")
                        .HasColumnType("longtext")
                        .HasColumnName("SENHA");

                    b.Property<string>("Usuario")
                        .HasColumnType("longtext")
                        .HasColumnName("USUARIO");

                    b.HasKey("Id");

                    b.ToTable("usuario");
                });
#pragma warning restore 612, 618
        }
    }
}