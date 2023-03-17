# Blockchain Developer Bootcamp Module 3 Exercise

For module 3, you will be developing the Web3.js Playground. This will be an application of what you've learned for module 3.

## Setup
1. Clone this repository by running git clone.
	```
	git clone https://github.com/sparklearnedtech/bdb-cohort3-module3.git
	```
2. Open the cloned project.
	```
	cd bdb-cohort3-module3
	```
3. Create your own branch using this format (firstname-lastname).
	```
	git branch john-doe
	```
4. Checkout your created branch.
	```
	git checkout john-doe
	```
5. Check the active branch. Make sure you are currently on your created branch, **not** the `main` branch. This repo has branch protection rule, and you cannot push to `main`.
	```
	git branch
	```
6. Run `npm install` to generate your `node_modules` folder and download all necessary packages.
7. Then run `npm start` to check the web app and start coding.
8. As you make progress, you can start pushing in your branch:
	1. First you add your changes.

		By **either** adding a single file. Example:
		```
		git add src/App.js
		```

		**Or** adding all files. Example:
		```
		git add .
		```

	2. Check your added files.
		```
		git status
		```

	3. Then commit your added files. A good commit message is a **short but clear summary** of your changes, and as pracice, should be in **present** tense. Example:
		```
		git commit -m "Add request accounts function."
		```

	4. And finally, push.
		```
		git push
		```
9. Pushing doesn't guarantee that you're done. So once you're comfortable for checking, just message mentor [@harveyjavier](https://github.com/harveyjavier) on Slack, and he will check your branch.

## Exercise
1. For this exercise you will fill all the missing functions of the web app.
2. There are 9 items. Initially, item number 1 which is the _Web3 initialization_ is already a bonus.
3. Here are the other 8 items:
	* _Request accounts function_
	* _Show selected address function_
	* _Get eth balance function_
	* _Convert wei to ether function_
	* _Convert ether to wei function_
	* _Show Web3 utilities function_
	* _Initialize a smart contract function_
	* _Send a transaction function_

	Here's a demo GIF of the exercise output for your guide.
	![Demo](https://github.com/sparklearnedtech/bdb-cohort3-module3/blob/main/src/images/sparklearn-web3-playground.gif)

## Criteria
This exercise will be graded with the following criterias:
* Requirements & Delivery (5 pts.) - How you followed the instructions of the exercise and deliver its specific requirements.
* Runtime (5 pts.) - How your project will run seamlessly on the mentor's local end and environment.
* Code standard & cleanliness (5 pts.) - The tidyness of your code and its standard. Will be checked by linters.
* Creativity (5 pts.) - How presentable your project will look on runtime and how you played around with the project's components and functions.
