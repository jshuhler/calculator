# Calculator
Final project of [The Odin Project](https://www.theodinproject.com/about)'s Foundations course. 

[Live Preview](jshuhler.github.io/calculator)

Favicon from <a href="https://www.flaticon.com/free-icons/calculator" title="calculator icons">Calculator icons created by Freepik - Flaticon</a>

# Dev Notes
- add if loops in the selecting operator and typing second number
    - if there is no initalNum, then the number entered becomes the initialNum
    - if there is no initialNum, clicking the operator doesn't do anything
    - if there is an initialNum && operatorSelect, then the number entered becomes secondNum
    - the Num functions might need to just be combined.
- doing the actual math stuff
    - listener on the equal button
    - use the value of `operatorSelect` worked backwards to know which function to call
    - push the string of the equation entered to the top display and put the answer on the main display
- clear button
    - reset the variables back to undefined
- delete button
    - turn the string back to an array, remove the last element of the array, join it back to a string, display that value in the display? 
    - what if it's the secondNum instead of the initialNum?
        - if statement to check if there is an operator, if so, do all of that on the secondNum, otherwise do it on the initialNum?
- clean up
    - don't allow more than one `.` per Num
        - listener if it is pressed it turns the button off until and operator, equal sign, delete, or clear is selected?
    - entering initialNum, selecting an operator, entering secondNum, then selecting an operator should execute the fucntion and then store that Num as the new initialNum
        - not sure if the last part about storing the outcome as the new initialNUm is needed, but look into it for extra credit
    - round all returned numbers to 5 decimals 

- CSS
    - right align displays
    - top display smaller text
    - dolch color scheme
    - space the buttons and body of the calculator
    - selected buttons depress and have styling on select
    - on button hover, just make the button some % darker of the current color