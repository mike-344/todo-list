function createProjectLibrary() {
  const library = [];
  const getCurrentLibrary = () => library;
  const addProjectToLibrary = (project) => {
    library.push(project);
  };

  const removeProjectFromLibrary = (indexOfProject) => {
    library.splice(+indexOfProject, 1);
  };

  return { addProjectToLibrary, removeProjectFromLibrary, getCurrentLibrary };
}

export { createProjectLibrary };
