// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

// 3 base
// int[] numArray;
// numArray = new int[] {0,1,2,3,4,5,6,7,8,9};
// foreach(int num in numArray){
//     Console.WriteLine(num);
// }

string[] Array2 = new string[] {"Tim", "Martin", "Nikki", "Sara"};
// foreach(string word in Array2){
// Console.WriteLine(word);
// }

// bool[] Array3 = {true,false,true,false,true,false,true,false,true,false};
// foreach(bool value in Array3){
// Console.WriteLine(value);
// }


List<string> flavors = new List<string>();
flavors.Add("Mango");
flavors.Add("Coconut");
flavors.Add("Lime");
flavors.Add("Strawberry");
flavors.Add("Pecan");
flavors.Add("Red Bean");
// Console.WriteLine(flavors[3]);
// flavors.Remove(flavors[3]);
// Console.WriteLine($"There are {flavors.Count} flavors to choose from.");
// foreach(string flavor in flavors){
//     Console.WriteLine(flavor);
// }

Dictionary<string,string> orders = new Dictionary<string,string>();
orders.Add("Tim", flavors[2]);
orders.Add("Martin", flavors[3]);
orders.Add("Nikki", flavors[1]);
orders.Add("Sara", flavors[5]);
foreach (var order in orders)
{
    Console.WriteLine(order.Key + " - " + order.Value);
}