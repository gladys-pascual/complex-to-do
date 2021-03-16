# To Do List

## Features

- log in and sign up

  - Since there is no database:
    - As the user enters their email and password for log in or username, email and password for sign up, this information is saved in the local storage.
    - Ideally, an API will be called where this information will be sent (POST request) and
      - Log in: if the username and password is correct, a token will be sent back. This token will be saved in the local storage and used to gain access to the to-do list data from the database.
      - Sign up: Using a third party library such as Auth0, a POST request will be made and the account will be created. Auth0 will send an email to verify the account and once verified, the user can then log in. The user is routed to an after sign up page for better user experience.

- create a list
- add tasks to a list
- add subtasks
- edit tasks
- mark tasks done
- delete tasks

## Libraries used

- react-router-dom
- react-hook-form
  - log-in and sign-up form. Has validation
