document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "EV Charging Analytics",
      description: "Optimized EV charging data ingestion pipeline using GCP, Airflow, and Spark. Reduced job latency by 25%.",
      link: "https://github.com/harshitraj04/ev-charging-analytics"
    },
    {
      title: "Sales KPI Dashboard",
      description: "Built Power BI dashboards tracking sales performance and KPIs for better business decisions.",
      link: "https://github.com/harshitraj04/sales-kpi-dashboard"
    },
    {
      title: "Data Pipeline Automation",
      description: "Automated data pipelines using AWS Glue and Databricks for real-time data processing.",
      link: "https://github.com/harshitraj04/data-pipeline-automation"
    }
  ];

  const container = document.getElementById("project-list");

  projects.forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
      <a href="${proj.link}" target="_blank">View Project</a>
    `;
    container.appendChild(card);
  });
});
