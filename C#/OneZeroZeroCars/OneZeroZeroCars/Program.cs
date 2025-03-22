namespace OneZeroZeroCars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            for (int i = 0; i < 100; i++)
            {
                var thread = new Thread(() => MoveCar(i));
                thread.Start();
            }
        }

        static void MoveCar(int id)
        {
            Console.Write($"Car #{id} started mooving __________\n");
            Task.Delay(1500).Wait();
            Console.Write($"__________ Car #{id} arrived\n");
        }
    }
}
