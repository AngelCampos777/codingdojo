//1 The differences in point of view stem from who is giving the reader the information, this is done with specific wording. if we can use a filter through the document for words we could write a code to guess at the most likely pov.
//2 i am unsure how to input the text we would be looking through here, but if we have the words that determine the point of view in seperate arrays we might be able to have the code look through and count how many times certian words pop up.
var first = ["i","we", "us", "our", "ourselves"] //not sure if caapitals matter here; is We == we?
var second = ["you", "your", "yours", "yourself", "yourselves"]
var third = ["he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves"] //or is it's == its?

//function scanTxt("text doc");
 //for(var text doc){
    //count each instance of use for element in first, second, and third.;
    // if "text" == first[i];{
        //if this is true create a boolean?
        //var firstCount = count boolean^
    //}
    // else if "text" == second[i];{
        //var secondCount = count boolean
    // else if "text" == third[i]{
        //var thirdCount = count boolean
    //}
    //}
    //log counts;
//}

// we need to disregard quotes
//biggest number should indicate how many hits each word got in text and then we can maybe infer that the text is in a pov based off this number?

//3 a major problem with problem solving is not always having the tools necessary to solve the problems at hand in the quickest way you think of. Sometimes you just need a hammer when you dont have one. People are quick to get down on themselves when they know that the don't know something and also when they are told when they dont know something.
