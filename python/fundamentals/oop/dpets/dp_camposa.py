# ninja class
class Ninja:
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats #not used
        self.pet_food = pet_food #do pets have diety restrictions?
        self.pet = pet

# ninja methods
    def walk(self): #invoke pet play
        self.pet.play()

    def feed(self): #invoke pet eat
        if len(self.pet_food) > 0:
            food = self.pet_food.pop()
            print(f"Feeding {self.pet.name} {food}!")
            self.pet.eat() #i did have this, didn't have the rest 15-19
        else:
            print("Oh no!!! you need more pet food!")
        return self

    def bathe(self): #invoke pet noise
        self.pet.cry()

# pet class
class Pet:
    def __init__(self, name, type, tricks, sound, health = 50, energy = 50):
        self.name = name
        self.type = type #like bird dog fish? or poison fire electric
        self.tricks = tricks
        self.health = health #these numbers dont decrease at all
        self.energy = energy #is this supposed to be a tamagochi or a pokemon clone?
        self.sound = sound

# pet methods
    def sleep(self): #energy+25
        self.pet.energy += 25
        return self
    def play(self): #energy+5 health+10
        self.pet.energy += 5
        self.pet.health += 10
        return self
    def eat(self): #health+5
        self.pet.health += 5
        return self
    def noise(self): # sound
        if type1: # bird
            print('Kacaw!')
        elif type2: # dog
            print('BaWoooo!')
        else type3: # fish
            print('-slapslapslap-!')
        return self

#nibbles = Pet("Mr. Nibbles","Horse",['nibbles on things','is invisible'],"Hey Hey")
#variable name  set class pet (name, type, [tricks?], sound?)