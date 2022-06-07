// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

// loop 1 - 255
// for (int i = 1; i <= 255; i++)
// {
//     Console.WriteLine(i);
// }

// loop 1 - 100 divis by 3 or 5 but not both
// for (int i = 1; i <= 100; i++)
// {
//     if(i % 3 == 0 && i % 5 == 0)
//     {
//         Console.WriteLine(" ");
//     }
//     else if(i % 5 == 0)
//     {
//         Console.WriteLine(i);
//     }
//     else if(i % 3 == 0)
//     {
//         Console.WriteLine(i);
//     }
// }

// fizzbuzz
for (int i = 1; i <= 100; i++)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        Console.WriteLine("FizzBuzz");
    }
    else if(i % 5 == 0)
    {
        Console.WriteLine("Buzz");
    }
    else if(i % 3 == 0)
    {
        Console.WriteLine("Fizz");
    }
    else
    {
        Console.WriteLine(i);
    }
}