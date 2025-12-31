# Calculator
Final project of [The Odin Project](https://www.theodinproject.com/about)'s Foundations course, built with Javascript, HTML, and CSS.

[Live Preview](jshuhler.github.io/calculator)

[Favicon icon created by Arkinasi - Flaticon](https://www.flaticon.com/authors/arkinasi)

# Dev Notes
- [x] add if loops in the selecting operator and typing second number
    - [x] if there is no initalNum, then the number entered becomes the initialNum
    - [x] if there is no initialNum, clicking the operator doesn't do anything
    - [x] if there is an initialNum && operatorSelect, then the number entered becomes secondNum
    - [x] the Num functions might need to just be combined.
- [x] doing the actual math stuff
    - [x] listener on the equal button
    - [x] use the value of `operatorSelect` worked backwards to know which function to call
    - [x] push the string of the equation entered to the top display and put the answer on the main display
- [x] clear button
    - [x] reset the variables back to undefined
- [x] delete button
    - [x] turn the string back to an array, remove the last element of the array, join it back to a string, display that value in the display? 
    - [x] what if it's the secondNum instead of the initialNum?
        - [x] if statement to check if there is an operator, if so, do all of that on the secondNum, otherwise do it on the initialNum?
- [x] clean up
    - [x] don't allow more than one `.` per Num
        - listener if it is pressed it turns the button off until and operator, equal sign, delete, or clear is selected?
        - listener to change value of a variable. when `.` is clicked, it sets decimal to true, if decimal variable is equal to true, the button is disabled. clicking any operator btn changes the decimal variable to false, which enables the button. 
    - [x] entering initialNum, selecting an operator, entering secondNum, then selecting an operator should execute the fucntion and then store that Num as the new initialNum
        - not sure if the last part about storing the outcome as the new initialNUm is needed, but look into it for extra credit
    - [x] round all returned numbers to 5 decimals 
    - [x] add the parseFloat and toFloat to the answer variable

- CSS
    - [x] right align displays
    - [x] top display smaller text
    - [x] dolch color scheme
    - [x] space the buttons and body of the calculator
    - [ ] make clear and delete buttons width of calc
    - [ ] selected buttons depress and have styling on select
    - [x] on button hover, just make the button some % darker of the current color