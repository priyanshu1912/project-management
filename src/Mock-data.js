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
        id: "11",
        project_name: "Client coordination",
        latest_completion_count: 5,
        latest_comments_count: 3,
        task_lists: [
          {
            task_list_name: "Admin dashboard",
            tasks: [
              {
                id: "111",
                title:
                  "When a admin login, show the list of users(home page for admin)",
                description: [
                  "show the count of total latest comments on all the projects of that user",
                ],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "task title is updated.",
                  },
                  {
                    userName: "Priyanshu Bhardwaj",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "Have to increase the size of radio on click?",
                  },
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "yes, but add it only in last form",
                  },
                ],
                status: "uncompleted",
              },
              {
                id: "112",
                title:
                  "On clicking the user card, show all the projects of that user",
                description: [
                  "show the count of total latest completion marked on that project",
                ],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "if the image is not available show msg like the below",
                  },
                ],
                status: "uncompleted",
              },
            ],
          },
          {
            task_list_name: "Client dashboard",
            tasks: [
              {
                id: "113",
                title:
                  "Add a green tick instead of dots on the list of completed today and completed this week",
                description: ["use if there is no other icon package"],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "looks good",
                  },
                ],
                status: "uncompleted",
              },
            ],
          },
          {
            task_list_name: "Responsive",
            tasks: [
              {
                id: "114",
                title: "Make the dashboard page mobile responsive",
                description: ["did you check the project name of this task?"],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "looks good",
                  },
                ],
                status: "uncompleted",
              },
              {
                id: "115",
                title: "Make the modal mobile responsive",
                description: ["Click on the add new to open the modals."],
                comments: [
                  {
                    userName: "Priyanshu Bhardwaj",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "Need more clarity",
                  },
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "whats your understanding?",
                  },
                  {
                    userName: "Priyanshu Bhardwaj",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "Yellow highlighted logic is clear, Red text means those are required?",
                  },
                ],
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
        id: "21",
        project_name: "Tower App",
        latest_completion_count: 3,
        latest_comments_count: 9,
        task_lists: [
          {
            task_list_name: "Nodles - Micro UI",
            tasks: [
              {
                id: "211",
                title: "Input widget: Measurement Location Selector",
                description: [
                  "This widget helps select a location from a dropdown",
                ],
                comments: [
                  {
                    userName: "Mohd Anas",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "When we fetched the location of the measurement location successfully. We will pass this object to value as we do for other input node.",
                  },
                  {
                    userName: "Mohd Anas",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "I have provided you necessary instructions to complete this task. Please follow. Let me know if you have doubts.",
                  },
                  {
                    userName: "Akshay Hegde",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "color codes and icon for the UI?",
                  },
                ],
                status: "uncompleted",
              },
              {
                id: "212",
                title: "Feat/QueryBuilder branch NPM issues",
                description: [
                  "Need to wrap this up quickly. Can't we run react-querybuilder in version 17",
                ],
                comments: [
                  {
                    userName: "Mohd Anas",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "Can we work on this now? Need to wrap this up quickly. Can't we run react-querybuilder in version 17",
                  },
                  {
                    userName: "Debjit Pramanick",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "Will check.",
                  },
                  {
                    userName: "Debjit Pramanick",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "I think react-query-builder does not support react 17 due to some import issues in react 17. So we have only one option which is to upgrade react to version 18 and upgrade other packages as well. ",
                  },
                ],
                status: "completed",
              },
            ],
          },
          {
            task_list_name: "Profile page review",
            tasks: [
              {
                id: "213",
                title: "Wrong date picker in profiler page",
                description: [
                  "No the datepicker is same , there is diffrent custom styling applied there . Will figure it out",
                ],
                comments: [
                  {
                    userName: "Varad Rajopadhye",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "No the datepicker is same , there is diffrent custom styling applied there . Will figure it out",
                  },
                ],
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
        id: "31",
        project_name: "Redwing",
        latest_completion_count: 5,
        latest_comments_count: 3,
        task_lists: [
          {
            task_list_name: "time tracking using ETA",
            tasks: [
              {
                id: "311",
                title:
                  "Adding new command to flag a task for counting the defects of the developer and the team lead",
                description: [
                  "place the percentage to the side of the ring chart like other numbers(on hold unplanned) and increase the font size of the percentage, it should match the font size of other numbers in the top navigation",
                  "Change today's text to Today's Output",
                  "Change week's text to Week's Output",
                ],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "when the task is marked as defective, then where to show this count?",
                  },
                  {
                    userName: "Puneet Pugalia",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "Show the count in the performance report of the team members.",
                  },
                ],
                status: "uncompleted",
              },
              {
                id: "312",
                title: "Check daily slowdown of a user",
                description: [
                  "we can track the slowdown by finding the difference between the two activities. If the difference is more than 3 hours then it will be calculated as a slowdown.",
                ],
                comments: [
                  {
                    userName: "Puneet Pugalia",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "we can track the slowdown by finding the difference between the two activities. If the difference is more than 3 hours then it will be calculated as a slowdown.",
                  },
                  {
                    userName: "Puneet Pugalia",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "This is not very important so delegate it. ",
                  },
                ],
                status: "uncompleted",
              },
              {
                id: "313",
                title: "Past performance report changes",
                description: [
                  "show bar chart only in the weekly tab and remove bar chart from the monthly tab",
                ],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "check how its done on the dashboard",
                  },
                  {
                    userName: "Priyanshu Bhardwaj",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "Not finding the way of changing the tooltip color",
                  },
                ],
                status: "completed",
              },
              {
                id: "314",
                title:
                  "Remove the full screen loader and show it in right top corner of the screen, so that when the api is loading, still we can perform action of checking performance etc",
                description: ["!add_budget 0.5"],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "looks good",
                  },
                ],
                status: "completed",
              },
            ],
          },
          {
            task_list_name: "setup",
            tasks: [
              {
                id: "315",
                title:
                  "Setup project locally, send me Github username, will invite to the repository.dding new command to flag a task for counting the defects of the developer and the team lead",
                description: ["invitation sent"],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "send a evidence",
                  },
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "looks good",
                  },
                ],
                status: "uncompleted",
              },
            ],
          },
          {
            task_list_name: "rapid estimation",
            tasks: [
              {
                id: "316",
                title: "API to login in",
                description: [
                  "add a new table on the current database for the user list. This is not same as the current user list.",
                ],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "looks good",
                  },
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "looks good",
                  },
                ],
                status: "uncompleted",
              },
              {
                id: "317",
                title: "API Integartion to login in",
                description: ["What is the API for login integration?"],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "work on all the UI for now.",
                  },
                  {
                    userName: "Priyanshu Bhardwaj",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "When I can start with the API integration?",
                  },
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "I will let you know.",
                  },
                ],
                status: "uncompleted",
              },
              {
                id: "318",
                title: "API to create and update projects",
                description: [
                  "These are not the projects currently in the project list check this UI, currently, it's using local storage and a flat-file. We need to convert it to the cloud. This is the flat file.",
                ],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "looks good",
                  },
                ],
                status: "uncompleted",
              },
            ],
          },
        ],
      },
      {
        id: "32",
        project_name: "GroTrack",
        latest_completion_count: 11,
        latest_comments_count: 14,
        task_lists: [
          {
            task_list_name: "hydrafacial survey and consent",
            tasks: [
              {
                id: "321",
                title:
                  "In the survey form, add number for each question, make the radio of text clickable so when the text is clicked the radio should get toogle and make the radio button bigger",
                description: ["yes, but add it only in last form"],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "task title is updated.",
                  },
                  {
                    userName: "Priyanshu Bhardwaj",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "Have to increase the size of radio on click?",
                  },
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "yes, but add it only in last form",
                  },
                ],
                status: "uncompleted",
              },
              {
                id: "322",
                title:
                  "Please add red highlighted text in the hydrafacial survey form and logic of yellow highlighted text.",
                description: [
                  "Yellow highlighted logic is clear, Red text means those are required?",
                ],
                comments: [
                  {
                    userName: "Priyanshu Bhardwaj",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "Need more clarity",
                  },
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "whats your understanding?",
                  },
                  {
                    userName: "Priyanshu Bhardwaj",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "Yellow highlighted logic is clear, Red text means those are required?",
                  },
                ],
                status: "completed",
              },
            ],
          },
          {
            task_list_name: "glo track",
            tasks: [
              {
                id: "323",
                title:
                  "please click all arrows next to the images. some of the arrows when clicked, the screen goes blank.",
                description: [
                  "if the image is not available show msg like the below",
                ],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "if the image is not available show msg like the below",
                  },
                ],
                status: "uncompleted",
              },
              {
                id: "324",
                title: "Fixing the carry forward budget",
                description: [""],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "looks good",
                  },
                ],
                status: "completed",
              },
            ],
          },
        ],
      },
      {
        id: "33",
        project_name: "Intern Portal",
        latest_completion_count: 3,
        latest_comments_count: 1,
        task_lists: [
          {
            task_list_name: "feedback cycle",
            tasks: [
              {
                id: "331",
                title: "Burndown - Feedback 5",
                description: [
                  "Employer Dashboard: the links of my curriculums, my hired talents and search for a new talent should be in top navigation and not in the sidebar",
                ],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "Employer Dashboard: the links of my curriculums, my hired talents and search for a new talent should be in top navigation and not in the sidebar",
                  },
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "if you have anyone idle start assiging these tasks to them. and once the task is assigned just tag me in the assigned task or comment on this task. ",
                  },
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "Posting Internship or Job form breakdown is remaining, will be doing today.",
                  },
                ],
                status: "uncompleted",
              },
              {
                id: "332",
                title:
                  "Student Dashboard: On single course page, make the spacing consistent, check the attached video at timestamp 5:53",
                description: [
                  "I have added an extra budget, so check all the other pages for the spacing issue and fixed it. Mentioned all the pages list in which you will be fixing the spacing issue. Will increase the budget accordingly.",
                ],
                comments: [
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "I have added an extra budget, so check all the other pages for the spacing issue and fixed it. Mentioned all the pages list in which you will be fixing the spacing issue. Will increase the budget accordingly.",
                  },
                  {
                    userName: "Shashank Yadav",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "This evidence is for single-page courses only. If I will cover all pages in one piece of evidence then it will be difficult to manage.",
                  },
                  {
                    userName: "Anand Bhagat",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "i just want to know if you have checked other pages, this evidence looks good for the course page.",
                  },
                ],
                status: "completed",
              },
            ],
          },
          {
            task_list_name: "Common screens",
            tasks: [
              {
                id: "333",
                title: "All available courses page",
                description: [
                  "Template to embed list of courses. (Use left sections). The right section will be used to place the filter widget.",
                ],
                comments: [
                  {
                    userName: "Mohd Anas",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "What's the situation here?",
                  },
                  {
                    userName: "Balram Yadav",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "working on child component ",
                  },
                ],
                status: "uncompleted",
              },
              {
                id: "334",
                title: "Course View Experience - View a single course",
                description: [
                  "You can separate components in a separate file. But both will be shown on the same page",
                ],
                comments: [
                  {
                    userName: "Mohd Anas",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "These two tasks are connected Left Side: https://3.basecamp.com/4954106/buckets/28518706/todos/5165171668 Right Side: Course View Experience - ETA and timeline - Intern Portal (Internal)",
                  },
                  {
                    userName: "Shashank Yadav",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment: "then Which template to choose for the left Side?",
                  },
                  {
                    userName: "Mohd Anas",
                    image:
                      "https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg",
                    comment:
                      "Course details will be on the left side. The course timeline will be on the right side.",
                  },
                ],
                status: "completed",
              },
            ],
          },
        ],
      },
    ],
  },
];
