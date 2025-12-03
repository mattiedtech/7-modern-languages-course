package main

import "fmt"

func main() {
	// Explicit variable declaration
	var name string = "Mattie"
	// Implicit variable declaration
	age := 37
	fmt.Println(name)
	fmt.Println(age)

	if age < 18 {
		fmt.Println("Minor")
	} else if age < 30 {
		fmt.Println("Young Adult")
	} else {
		fmt.Println("Adult")
	}

	// For loop from 1 to 5
	for i := 1; i <= 5; i++ {
		fmt.Println(i)
	}

	goals := []string{"Python", "AI", "Basic Programming", "LLMs"}
	// _ ignores the index (Go requires you to use variables unless you explicitly ignore them)
	// range goals interates over each element in the goals slice
	for _, goal := range goals {
		fmt.Println(goal)
	}

	for _, goal := range goals {
		if goal == "AI" || goal == "LLMs" {
			fmt.Println(goal, "→ AI")
		} else if goal == "Python" {
			fmt.Println(goal, "→ Tech")
		} else {
			fmt.Println(goal, "→ General")
		}
	}
}
