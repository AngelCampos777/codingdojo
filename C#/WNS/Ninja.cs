class Ninja : Human
{
    public Ninja(string name) : base(name)
    {
        Dexterity = 175;
    }
    public override int Attack(Human target)
    {
        target.Health = target.Health - (5*this.Dexterity);
        Random rand = new Random();
        int chance = rand.Next(0,5);
        if(chance == 0)
        {
            target.Health = target.Health - 10;
        }
        return target.Health;
    }
    public int Steal(Human target)
    {
        target.Health = target.Health - 5;
        this.Health = this.Health + 5;
        return this.Health;
    }
}
