# blockchain-developer-bootcamp-final-project

Blockchain based system that will pay users when they complete surveys

# About
The purpose of this project is to create an application where a person can capture surveys they want users to complete. When creating the survey, the person will state the number of users they want to complete the survey and an expiry date. The person will then have to deposit ETH, which will be used to pay the people who fill in the survey. 

The amount paid to each user that fills in the survey will depend on; how much ETH the person deposited for the survey and the number of users they want to fill in the survey. 5% ETH of the survey funds will also be paid to the development team, so that the application can continually be upgraded and maintained.

When filling in the survey, the user will be told how much ETH they will earn for filling in the survey. Once the user has completed the survey, they can then provide their ETH address and will be paid in ETH for completing the survey.


# Example workflows
1.	A person creates a survey, specifies the number of users they want to fill in the survey,  and how much ETH they want to deposit.
2.	The application will show them how much each user will be paid and if they agree, they can deposit the ETH.
3.	The contract will move a percentage of the ETH to the development teams Ethereum address, so they can keep improving the application.
4.	The user will then fill in a survey and get ETH sent to their Ethereum address.
5.	When the expiry date is reached and the number of users filling in the survey hasn't reached the max, they left over ETH will be sent back to the survey creator.

