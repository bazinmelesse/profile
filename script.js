const profile = {
  photo: "images/profile.jpg",          // your picture (square-ish works best)
  background: "images/background.jpg",  // optional background image
  name: "Your Name",
  tagline: "Full-stack developer",
  intro: "I build web apps end to end. Frontend, backend, databases—I own the whole stack.",
  email: "you@example.com",
  links: { github: "https://github.com/yourname", linkedin: "https://linkedin.com/in/yourname" },
  skills: [
    { category: "Frontend", items: "React, TypeScript, Tailwind CSS" },
    { category: "Backend", items: "Node.js, Express, Go" },
    { category: "Database", items: "PostgreSQL, Redis, Prisma" },
    { category: "DevOps", items: "Docker, AWS, CI/CD" }
  ],
  projects: [
    { title: "Project One", desc: "A web app that does something useful.", links: { live: "#", code: "#" } },
    { title: "Project Two", desc: "Another project that showcases your skills.", links: { live: "#", code: "#" } },
    { title: "Project Three", desc: "Something you built that solves a problem.", links: { code: "#" } }
  ]
};

const $ = id => document.getElementById(id);
document.title = `${profile.name} | Developer`;
$("name").textContent = profile.name;
$("tagline").textContent = profile.tagline;
$("intro").textContent = profile.intro;

$("actions").innerHTML =
  `<a class="btn" href="mailto:${profile.email}">Get in touch</a>` +
  `<a class="btn" href="${profile.links.github}">GitHub</a>` +
  `<a class="btn" href="${profile.links.linkedin}">LinkedIn</a>`;

$("skills").innerHTML = profile.skills.map(s =>
  `<div class="skill-card"><h3>${s.category}</h3><p>${s.items}</p></div>`
).join("");

$("projects").innerHTML = profile.projects.map(p =>
  `<li class="project-item">
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="project-links">
      ${p.links.live ? `<a href="${p.links.live}">Live</a>` : ""}
      ${p.links.code ? `<a href="${p.links.code}">Code</a>` : ""}
    </div>
  </li>`
).join("");

$("contact-btn").href = `mailto:${profile.email}`;
$("contact-btn").textContent = `Email: ${profile.email}`;

$("footer").textContent = `© ${new Date().getFullYear()} ${profile.name}. Built with care.`;

/* ---- Images ----
   Put your files in the images/ folder next to this page, then set the paths
   in `profile` above. If a file is missing, that image is simply skipped. */
function loadImage(src, onOk){
  if (!src) return;
  const img = new Image();
  img.onload = () => onOk(src);
  img.src = src;
}
loadImage(profile.photo, src => {
  const p = $("photo");
  p.src = src;
  p.alt = `Portrait of ${profile.name}`;
  p.hidden = false;
});
loadImage(profile.background, src => {
  document.documentElement.style.setProperty("--bg-image", `url("${src}")`);
  document.documentElement.classList.add("has-bg");
});
