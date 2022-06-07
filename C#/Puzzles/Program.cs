// random array Create a function called RandomArray() that returns an integer array
// Create an empty array that will hold 10 integer values.  
// Loop through the array and assign each index a random integer value between 5 and 25. 
// Print the min and max values of the array
// Print the sum of all the values

// function randomArr(){
//     newArr = [0,0,0,0,0,0,0,0,0,0]
//     for(value in newArr){
//         value = Math.floor(Math.random(() * 26) + 5);
//     }
//     return newArr
// }
// newArr Min Max Sum

// static int[] RandomArray()
// {
//     int[] newArr = new int[10];
//     for (int i = 0; i < 10; i++)
//     {
//         Random rand = new Random();
//         newArr[i]=(rand.Next(5,26));
//     }
//     return newArr;
// }
// int[] MyArr = RandomArray();
// foreach( int val in MyArr)
// {
//     Console.WriteLine(val);
// }
// coin flip Create a function called TossCoin() that returns a string
// Have the function print "Tossing a Coin!"
// Randomize a coin toss with a result signaling either side of the coin
// Have the function print either "Heads" or "Tails"
// Finally, return the result

// Function coinToss(){
//     Console.log("tossing a coin!");
//     var i = Math.floor(Math.Random()*10);
//     if(i % 2 == 1)
//         return "heads";
//     else{
//         return "tails";
//     }
// }

// static string TossCoin()
// {
//     Console.WriteLine("Tossing a coin!");
//     Random rand = new Random();
//     int coin =(rand.Next(2));
//     if(coin % 2 == 1)
//     {
//         return "heads";
//     }
//     else
//     {
//         return "tails";
//     }
// }
// Console.WriteLine(TossCoin());
// Console.WriteLine(TossCoin());
// Console.WriteLine(TossCoin());



// names Build a function Names that returns a list of strings.  In this function:
// Create a list with the values: Todd, Tiffany, Charlie, Geneva, Sydney
// Return a list that only includes names longer than 5 characters

// static List<string> Names()
// {
//     List<string> names = new List<string>{"Todd", "Tiffany", "Charlie", "Geneva", "Sydney"};
//     int count = names.Count;
//     // foreach(var name in names)
//     // {
//     //     Console.WriteLine(name);
//     // }
//     for(int i = 0; i < names.Count; i++)
//     {
//         if(names[i].Length < 5)
//         {
//             names.Remove(names[i]);
//         }
//     }
//     return names;
// }

// List<string> test = Names();
// foreach(var t in test)
// {
//     Console.WriteLine(t);
// }