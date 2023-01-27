namespace verzel.Utils
{
    public class Uuid {
        public static string getUuid() {
            Guid myuuid = Guid.NewGuid();
            string myuuidAsString = myuuid.ToString();

            return myuuidAsString;
        }
    }
}
