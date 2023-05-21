# geoMastermind Quiz Testing 

![geoMastermin viewed in different screens]()

[View Live site here](https://kimbergstroem.github.io/PP2/)

---

## CONTENTS

* [Automated Testing](#Automated-Testing)
  * [W3C Validator](#W3C-Validator)
  * [JavaScript Validator](#JavaScript-Validator)
  * [Lighthouse](#Lighthouse)
  * [Wave Accessibility Test](#Wave)
* [Manual Testing](#Manual-Testing)
  * [Testing User Stories](#Testing-User-Stories)
  * [Full Testing](#Full-Testing)

  ---

Throughout the game development process, I relied on Google Developer Tools to experiment with different elements and phases of the game. Additionally, I leveraged the console section in Chrome Dev Tools to test JavaScript code and address any problems or glitches that occurred in the code.

I shared my project with the peer code review channel on Slack, but no concerns or problems were raised regarding it.

---

## Automated Testing 

### W3C Validator 

* [W3C validation for index.html](https://github.com/KimBergstroem)
  * Coming soon
* [W3C validation for 404.html](https://github.com/KimBergstroem)
  * Coming soon
* [Jigsaw W3C Validation for style.css](https://github.com/KimBergstroem) 
  *  Coming soon


### JavaScript Validator 

* [Js Hint validation for script.js](https://github.com/KimBergstroem) 
  * Coming soon
  * Coming soon
* [Js Hint validation for questions.js](https://github.com/KimBergstroem)
  * Coming soon

### Lighthouse 

**index.html** 
  * Desktop 
    * Lightmode - Coming soon

    ![index.html lighthouse desktop(light)](https://github.com/KimBergstroem)

    * Darkmode - Coming soon

    ![index.html lighthouse desktop(dark)](https://github.com/KimBergstroem)

  * Mobile
    * Lightmode - Coming soon

    ![index.html lighthouse mobile(light)](https://github.com/KimBergstroem)

    * Darkmode - Coming soon

    ![index.html lighthouse mobile(dark)](https://github.com/KimBergstroem)

**404.html**
  * Desktop
    * Lightmode - Coming soon

    ![404.html lighthouse desktop(light)](https://github.com/KimBergstroem)

    * Darkmode - Coming soon

    ![404.html lighthouse desktop(dark)](https://github.com/KimBergstroem)

  * Mobile
    * Lightmode - Coming soon

    ![404.html lighthouse mobile(light)](https://github.com/KimBergstroem)

    * Darkmode - Coming soon

    ![404.html lighthouse mobile(dark)](https://github.com/KimBergstroem)

### Wave

![Wave test for quiz game](https://github.com/KimBergstroem)

What was testet - Coming soon
* Coming soon

---

## Manual Testing

### Testing User Stories

**First Time Visitors** 

|First Time User Goals| How this was achieved|
| :--- | :--- |
| More information is coming| More information is coming| 
| More information is coming| More information is coming| 
| More information is coming| More information is coming|  
| More information is coming| More information is coming|
| More information is coming|

**Returning Visitors**

|Returning User Goals| How this was achieved|
| :--- | :--- |
| More information is coming| More information is coming|
| More information is coming| More information is coming| 

---
### Full Testing 

Full Testing was performed on these devices and browsers for each section of game 

**Devices** - Examples
1. S20 Ultra - Examples
2. iPhone 12 Pro - Examples
3. Dell inspiron 3593 - Examples
4. Lenovo Thinkpad W541 - Examples

**Browsers** - Examples
1. Microsoft Edge - Examples
2. Google Chrome - Examples	
3. Mozilla firefox - Examples	
4. Safari - Examples

I also asked family and friends to test my game on their devices no issues were reported in game except for background video not always playing in IOS devices(I noted this in Known Bugs) 

`Home Page Section` - Examples

|Features|Expected result| Actual result| Pass/Fail | 
| ------ | ------------- | ------------ | --------- |
| Quiz Heading| To appear on top of home page and be of font style noto serif, with linear gradient css style| As expected result | Pass |
|Copyright Statement| To appear at bottom of screen, centered and in open sans font style with linear gradient css style|  As expected result| Pass|
| How To Play Button | *When hovered on-resulting in a white boxshadow css style <br> * when clicked on- redirects user to How To Play Page | As expected result except hover effect doesnt really work on touchscreens | Pass |
|Play Quiz Button | *When hovered on - reslts in a white boxshadow effect <br> * When clicked on- if a valid username has been given in input field, the user will be directed to the game page. If no username was placed in input field, it will trigger a validation message just above the button. If username given was invalid, the playbutton will trigger a validation message as well. | As expected result except hover effect doesnt really work on touchscreens|  Pass |  
| Input field for username | * When hovered on - the field color changes and the cursor changes to text cursor and a message is shown that says "please fill out this field" <br> * When clicked on - field color changes back and the field Allows user to type| As expected result except hover effect doesnt work on touchscreens | pass |
| Username Validation Message| * Should pop up when user clicks on Play Quiz button without entering anything in input field. <br> * Should pop up if user enters a username with only 2 charectors or less.<br> * Should be displayed if user enters username with blank spaces | As expected result | Pass |

`Game Page Section` - Examples

|Features|Expected result| Actual result| Pass/Fail | 
| ------ | ------------- | ------------ | --------- |
| Quiz Heading| To appear on top of screen and be of font style noto serif, with linear gradient css style| As expected result | pass |
|Copyright Statement| To appear at bottom of screen, centered and in open sans font style with linear gradient css style|  As expected result| pass|
| Question number feature| The value for feature should increase by 1 everytime an option is selected. | As expected result | Pass |
| Score feature | * The value for score should increase by 1 everytime an answer selected was correct or when answer button turns green | As expected result | pass |
| Count Down Timer | * The countdown should start at 60 seconds at start of game. When it reaches 0 seconds, the game should end and redirect user to Gameover page with display message "sorry you've run out of time"| As expected result | Pass |
| Remaining Questions feature |* When game starts , The value for remaining is 10. Everytime the player moves on to another question the value should decrease by 1 . For the last question, The value for "Remaining" should be 0. | As expected result | Pass |
|Answer Buttons-<br>`JavaScript` | * When hovered on - should show user boxshadow effect and text color changing. <br> * When clicked on - * Should either turn green or red according to if answer is correct or wrong. <br> *Should promt to show user the next question and allow changes to values of scores, question and remaining. | As expected result except hover effect doesnt work on touchscreens| Pass |
| Questions/Statements | Should be legible and in color #2B2B2B with textshadow #FAF9F6 | As expected result | Pass |

`Show Score Section` - Examples

|Features|Expected result| Actual result| Pass/Fail | 
| ------ | ------------- | ------------ | --------- |
| Quiz Heading| To appear on top of screen and be of font style noto serif, with linear gradient css style| As expected result | pass |
|Copyright Statement| To appear at bottom of screen, centered and in open sans font style with linear gradient css style|  As expected result| pass|
| Statement that appears when you have run out of time | This should appear only when you've run out of time while playing the game and it is shown just below the main heading | As expected result | Pass |
| Gameover heading | Seen as 2nd heading in gameover page after main heading and seen inside the yellow background section. | As expected result | Pass |
| You score displayed out of 10 | Your score should be displayed as "Your score :(Your score)/10"in bold and this is displayed directly below Gameover heading. | As expected result | Pass |
| Performance statement | According to your score , the performance statement will be different .* If your score is 10/10 - statement should say "Congratulations! You really know your stuff (value of username)!" <br> If score is >= 7 - statement should say "`Well done (value of username)! This is a good score but there is still room for improvement" <br> If score <7, >5 - statement should say "(value of username), You've just passed but you can definetly do better"<br> if score is < 5 - then statement should say "Oh no, someone needs to revise their notes!Try again (value of username)? | As expected result | Pass |
| Play Again Button | * When hovered on - should show box shadow effect. <br> * When clicked on - should redirect user back to home page | As expected result except hover effect doesnt work on touchscreens | Pass |

`How To Play Rules Popup` - Examples

|Features|Expected result| Actual result| Pass/Fail | 
| ------ | ------------- | ------------ | --------- |
| Quiz Heading| To appear on top of screen and be of font style noto serif, with linear gradient css style| As expected result | pass |
|Copyright Statement| To appear at bottom of screen, centered and in open sans font style with linear gradient css style|  As expected result| pass|
| How to Play Heading | The subheading should be in the yellow container , and should be displayed centered and at the top | As expected result | Pass |
| Instructions on how to play | The instructions are displayed as one sentence at a time , where there is space between each sentence . | As expected result | Pass | 
| Go Back Button | * When hovered on - Pointer changes to cursor, shows box shadow style. <br> * when clicked on - Takes user back to Home page | As expected result except hover effect doesnt work on touchscreens | Pass |

`404 Page` - Examples

|Features|Expected result| Actual result| Pass/Fail | 
| ------ | ------------- | ------------ | --------- |
| Quiz Heading| To appear on top of screen and be of font style noto serif, with linear gradient css style| As expected result | pass |
|Copyright Statement| To appear at bottom of screen, centered and in open sans font style with linear gradient css style|  As expected result| pass|
|Quiz error Heading | The subheading should be in the yellow container , and should be displayed centered and at the top | As expected result | Pass |
| Error message | User should be shown an error message and given instructions on how to go back to game | As expected result | Pass |
| Go back link(looks like button) | * When hovered on - Cursor changes to pointer and displays boxshadow style. <br> * When clicked on - Lets user to go back to "index.html" | As expected result except hover effect doesnt work on touchscreens| Pass |