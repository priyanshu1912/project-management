export const dashboardData = [
  {
    project: "REDWING",
    tasks: [
      {
        title: "Past performance report changes",
        description: [
          " show bar chart only in the weekly tab and remove bar chart from the monthly tab",
          "change the width of the bar chart to 100%, and the height of the bar chart to 200 to 300px, the height of the bar chart should not take up more than 20% of the screen.",
          "convert the report to tabular format",
          "The weekly table will have below columns ",
          "The monthly table will have below columns",
          "add a select drop down at the right top corner to select users(for now add random names)",
        ],
      },
    ],
  },
  {
    project: "GROTRACK",
    tasks: [
      {
        title: "API integration of keravive consent form",
        description: [
          "for api you can use the reference from keravive consent form in gro salon app. this form is same",
        ],
      },
      {
        title: "Hydrafacial form order changes",
        description: [
          "personal information form which includes",
          "hippa form",
          "keravive consent form",
          "survey form (all the remaining inputs from the first form)",
        ],
      },
    ],
  },
  {
    project: "CLIENT COORDINATION PROJECT",
    tasks: [
      {
        title: "Mock some data from basecamp and add it in the dashboard",
        description: [
          "The horizontal full screen rows are the taskslist",
          "And the cards inside the rows are tasks",
          "The right side container will have completed task list, add some tasks to it also",
          "For reference check the code in intern dashboard, on how to add mock data",
        ],
      },
      {
        title: "Change all the modal UI to the tailwind component",
        description: [
          "https://tailwind-ui-comp.netlify.app/components/application-ui/overlays/modals/",
        ],
      },
    ],
  },
];

export const completedTasks = [
  {
    title: "Completed Today",
    tasks: [
      "API integration of keravive consent form",
      "Hydrafacial form order changes",
    ],
  },
  {
    title: "Completed This Week",
    tasks: [
      "Add Keravive consent form after hydrafacial consent form",
      "Changes to the bar chart of GLO track",
    ],
  },
];

export const users = [
  {
    id: "1",
    name: "Anand Bhagat",
    email: "anand@gmail.com",
    password: "anand",
    projects: [
      {
        project_name: "Client coordination",
        latest_completion_count: 5,
        latest_comments_count: 3,
        task_lists: [
          {
            task_list_name: "Admin dashboard",
            tasks: [
              {
                title:
                  "When a admin login, show the list of users(home page for admin)",
                description: [
                  "show the count of total latest comments on all the projects of that user",
                ],
                comments: [
                  "this is another tst comment",
                  "this is another tst comment",
                ],
                status: "uncompleted",
              },
              {
                title:
                  "On clicking the user card, show all the projects of that user",
                description: [
                  "show the count of total latest completion marked on that project",
                ],
                comments: [{}],
                status: "uncompleted",
              },
            ],
          },
          {
            task_list_name: "Client dashboard",
            tasks: [
              {
                title:
                  "Add a green tick instead of dots on the list of completed today and completed this week",
                description: ["use if there is no other icon package"],
                comments: [{}],
                status: "uncompleted",
              },
            ],
          },
          {
            task_list_name: "Responsive",
            tasks: [
              {
                title: "Make the dashboard page mobile responsive",
                description: ["did you check the project name of this task?"],
                comments: [{}],
                status: "uncompleted",
              },
              {
                title: "Make the modal mobile responsive",
                description: ["Click on the add new to open the modals."],
                comments: [{}],
                status: "completed",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Sakil Alam",
    email: "sakil@gmail.com",
    password: "sakil",
    projects: [
      {
        project_name: "Tower App",
        latest_completion_count: 3,
        latest_comments_count: 9,
        task_lists: [
          {
            task_list_name: "Nodles - Micro UI",
            tasks: [
              {
                title: "Input widget: Measurement Location Selector",
                description: [
                  "This widget helps select a location from a dropdown",
                ],
                comments: [{}],
                status: "uncompleted",
              },
              {
                title: "Feat/QueryBuilder branch NPM issues",
                description: [
                  "Need to wrap this up quickly. Can't we run react-querybuilder in version 17",
                ],
                comments: [{}],
                status: "completed",
              },
            ],
          },
          {
            task_list_name: "Profile page review",
            tasks: [
              {
                title: "Wrong date picker in profiler page",
                description: [
                  "No the datepicker is same , there is diffrent custom styling applied there . Will figure it out",
                ],
                comments: [{}],
                status: "uncompleted",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Priyanshu Bhardwaj",
    email: "priyanshu@gmail.com",
    password: "priyanshu",
    projects: [
      {
        project_name: "Redwing",
        latest_completion_count: 5,
        latest_comments_count: 3,
        task_lists: [
          {
            task_list_name: "time tracking using ETA",
            tasks: [
              {
                title:
                  "Adding new command to flag a task for counting the defects of the developer and the team lead",
                description: [
                  "place the percentage to the side of the ring chart like other numbers(on hold unplanned) and increase the font size of the percentage, it should match the font size of other numbers in the top navigation",
                  "Change today's text to Today's Output",
                  "Change week's text to Week's Output",
                ],
                comments: [{}],
                status: "uncompleted",
              },
              {
                title: "Check daily slowdown of a user",
                description: [
                  "we can track the slowdown by finding the difference between the two activities. If the difference is more than 3 hours then it will be calculated as a slowdown.",
                ],
                comments: [{}],
                status: "uncompleted",
              },
              {
                title: "Past performance report changes",
                description: [
                  "show bar chart only in the weekly tab and remove bar chart from the monthly tab",
                ],
                comments: [{}],
                status: "completed",
              },
              {
                title:
                  "Remove the full screen loader and show it in right top corner of the screen, so that when the api is loading, still we can perform action of checking performance etc",
                description: ["!add_budget 0.5"],
                comments: [{}],
                status: "completed",
              },
            ],
          },
          {
            task_list_name: "setup",
            tasks: [
              {
                title:
                  "Setup project locally, send me Github username, will invite to the repository.dding new command to flag a task for counting the defects of the developer and the team lead",
                description: ["invitation sent"],
                comments: [{}],
                status: "uncompleted",
              },
            ],
          },
          {
            task_list_name: "rapid estimation",
            tasks: [
              {
                title: "API to login in",
                description: [
                  "add a new table on the current database for the user list. This is not same as the current user list.",
                ],
                comments: [{}],
                status: "uncompleted",
              },
              {
                title: "API Integartion to login in",
                description: ["What is the API for login integration?"],
                comments: [{}],
                status: "uncompleted",
              },
              {
                title: "API to create and update projects",
                description: [
                  "These are not the projects currently in the project list check this UI, currently, it's using local storage and a flat-file. We need to convert it to the cloud. This is the flat file.",
                ],
                comments: [{}],
                status: "uncompleted",
              },
            ],
          },
        ],
      },
      {
        project_name: "GroTrack",
        latest_completion_count: 11,
        latest_comments_count: 14,
        task_lists: [
          {
            task_list_name: "hydrafacial survey and consent",
            tasks: [
              {
                title:
                  "In the survey form, add number for each question, make the radio of text clickable so when the text is clicked the radio should get toogle and make the radio button bigger",
                description: ["yes, but add it only in last form"],
                comments: [{}],
                status: "uncompleted",
              },
              {
                title:
                  "Please add red highlighted text in the hydrafacial survey form and logic of yellow highlighted text.",
                description: [
                  "Yellow highlighted logic is clear, Red text means those are required?",
                ],
                comments: [{}],
                status: "completed",
              },
            ],
          },
          {
            task_list_name: "glo track",
            tasks: [
              {
                title:
                  "please click all arrows next to the images. some of the arrows when clicked, the screen goes blank.",
                description: [
                  "if the image is not available show msg like the below",
                ],
                comments: [{}],
                status: "uncompleted",
              },
              {
                title: "Fixing the carry forward budget",
                description: [""],
                comments: [{}],
                status: "completed",
              },
            ],
          },
        ],
      },
      {
        project_name: "Intern Portal",
        latest_completion_count: 3,
        latest_comments_count: 1,
        task_lists: [
          {
            task_list_name: "feedback cycle",
            tasks: [
              {
                title: "Burndown - Feedback 5",
                description: [
                  "Employer Dashboard: the links of my curriculums, my hired talents and search for a new talent should be in top navigation and not in the sidebar",
                ],
                comments: [{}],
                status: "uncompleted",
              },
              {
                title:
                  "Student Dashboard: On single course page, make the spacing consistent, check the attached video at timestamp 5:53",
                description: [
                  "I have added an extra budget, so check all the other pages for the spacing issue and fixed it. Mentioned all the pages list in which you will be fixing the spacing issue. Will increase the budget accordingly.",
                ],
                comments: [{}],
                status: "completed",
              },
            ],
          },
          {
            task_list_name: "Common screens",
            tasks: [
              {
                title: "All available courses page",
                description: [
                  "Template to embed list of courses. (Use left sections). The right section will be used to place the filter widget.",
                ],
                comments: [{}],
                status: "uncompleted",
              },
              {
                title: "Course View Experience - View a single course",
                description: [
                  "You can separate components in a separate file. But both will be shown on the same page",
                ],
                comments: [{}],
                status: "completed",
              },
            ],
          },
        ],
      },
    ],
  },
];
