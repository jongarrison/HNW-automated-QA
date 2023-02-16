

console.log("running reg ex examples...")


const categoryTexts = [
    "Some category text (123)",
    "Important category (555)"
]

const nameMatchRegex = new RegExp("([^\(\)]+)");
const numberMatchRegex = new RegExp("(\\d+)");

for (let categoryText of categoryTexts) {

    console.log(`Looking at category text: ${categoryText}`)
    const nameMatch = nameMatchRegex.exec(categoryText)
    if (nameMatch) {
        console.log(`> matched name: '${nameMatch[0].trim()}'`)
    }

    const numberMatch = numberMatchRegex.exec(categoryText)
    if (numberMatch) {
        console.log(`> matched number: '${numberMatch[0]}'`)
    } else {
        console.log(`> ${numberMatch}`)
    }

}