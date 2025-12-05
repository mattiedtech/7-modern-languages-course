name = "Mattie"
age = 37

println(name)
println(age)

if age < 18
  println("Minor")
elseif age <= 30
  println("Young Adult")
else
  println("Adult")
end

# Arrays in Julia
goals = ["Julia Proficient", "Python Fluent", "Basic Programming Knowledge", "AI/ML Knowledge", "LLM Knowledge"]

for goal in goals
  if contains(goal, "Julia") || contains(goal, "Python") || contains(goal, "Programming")
    println(goal, " → Tech")
  elseif contains(goal, "AI") || contains(goal, "ML") || contains(goal, "LLM")
    println(goal, " → AI")
  else
    println(goal, " → Other")
  end
end