namespace OneZeroZeroCars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var mainThr = Thread.CurrentThread;
            mainThr.Name = "Main thread";

            CountDown();
            CountUp();

            Console.WriteLine($"{mainThr.Name} is completed");

            Console.ReadKey();
        }

        public static void CountDown()
        {
            for (int i = 10; i >= 0; i--)
            {
                Console.WriteLine($"Timer #1: {i} seconds left");
                Thread.Sleep(1000);
            }
        }

        public static void CountUp()
        {
            for (int i = 0; i <= 10; i++)
            {
                Console.WriteLine($"Timer #2: {i} seconds counted");
                Thread.Sleep(1000);
            }
        }
    }
}
