console.log('Running TS Day 2!')

// Exercise 1: Introduce yourself
const userName: string = 'Mattie';
const desiredSalary: number = 100000;

const goal = `Make at least $${desiredSalary} in a satisfying job at the intersection of tech and cultural heritage.`;

console.log(`My name is ${userName} and my goal is to ${goal}`);

// Exercise 2: Simple age categorization
const age: number = 37;

function ageCheck(age: number): string {
    if (age < 18) return 'minor';
    else if ( age < 30) return 'young adult';
    return 'adult';
}

const ageGroup = ageCheck(age);
console.log(`${userName} is categorized as a(n) ${ageGroup}.`);

// Exercise 3: Loop through Learning goals
const learningGoals: string[] = [
    "Python",
    "AI/ML",
    "Web Development",
    "Cultural Heritage Tech",
    "Career Pivot",
    "LLMs"
];

learningGoals.forEach(goal => {
    console.log (`- ${goal}`);
});

// Exercise 4: Use .map() to Transform Data
const roles: string[] = [
    "AI Engineer",
    "Digital Archivist",
    "Frontend Developer",
    "LLM Specialist",
    "Creative Director",
    "Cultural Heritage Technologist"
];

// Convert each to an object with boolean flag:
const transformed = roles.map(role => ({
    title: role,
    techRelated: role.includes('Engineer') || role.includes('Developer') || role.includes('AI')
}));

console.log(transformed);

// Exercise 5: Filter for Tech-Related Roles
const suitableRoles = roles.filter(role =>
    role.includes('Engineer') ||
    role.includes('Developer') ||
    role.includes('AI') ||
    role.includes('Archivist')
);

console.log('Suitable roles:', suitableRoles);

// Exercise 6: Bonus - Map + Filter Combined
const jobLevels = ['Junior', 'Mid', 'Senior'];

// Create combinations of levels and roles
const aiTitles = jobLevels
    .map (level => `${level} AI Engineer`)
    .filter (title => title.includes("AI"));

console.log(aiTitles);