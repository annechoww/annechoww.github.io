const projects = [
    {
      title: "Augmented Reality Education Platform",
      description: "A web-based AR tool for educators to easily create programming content.",
      imgSrc: "/assets/img/ar_image.jpg",
      accomplishments: [
        "Tools: A-frame, HTML/CSS, Javascript, Three.js",
        "Extensive 2D & 3D asset library",
        "A visual editing framework to define asset interactions",
        "Real-time previews of the AR content in a VR environment",
        "Unique link publications for each published educational module"
      ]
    },
    {
      title: "Moodlist",
      description: "A deep learning software that determines a person's mood based on their music listening history.",
      imgSrc: "/assets/img/moodlist.png",
      accomplishments: [
        "Tools: Python",
        "Users input any Spotify playlist of their liking",
        "Application classifies listener's mood in one of 5 categories",
        "Produced results with 74.6% accuracy"
      ]
    },
    {
      title: "Safewaze",
      description: "A map to provide users with information on the safest path to their destination.",
      imgSrc: "/assets/img/safewaze.png",
      accomplishments: [
        "Tools: C++, OSM, OpenGL",
        "Users can view a diagram of crime rates in neighborhoods",
        "Implemented a help button as a guide",
        "Find feature to identify destinations and provide descriptions"
      ]
    }
  ];

  let displayedProjects = 1;
  
  function generateProjectHTML(project) {
    const accomplishmentsList = project.accomplishments.map(acc => `<li>${acc}</li>`).join("");
    return `
      <div class="col s12 m6 l4">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img alt="${project.title}" src="${project.imgSrc}" style="height: 100%; width: 100%" class="activator" />
          </div>
          <div class="card-content">
            <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
            <p>${project.description}</p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
            <ul>${accomplishmentsList}</ul>
          </div>
        </div>
      </div>
    `;
  }
  
  function displayProjects() {
    const recentProjectsDiv = document.getElementById("recent-projects");
    recentProjectsDiv.innerHTML = "";
  
    for (let i = 0; i < displayedProjects; i++) {
      recentProjectsDiv.innerHTML += generateProjectHTML(projects[i]);
    }
  }
  
  // Initially display the most recent project
  displayProjects();
  
  document.getElementById("load-more").addEventListener("click", function () {
    if (displayedProjects < projects.length) {
      displayedProjects++;
      displayProjects();
    }
  });