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

The W3C validator was used to validate the HTML on all pages of the website and the STYLESHEET in css file. JSHint was used to validate all my javascript files used for this project. Click on the below links to have the full validation. No error was found.

### W3C Validator 

* [W3C validation for **index.html**](https://github.com/KimBergstroem)
  * Coming soon
* [W3C validation for **404.html**](https://github.com/KimBergstroem)
  * Coming soon
* [Jigsaw W3C Validation for **style.css**](https://github.com/KimBergstroem) 
  *  Coming soon


### JavaScript Validator 

* [Js Hint validation for **main.js**](https://github.com/KimBergstroem) 
  * Coming soon
  * Audit usage of navigator.userAgent, navigator.appVersion, and navigator.platform - fixed by code "if (typeof window.localStorage !== 'undefined')"
* [Js Hint validation for **popup.js**](https://github.com/KimBergstroem)
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
| As a user, my objective is to discover the instructions on how to play the game in order to enhance my gameplay efficiency.| The game has a "rules" page popup which can be seen when you click on "rules" button on the main page.| 
| As a user, I desire the ability to validate the correctness of my answers, thereby increasing my score| When a user clicks on the answer buttons, a visual indication is provided by changing the color of the button. If the selected answer is correct, the button turns green; otherwise, it turns red.| 
| As a user, I would like to have visibility of the remaining time so that I can maintain a suitable pace during gameplay and avoid running out of time.| The user is provided with a countdown timer that is visible during their gameplay. The countdown timer is also displaying different color depending on the urgency of time left.|  
| As a user, I would like to view my final score at the end of the game in order to the scoreboard and dashbaord| Upon completion of the game, the user is presented with their score along with a performance message that reflects their performance, varying based on how well or poorly they performed.|
|As a user, I want to be able to cancel the game anytime during the play if not want to continue| Upon completion of the game, the user is presented with a quit icon displaying in the upper right corner of the quiz game. By pressing this icon, it takes the user back to main menu, existing and reseting the game.|
|

**Returning Visitors**

|Returning User Goals| How this was achieved|
| :--- | :--- |
| More information is coming| More information is coming|
| More information is coming| More information is coming| 

---
### Full Testing 

Full Testing was performed on these devices and browsers for each section of game 

**Devices** 
1. Coming soon
2. Coming soon
3. Coming soon
4. Coming soon

**Browsers** 
1. Microsoft Edge - Examples
2. Google Chrome - Examples	
3. Mozilla firefox - Examples	
4. Safari - Examples

I also asked family and friends to test my game on their devices no issues were reported in game except for background video not always playing in IOS devices(I noted this in Known Bugs) 

`Home Page Section` 

|Features|Expected result| Actual result| Pass/Fail | 
| ------ | ------------- | ------------ | --------- |
| More information is coming| More information is coming | Pass |
|More information is coming| More information is coming|  More information is coming| Pass|
| More information is coming | More information is coming | More information is coming | Pass |
|More information is coming | More information is coming | More information is coming|  Pass |  
| More information is coming | More information is coming| More information is coming | pass |
| More information is coming| More information is coming | More information is coming | Pass |

`Quiz/Game Page Section`

|Features|Expected result| Actual result| Pass/Fail | 
| ------ | ------------- | ------------ | --------- |
| More information is coming| More information is coming | Pass |
|More information is coming| More information is coming|  More information is coming| Pass|
| More information is coming | More information is coming | More information is coming | Pass |
|More information is coming | More information is coming | More information is coming|  Pass |  
| More information is coming | More information is coming| More information is coming | pass |
| More information is coming| More information is coming | More information is coming | Pass |

`Highscore Section`

|Features|Expected result| Actual result| Pass/Fail | 
| ------ | ------------- | ------------ | --------- |
| More information is coming| More information is coming | Pass |
|More information is coming| More information is coming|  More information is coming| Pass|
| More information is coming | More information is coming | More information is coming | Pass |
|More information is coming | More information is coming | More information is coming|  Pass |  
| More information is coming | More information is coming| More information is coming | pass |
| More information is coming| More information is coming | More information is coming | Pass |

`Rules Section`

|Features|Expected result| Actual result| Pass/Fail | 
| ------ | ------------- | ------------ | --------- |
| More information is coming| More information is coming | Pass |
|More information is coming| More information is coming|  More information is coming| Pass|
| More information is coming | More information is coming | More information is coming | Pass |
|More information is coming | More information is coming | More information is coming|  Pass |  
| More information is coming | More information is coming| More information is coming | pass |
| More information is coming| More information is coming | More information is coming | Pass |

`404 Page`

|Features|Expected result| Actual result| Pass/Fail | 
| ------ | ------------- | ------------ | --------- |
| More information is coming| More information is coming | Pass |
|More information is coming| More information is coming|  More information is coming| Pass|
| More information is coming | More information is coming | More information is coming | Pass |
|More information is coming | More information is coming | More information is coming|  Pass |  
| More information is coming | More information is coming| More information is coming | pass |
| More information is coming| More information is coming | More information is coming | Pass |