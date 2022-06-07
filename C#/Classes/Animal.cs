class Animal
// defines and constructs
{
    // establish attributes, things that describe an animal
    public string Species;
    public double Weight;
    public string Diet;
    public bool isFriendly;
    // constructor
    public Animal(string sp, double w, string d) 
    {
    // Attributes = values
        Species = sp;
        Weight = w;
        Diet = d;
        isFriendly = false;
    }
        public Animal(string sp, double w, string d, bool isFr) 
    {
    // Attributes = values
        Species = sp;
        Weight = w;
        Diet = d;
        isFriendly = isFr;
    }
    // methods functions what they can do
}
