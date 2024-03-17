namespace SolarWebApi
{
    public static class UserRepository
    {

        public static List<User> users = new List<User>() { new User { Id = 1, Name = "test", Password = "test" } };

       

        public static bool doesUserExist(string username, string password)
        {

            foreach(User user in users)
            {
                if(user.Password == password && user.Name == username)
                {
                    return true;
                }
            }

            return false;

        }



    }
}
