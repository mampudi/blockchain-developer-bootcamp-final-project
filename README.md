# blockchain-developer-bootcamp-final-project

Blockchain based system that will pay users when they complete surveys

# About

The purpose of this project is to develop a platform where users can create online surveys. When creating a survey, the author will state the number of respondents as well as the survey’s expiry date. The author of the survey will then deposit ETH, which will be used to pay each respondent on completion of the survey.
The amount paid to each respondent will depend on; 
*	the amount deposited per survey and,
*	the number of respondents per survey. 

For continuous research and development, as well as application maintenance, the software development team will apply a 5% fee per survey deposit.
While completing the survey, each respondent will be notified of how much they will earn. On completion, respondents will provide their ETH addresses in order to receive payment.

# Example workflows
1.	An author creates a survey, specifies the number of respondents they want to fill in the survey, and how much ETH they want to deposit.
2.	The application will show them how much each respondent will be paid and if they agree, they can deposit the ETH.
3.	The contract will move a percentage of the ETH to the development teams Ethereum address, so they can keep improving the application.
4.	The respondent will then fill in a survey and get ETH sent to their Ethereum address.
5.	When the expiry date is reached and the number of users filling in the survey hasn't reached the max, they left over ETH will be sent back to the survey author.
