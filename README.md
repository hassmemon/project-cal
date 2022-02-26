# project-cal

GA Project 3

## User Stories

**End User: John**

> Sign up

-   John wants to create a list of tasks
-   John goes to the application and registers by providing name, email, username and password

> Create task

-   John clicks on the button `create a task`
-   John fills in the `new task` form by providing:
    -   Name
    -   Description
    -   Priority (by color)
    -   Due date (optional)
    -   Checks to be reminded of due date(tbd)
-   John clicks save
-   John is redirected to the main `dashboard` where all the tasks are seen ordered by Priority

> Update task

-   John clicks on the task in the `dashboard`
-   John sees the detail of the task and clicks on `update`
-   Modal pops up with the details pre-filled and editable
-   John makes the modifications and saves
-   John is redirected to the main `dashboard`

> Complete task

-   John has completed the task
-   John goes to the `dashboard` and on the task that has been completed he clicks on `mark as done`

-   John has completed another task
-   John views the details for the task that he completed and marks it as `done`

> Delete task

-   John finds the task to be deleted on the `dashboard`
-   John clicks the task to open the detailed view
-   John clicks on `delete`

## Database information

**Users:**

-   id serial not null
-   name varchar(50) not null
-   email text unique not null
-   password text not null

**Task:**

-   id serial not null
-   name text not null
-   description text not null
-   priority integer not null
-   due_date timestamp
-   remind(tbd) int
-   user_id foreign key
