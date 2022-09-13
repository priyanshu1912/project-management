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
