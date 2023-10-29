# JavaScript_Basic_Projects
## Revising the Projects

# Solution Code for javascript
## Manipulate the tags/elements in HTML and CSS using JavaScript
# Project 1
```javascript
console.log("Color changing of six Blocks");

/*
Yellow,  White,  Orange,  Red,  Green,   Blue
*/

const colorButtons = document.querySelectorAll('.button');
const body = document.querySelector('body');


colorButtons.forEach((button) =>{
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target)
        switch (event.target.id) {
            case 'red':
                body.style.backgroundColor = event.target.id;               
                break;
            case 'yellow':
                body.style.backgroundColor = event.target.id;               
                break;
            case 'white':
                body.style.backgroundColor = event.target.id;               
                break;
            case 'orange':
                body.style.backgroundColor = event.target.id;               
                break;
            case 'blue':
                body.style.backgroundColor = event.target.id;               
                break;
            case 'green':
                body.style.backgroundColor = event.target.id;               
                break;

            default:
                break;
        }
    })
})

```

# Project 2 
## BMI Calculator 

## what is BMI Calculator ?

Calculate Your Body Mass Index
Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.

Enter your weight and height using standard or metric measures.
"Compute BMI" and your BMI will appear below.

## BMI Categories:
Underweight = <18.5
Normal weight = 18.5–24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater

# Solution code

```javascript

console.log("BMI Calculator")

```