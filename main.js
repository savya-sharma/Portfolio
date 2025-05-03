

// Custom cursor effect (disabled)
function cursor() {
  // Custom cursor functionality has been disabled
  // The browser's default cursor will be used instead
}

// Scale model image on scroll
function modelImgScale() {
  const image = document.querySelector(".img-div img");
  if (image) {
    document.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      const scaleValue = 0.8 + scrollPosition / 1500;
      image.style.transform = `scale(${scaleValue})`;
    });
  }
}

// Initialize Locomotive Scroll
function initLocomotiveScroll() {
  if (typeof LocomotiveScroll !== "undefined") {
    new LocomotiveScroll();
  }
}

// Navigation padding adjustment on scroll
function adjustNavigationPadding() {
  const navigation = document.querySelector(".navigation");
  if (navigation) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        navigation.classList.remove("px-4");
      } else {
        navigation.classList.add("px-4");
      }
    });
  }
}

// Count animation for numbers
function countAnimation() {
  // gsap.from(".")
  function animateCount(element) {
    const target = parseInt(element.getAttribute("data-target"));
    let count = 0;
    const speed = 90;

    const updateCount = () => {
      count += 1;
      element.innerText = count;
      if (count < target) {
        setTimeout(updateCount, speed);
      } else {
        element.innerText = target;
      }
    };
    updateCount();
  }

  const experiencesDiv = document.getElementById("experiences");
  if (experiencesDiv) {
    // Observer to trigger animation when in view
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".experiences h2").forEach(el => {
            animateCount(el);
          });
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(experiencesDiv);
  }
}




// Hamburger menu
const hamburger = document.getElementById("hamburger");
const closeNav = document.getElementById("closeNav");
const sideNav = document.getElementById("sideNav");
const overlay = document.getElementById("overlay");

function hamburgerMenu() {
  function toggleNav() {
    // Toggle the side navigation visibility
    sideNav.classList.toggle("translate-y-0");
    sideNav.classList.toggle("-translate-y-full");
    overlay.classList.toggle("opacity-50");
    overlay.classList.toggle("pointer-events-auto");

    // Toggle page scroll when the side navigation is open
    if (sideNav.classList.contains("translate-y-0")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Restore the original overflow
    }
  }

  // Toggle sideNav when hamburger, overlay, or closeNav is clicked
  hamburger.addEventListener("click", toggleNav);
  overlay.addEventListener("click", toggleNav);
  closeNav.addEventListener("click", toggleNav);
}


// Update India Time
function updateIndiaTime() {
  const indiaTimeElement = document.getElementById('india-time');
  const mobileIndiaTimeElement = document.getElementById('mobile-india-time');

  if (indiaTimeElement || mobileIndiaTimeElement) {
    // Create a date object with the current time
    const now = new Date();

    // Convert to Indian Standard Time (UTC+5:30)
    const indiaTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));

    // Format the time
    const hours = indiaTime.getUTCHours();
    const minutes = indiaTime.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    // Format the time string
    const timeString = `${formattedHours}:${formattedMinutes} ${ampm} IST`;

    // Update desktop time element if it exists
    if (indiaTimeElement) {
      indiaTimeElement.textContent = timeString;
    }

    // Update mobile time element if it exists
    if (mobileIndiaTimeElement) {
      mobileIndiaTimeElement.textContent = timeString;
    }
  }
}

// Add parallax effect to project cards
function projectCardsParallax() {
  const projectCards = document.querySelectorAll('.project-card');

  if (projectCards.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;

      projectCards.forEach((card, index) => {
        // Create a subtle parallax effect based on scroll position
        const offset = (scrollPosition * 0.02) * (index % 2 === 0 ? 1 : -1);
        card.style.transform = `translateY(${offset}px)`;

        // Add scale effect on scroll
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        const windowCenter = window.innerHeight / 2;
        const distance = Math.abs(cardCenter - windowCenter);

        // Scale based on distance from center of viewport
        const maxDistance = window.innerHeight / 2;
        const scale = 1 - (Math.min(distance, maxDistance) / maxDistance) * 0.05;

        // Apply scale transformation
        card.querySelector('.card').style.transform = `scale(${scale})`;
      });
    });
  }
}

// Initialize all functions conditionally
function initPageScripts() {
  cursor();
  modelImgScale();
  initLocomotiveScroll();
  adjustNavigationPadding();
  countAnimation();
  hamburgerMenu();
  projectCardsParallax();

  // Update India time immediately and then every minute
  updateIndiaTime();
  setInterval(updateIndiaTime, 60000);
}

// Run the initialization function on DOM load
document.addEventListener("DOMContentLoaded", initPageScripts);




// Project details data
const projectsData = [
  {
    id: 1,
    name: "Ochi",
    category: "PRACTICE PROJECT",
    description: "A minimalist portfolio website for a design studio that I created as a practice project to improve my frontend skills.",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    features: ["Responsive design", "Interactive animations", "Portfolio showcase"],
    projectType: "Personal Practice Project",
    projectDuration: "2 weeks",
    image: "./public/portfolio2.PNG"
  },
  {
    id: 2,
    name: "Lazarev",
    category: "PRACTICE PROJECT",
    description: "A modern e-commerce platform with a focus on user experience that I built to practice my React skills and learn more about payment integrations.",
    technologies: ["React", "TailwindCSS", "JavaScript", "CSS"],
    features: ["Product filtering", "Responsive design", "Modern UI components"],
    projectType: "Skill Development Project",
    projectDuration: "3 weeks",
    image: "./public/portfolio3.PNG"
  },
  {
    id: 3,
    name: "Magic studio",
    category: "PRACTICE PROJECT",
    description: "Creative agency website with unique visual effects that I developed to practice advanced CSS animations and JavaScript interactions.",
    technologies: ["HTML", "GSAP", "JavaScript", "TailwindCSS"],
    features: ["Custom animations", "Responsive layout", "Interactive elements"],
    projectType: "Animation Practice Project",
    projectDuration: "10 days",
    image: "./public/portfolio5.PNG"
  },
  {
    id: 4,
    name: "Ochi Redesign",
    category: "PRACTICE PROJECT",
    description: "A redesign of the Ochi website that I created to practice modern web design principles and improve my frontend development skills.",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    features: ["Dynamic content loading", "Custom animations", "Responsive design"],
    projectType: "UI/UX Practice Project",
    projectDuration: "2 weeks",
    image: "./public/portfolio2.PNG"
  }
];

// Function to populate overlay with project details
function populateProjectDetails(projectIndex) {
  const project = projectsData[projectIndex];
  if (!project) return;

  const layerContent = document.querySelector(".layer-content");

  // Create HTML content for project details
  const content = `
    <button id="closeLayer" class="absolute top-4 right-4 bg-gray-200 text-gray-800 p-2 rounded-full focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <h2 class="text-3xl font-bold">${project.name}</h2>
          <span class="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">Practice</span>
        </div>
        <span class="inline-block bg-gray-200 px-2 py-1 rounded text-sm mb-4">${project.category}</span>
        <p class="mb-6">${project.description}</p>

        <div class="mb-4">
          <h3 class="text-xl font-semibold mb-2">Technologies</h3>
          <div class="flex flex-wrap gap-2">
            ${project.technologies.map(tech => `<span class="bg-gray-100 px-2 py-1 rounded">${tech}</span>`).join('')}
          </div>
        </div>

        <div class="mb-4">
          <h3 class="text-xl font-semibold mb-2">Features</h3>
          <ul class="list-disc pl-5">
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div>
        <div class="rounded-lg overflow-hidden mb-4">
          <img src="${project.image}" alt="${project.name}" class="w-full h-auto object-cover">
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <h3 class="text-xl font-semibold mb-2">Project Type</h3>
            <p>${project.projectType}</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-2">Duration</h3>
            <p>${project.projectDuration}</p>
          </div>
        </div>
        <div class="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <p class="text-sm text-yellow-800">
            <strong>Note:</strong> This is a practice project created for skill development and portfolio demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  `;

  layerContent.innerHTML = content;

  // Re-attach event listener to the close button
  document.getElementById("closeLayer").addEventListener("click", () => {
    const layer = document.getElementById("layer");
    layer.classList.remove("active");
    setTimeout(() => {
      layer.classList.add("hidden");
    }, 500);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const voteButtons = document.querySelectorAll(".vote-btn");
  const layer = document.getElementById("layer");

  // Add click event to each vote button
  voteButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent event bubbling
      populateProjectDetails(index);
      layer.classList.add("active");
      layer.classList.remove("hidden");
    });
  });

  // Close overlay when clicking on the background (but not on the content)
  layer.addEventListener("click", (e) => {
    if (e.target === layer) {
      layer.classList.remove("active");
      setTimeout(() => {
        layer.classList.add("hidden");
      }, 500);
    }
  });
});



const open = document.querySelectorAll(".open")
const arr = [
  {"link": "https://www.awwwards.com/sites/hatom"},
  {"link": "https://www.igloo.inc"},
  {"link": "https://monolith.nyc"},
  {"link": "https://obys.agency/works/"},
]

open.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    if(arr[index] && arr[index].link){
      window.open(arr[index].link, "_blank")
    }
  });
});