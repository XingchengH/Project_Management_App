import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text){
    setProjectsState((prev) => {
      const taskId = Math.random().toString();
      const newTask = {
        id: taskId,
        projectId: prev.selectedProjectId,
        text: text,
      };

      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  };

  function handleDeleteTask(id){
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== id),
      };
    }
    );
  };

  function handleStartAddProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    })
  }

  function handleCancelAddProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    })
  }

  function handleAddProject(project) {
    const projectId = Math.random().toString();

    setProjectsState((prev) => {
      const newProject = {
        ...project,
        id: projectId,
      };

      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    })
  }

  function handleSelectedProject(projectId) {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: projectId,
      };
    })
  }

  function handleDeleteProject(projectId) {
    setProjectsState((prev) => {
      return {
        ...prev,
        projects: prev.projects.filter((project) => project.id !== prev.selectedProjectId),
        selectedProjectId: undefined,
      };
    })
  }

  // console.log(projectsState);


  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>;
  
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} onCancelProject={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onHandleStart={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-9 flex gap-8">
      <ProjectsSidebar
        onHandleStart={handleStartAddProject}
        onAddProject={handleAddProject}
        projects={projectsState.projects}
        onSelectedProject={handleSelectedProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
