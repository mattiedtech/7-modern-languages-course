fn main() {
// variables are immutable by default
let name = "Mattie";
// but you can make them mutable
let mut age = 37;

println!("Name: {}", name);
println!("Age: {}", age);

//Rust doesn't use Boolean! Does use commas
match age {
    0..=17 => println!("Minor"),
    18..=30 => println!("Young Adult"),
    // _ is like else
    _ => println!("Adult"),
};

let goals = vec![
    String::from("Rust Basics"),
    String::from("Python Fluency"),
    String::from("Programming Basics"),
    String::from("AI Proficiency"),
    String::from("LLM Basics"),
];

for goal in &goals {
    if goal.contains("Fluency"){
        println!("{} → Fluent Knowledge", goal);
    } else if goal.contains("Proficiency"){
        println!("{} → Proficient Knowledge", goal);
    } else {
        println!("{} → Basics", goal)
    }
}
}