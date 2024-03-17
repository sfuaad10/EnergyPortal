using Bogus;

namespace SolarWebApi
{
    public static  class PlantRepository
    {
        public static List<Plant> PLANTSLIST = LoadRandomPlants();


        private static List<Plant> LoadRandomPlants(int numberOfPlants = 5)
        {
            // Bogus data generator specific to the 'en_GB' locale for UK-specific data
            var plantFaker = new Faker<Plant>("en_GB")
                .RuleFor(p => p.Name, f => $"Solar Plant {f.Address.City()}")
                .RuleFor(p => p.Id, f => f.Random.Number(1000, 9999))
                .RuleFor(p => p.Client, f => $"Client_{f.Company.CompanyName()}")
                .RuleFor(p => p.Address, f => $"{f.Address.StreetAddress()}, {f.Address.City()}");

            var randomPlants = plantFaker.Generate(numberOfPlants);

            return randomPlants;
        }

        public static void AddPlant(Plant plant)
        {
            PLANTSLIST.Add(plant);
        }

        public static List<Plant> GetPlants()
        {
            return PLANTSLIST;
        }

        public static Plant getSpecificPlant(int id)
        {
            Plant? plant =  PLANTSLIST.FirstOrDefault(p => p.Id == id);

            return plant;

           
        }

        public static void deletePlant(Plant plant)
        {
            PLANTSLIST.Remove(plant);
        }

    }
}
