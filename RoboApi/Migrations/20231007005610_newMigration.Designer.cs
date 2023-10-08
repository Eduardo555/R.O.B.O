﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace RoboApi.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20231007005610_newMigration")]
    partial class newMigration
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.11");

            modelBuilder.Entity("Braco", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<int>("Cotovelo")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Lado")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Pulso")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Braco");
                });

            modelBuilder.Entity("Cabeca", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<int>("Inclinacao")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Rotacao")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Cabeca");
                });

            modelBuilder.Entity("Todo", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<bool>("Done")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Todos");
                });
#pragma warning restore 612, 618
        }
    }
}
