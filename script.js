

let currentTab = "all";

let jobs = [
  {id:1,
    company:"TechNova",
     position:"Frontend Developer", 
    location:"Remote",
    type:"Full-time",
    salary:"$80,000",
    description:"Build modern websites.",
    status:"all"},
  {id:2,
  company:"CloudSoft",
   position:"Backend Developer",
   location:"USA",
    type:"Full-time",
    salary:"$90,000",
    description:"Work with APIs.",
    status:"all"},

  {id:3,
     company:"DataPro",
      position:"Data Analyst",
       location:"Canada",
        type:"Full-time",
         salary:"$75,000",
          description:"Analyze data trends.",
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
     company:"SecureIT",
    position:"Security Engineer",
    location:"USA",
    type:"Full-time",
    salary:"$100,000",
    description:"Maintain system security.",
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
     company:"AI Labs",
      position:"ML Engineer",
       location:"USA",
      type:"Full-time",
      salary:"$120,000",
       description:"Build AI models.",
       status:"all"}
    ];

function renderJobs() {

  let container = document.getElementById("jobsContainer");
  container.innerHTML = "";

  let filtered = jobs.filter(job => 
    currentTab === "all" ? 
    true : job.status === currentTab
  );

  document.getElementById("jobCount").innerText = filtered.length + " Jobs";

  if(filtered.length === 0){
    container.innerHTML = `
      <div class="empty">
        <h3>No jobs available</h3>
        <p>Please check back later.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(job => {
    container.innerHTML += `
      <div class="job-card">
        <button class="delete-btn" onclick="deleteJob(${job.id})">Delete</button>
        
        <h4>${job.company}</h4>
        <p><b>${job.position}</b></p>
        <p>${job.location} . ${job.type}</p>
        <p>${job.salary}</p>
        <p>${job.description}</p>
        <div class="buttons">
          <button class="interview-btn" onclick="setStatus(${job.id}, 'interview')">Interview</button>
          <button class="rejected-btn" onclick="setStatus(${job.id}, 'rejected')">Rejected</button>
        </div>
      </div>
    `;
  });

  updateDashboard();
}

function setStatus(id, status){
  let job = jobs.find(j => j.id === id);

  if(job.status === status){
    job.status = "all";
  } else {
    job.status = status;
  }

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