
using Microsoft.AspNetCore.Http.HttpResults;
using System.Numerics;

namespace SolarWebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddAuthorization();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddCors();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseCors(builder => builder
                           .AllowAnyOrigin()
                           .AllowAnyMethod()
                           .AllowAnyHeader());
            //get plants
            app.MapGet("/plants", () =>
            {
                return PlantRepository.GetPlants();
            })
            .WithName("GetPlants")
            .WithOpenApi();

            app.MapPost("/plants", (Plant plant) =>
            {
                PlantRepository.AddPlant(plant);

                //return Results.Created($"/plants/{plant.Id}", plant);
                return Results.Ok(plant);
            });

            app.MapPut("/plants/{id}", (int id, Plant updatedPlant) =>
            {
                Plant plantToUpdate = PlantRepository.getSpecificPlant(id);

                if (plantToUpdate != null)
                {
                    // Update the name of the found plant
                    plantToUpdate.Name = updatedPlant.Name;
                    plantToUpdate.Address = updatedPlant.Address;

                    // Return the updated plant
                    return Results.Ok(plantToUpdate);
                }
                else
                {
                    // Return NotFound result if the plant with the provided ID was not foun

                    return Results.NotFound();
                }
            });

            app.MapPost("/plantstest", () =>
            {

                //return Results.Created($"/plants/{plant.Id}", plant);
                return Results.Ok("ok");
            });

            app.MapGet("/plant/{id}", (int id) =>
            {
                Plant plantToUpdate = PlantRepository.getSpecificPlant(id);

                if (plantToUpdate != null)
                {
                   
                    return Results.Ok(plantToUpdate);
                }
                else
                {
                   
                    return Results.NotFound();
                }

            });

            app.MapDelete("/plants/{id}", (int id) =>
            {
                Plant plantToDelete = PlantRepository.getSpecificPlant(id);

                if (plantToDelete != null)
                {

                    PlantRepository.deletePlant(plantToDelete);
                    return Results.Ok();
                }
                else
                {
                    return Results.NotFound();
                }

            });


            app.MapPost("/authenticate", (User user) =>
            {
                if(UserRepository.doesUserExist(user.Name, user.Password))
                {
                    return Results.Ok();
                }

                return Results.Unauthorized();
               
            });


            app.Run();
        }
    }
}
