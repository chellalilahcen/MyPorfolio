Professional Portfolio & CI/CD PipelineThis repository contains my personal portfolio website, built only with (HTNL/CSS/JS). 
The project is fully automated using a CI/CD pipeline via GitHub Actions, deploying directly to Microsoft Azure App Service/Static Web Apps.

🚀 Technical Stack:
   - Frontend: [HTML/CSS/JS]
   - Cloud Hosting: Microsoft Azure
   - CI/CD: GitHub Actions
   - Domain Management: Azure DNS && Hostinger

     
🛠 Architecture & Workflow
   This project implements a modern DevOps workflow to ensure that the live site is always in sync with the main branch.
   1. Commit & Push: Code is pushed to the GitHub repository.
   2. GitHub Actions Trigger: A workflow file (.github/workflows/azure-deploy.yml) is triggered.
   3. Build Phase: Dependencies are installed, and the production build is generated.
   4. Deployment: The build artifacts are securely pushed to Azure using a Deployment Secret (Service Principal or Publish Profile).

      
⚙️ Setup & Deployment
   If you'd like to fork this and set up your own Azure pipeline:
   1. PrerequisitesAn Azure Account.A Resource Group and App Service (or Static Web App) created in the Azure Portal.
   2. ConfigurationAdd your Azure Service Principal or Publish Profile to your GitHub repository secrets:Go to Settings > Secrets and variables > Actions.Add a new secret named AZURE_WEBAPP_PUBLISH_PROFILE.
   3. Workflow FileThe deployment logic is located in .github/workflows/main.yml. Ensure the app-name matches your Azure resource:
      
      <img width="716" height="207" alt="image" src="https://github.com/user-attachments/assets/9f4a69f6-5fbd-46de-9315-743acff1e4bd" />
 

Note: This project was built to demonstrate not just web development skills, but also the ability to manage cloud infrastructure and automated deployment pipelines.
