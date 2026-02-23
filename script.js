



let currentTab = "all";

let jobs = [
  {id:1,
    company:"Mobile First Corp",
     position:"React Native Developer", 
    location:"Remote",
    type:"Full-time",
    salary:"$80,000",
    description:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status:"all"},
  {id:2,
  company:"WebFlow Agency",
   position:"Web Designer & Developer",
   location:"USA",
    type:"Full-time",
    salary:"$90,000",
    description:"Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status:"all"},

  {id:3,
     company:"DataViz Solutions",
      position:"Data Visualization Specialist",
       location:"Canada",
       type:"Full-time",
      salary:"$75,000",
      description:"Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",

      status:"all"},


  {id:4,
    company:"DesignHub",
     position:"UI Designer",
    location:"UK",
    type:"Contract",
    salary:"$65,000",
    description:"Design app interfaces.",
    status:"all"},

  {id:5,
     company:"Innovation Labs",
    position:"Security Engineer",
    location:"USA",
    type:"Full-time",
    salary:"$100,000",
    description:"Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status:"all"},

  {id:6,
     company:"AppWorks", 
     position:"Mobile Developer", 
     location:"Remote",
    type:"Part-time",
    salary:"$70,000",
    description:"Build mobile apps.",
    status:"all"},

  {id:7,
    company:"NextGen",
    position:"DevOps Engineer",
    location:"Germany",
    type:"Full-time",
    salary:"$95,000",
    description:"Maintain cloud systems.",
    status:"all"},

  {id:8,
     company:"TechCorp Industries",
      position:"ML Engineer",
       location:"USA",
      type:"Full-time",
      salary:"$120,000",
      description:"We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
       status:"all"}
    ];


function getStatusText(status) {
  if (status === "interview") return "INTERVIEW";
  if (status === "rejected") return "REJECTED";
  return "NOT APPLIED";
}

function renderJobs() {

  let container = document.getElementById("jobsContainer");
  container.innerHTML = "";

  let filtered = jobs.filter(job =>
    currentTab === "all" || job.status === currentTab
  );

  document.getElementById("jobCount").innerText =
    filtered.length + " Jobs";

  if(filtered.length === 0){
    container.innerHTML = `
      <div class="empty">
        <div class="empty-icon">
          <i class="fa-regular fa-file-lines"></i>
        </div>
        <h3>No jobs available</h3>
        <p>Check back later for new opportunities</p>
      </div>
    `;
    updateDashboard();
    return;
  }

  filtered.forEach(job => {
    container.innerHTML += `
     <div class="job-card">

  <button class="delete-btn" onclick="deleteJob(${job.id})">
    <i class="fa-solid fa-trash"></i>
  </button>

 <h4 class="company">${job.company}</h4>

<p class="position">${job.position}</p>

<p>${job.location} • ${job.type} • ${job.salary}</p>

<span class="status-badge ${job.status}">
  ${getStatusText(job.status)}
</span>

<p>${job.description}</p>
  <div class="buttons">
    <button class="interview-btn ${job.status === 'interview' ? 'active' : ''}"
      onclick="setStatus(${job.id}, 'interview')">
      INTERVIEW
    </button>

    <button class="rejected-btn ${job.status === 'rejected' ? 'active' : ''}"
      onclick="setStatus(${job.id}, 'rejected')">
      REJECTED
    </button>
  </div>

</div>
    `;
  });

  updateDashboard();
}

function setStatus(id, status){
  let job = jobs.find(j => j.id === id);

  job.status = job.status === status ? "all" : status;

  renderJobs();
}

function deleteJob(id){
  jobs = jobs.filter(job => job.id !== id);
  renderJobs();
}

function changeTab(tab){
  currentTab = tab;

  document.getElementById("allTab").classList.remove("active");
  document.getElementById("interviewTab").classList.remove("active");
  document.getElementById("rejectedTab").classList.remove("active");

  document.getElementById(tab + "Tab").classList.add("active");

  renderJobs();
}

function updateDashboard(){
  document.getElementById("total").innerText = jobs.length;
  document.getElementById("interviewCount").innerText =
    jobs.filter(j => j.status === "interview").length;
  document.getElementById("rejectedCount").innerText =
    jobs.filter(j => j.status === "rejected").length;
}

renderJobs();
