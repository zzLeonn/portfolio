async function loadSection(id, file) {
  const response = await fetch(file);
  const html = await response.text();

  document.getElementById(id).innerHTML = html;
}

async function loadAllSections() {

  await loadSection("navbar", "./sections/navbar.html");
  await loadSection("profile", "./sections/profile.html");
  await loadSection("about", "./sections/about.html");
  await loadSection("experience", "./sections/experience.html");
  await loadSection("projects", "./sections/projects.html");
  await loadSection("contact", "./sections/contact.html");
  await loadSection("footer", "./sections/footer.html");

  // RELOAD LINKEDIN BADGE
  if (window.IN?.parse) {
    window.IN.parse();
  }
}

loadAllSections();