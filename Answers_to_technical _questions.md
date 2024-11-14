# Answers to Technical Questions

## 1. How long did you spend on the coding test?

The coding test was worked on over several hours, with a focus on building a functional, responsive task management application. The time spent can be broken down as follows:
- **Initial setup and project structure**: ~1 hour
- **Design and layout with Tailwind CSS**: ~1.5 hours
- **Functionalities (task management, modal, search/filtering)**: ~2 hours
- **Bug fixing and enhancements (animations, responsiveness)**: ~1 hour
- **Refining the code and optimizations**: ~30 minutes

Total: Approximately **5.5 hours** were spent on the coding test, including debugging and testing.

---

## 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

For this task management application, the language used is **JavaScript (React)**. A useful feature from the latest version of React (18) is **automatic batching of updates**, which helps with performance by grouping multiple state updates into one re-render.

### Example Snippet:

In the code, we used `setState` multiple times within a single event handler. With automatic batching, React now combines these updates into a single re-render, improving performance.

```javascript
const handleTaskCompletion = (taskId) => {
    const updatedTasks = todayTasks.map(task => 
        task.id === taskId ? { ...task, status: 1 } : task
    );
    
    // Multiple setState calls are now batched by React 18
    setTodayTasks(updatedTasks);
    setTasksFinished(updatedTasks.filter(task => task.status === 1).length);
};


```
##3. How would you track down a performance issue in production? Have you ever had to do this?
To track down performance issues in production, I would follow these steps:

Use Browser Developer Tools:

Utilize Chrome DevTools to monitor performance. Look at the Performance tab to capture a timeline and identify any long tasks, excessive rendering, or layout shifts.
Use React DevTools:

React DevTools allows you to inspect component renders and detect unnecessary re-renders. Look for components that update too often, causing performance slowdowns.
Measure Network Requests:

Ensure there are no unnecessary network requests or blocking resources affecting the application’s load time. The Network tab in DevTools is useful for this.
Console Profiling:

Use console.time and console.timeEnd to measure specific operations or functions, identifying bottlenecks.
Monitor Metrics:

Integrate performance monitoring tools like Google Lighthouse, Sentry, or New Relic to track real-time performance metrics in production.
Have I done this before? Yes, I have dealt with performance issues in production environments before. A common issue was slow page rendering due to excessive state updates. Using React.memo and useMemo hooks helped reduce unnecessary re-renders and improved performance.

##4. If you had more time, what additional features or improvements would you consider adding to the task management application?
If I had more time, here are a few additional features and improvements I would consider:

User Authentication and Authorization:

Allow users to log in and manage their own tasks. This would involve integrating authentication, such as using JWT tokens for user sessions.
Task Prioritization and Sorting:

Add a feature to prioritize tasks with options like high, medium, or low priority and allow users to sort tasks based on these priorities.
Task Due Date Reminder/Notifications:

Implement a reminder system where users receive notifications for upcoming task deadlines. This could be done using Browser Notifications or Push Notifications.
Task Categories/Labels:

Introduce labels or categories for tasks, allowing users to group tasks based on their type or project (e.g., Work, Personal).
Analytics & Reporting:

Add graphs or charts to display task completion rates over time, helping users analyze their productivity and track progress.
Drag-and-Drop Task Reordering:

Allow users to reorder tasks within the list using drag-and-drop functionality to organize their tasks as they see fit.
Performance Optimization:

With larger data sets, optimize the application using React Lazy Loading for components and tasks. Use pagination or infinite scroll to display a large number of tasks efficiently.
Dark Mode and Themes:

Improve user experience by allowing users to switch between dark and light modes, providing better accessibility and comfort.
Mobile App Version:

If the application were to expand, creating a mobile app version (using React Native or Expo), would provide better accessibility for users on the go.
