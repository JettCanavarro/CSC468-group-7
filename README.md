<html> <h1><b>Cloud Computing</b><br></h1>
  <body><b><h2>All Ground Up</h2></b><br>
<p>The purpose of this repository is to demonstrate the implemenation of cloud based computing. All Ground Up will be a cloud based coffee delivery application</p>
<h2><b>Concepts include:</b></h2>
  <ul>
    <li>Cloud Infrastructure</li>
    <li>Service Models & Deployment Models</li>
    <li>Containerizaiton</li>
    <li>Virtualization</li>
    <li>Containers Orchestration</li>
  </ul>
 <h2> Technologies </h2>
   <ul>
    <li>CloudLab</li>
    <li>KVM (Kernal Virtual Machine)</li>
    <li>Docker</li>
    <li>Kubernetes</li>
    
   </ul>
    <h2> How To Deploy (for Instructor) </h2>
    <h3>Building the Docker Containers</h3>
    <ul>
      <h4>Webui:</h4>
        <li>Navigate to webui directory</li>
        <li>docker build -t webui . </li>
        <li>docker run -d -p 8080:80  webui </li>
      <h4>Database:</h4>
        <li>Navigate to database directory</li>
        <li>docker build -t mysql-container . </li>
        <li>docker run mysql-container </li>
      <h4>Worker:</h4>
        <li>Navigate to worker directory</li>
        <li>docker build -t worker . </li>
      <li>Navigate to localhost:8080 or cloudlab_session_url:8080</li>
    </ul>
    <h3>Building with Kubernetes</h3>
    <ul>
      <li>kubectl create -f agu-deployment.yaml</li>
      <li>kubectl create -f agu-services.yaml</li>
      <li>kubectl create -f mysql-secret.yaml</li>
      <li>kubectl create -f mysql-storage.yaml</li>
      <li>May need to run agu-deployment step a second time for worker to run </li>
      <li>Navigate to localhost:31000 or your_cloudlab_url:31000 to see the web page</li> 
    </ul>
    <h3>Setting Up with Jenkins</h3>
    <ul>
      <li>Create your own Jenkins registry in k8s cloudlab experiment</li>
      <li>Fork this github repository to your own account. Make sure to include all branches.</li>
      <h4>Edit the Jenkins files in the webui, database, and worker branches.</h4>
      <ul>
      <li>Replace the registry ip with your registry ip at in the environment section</li>
      <li>Replace the id with your cloudlab id</li>
      </ul>
      <h4>Launch Jenkins and Then:</h4>
      <ul>
      <li>Make sure to add a webhook to your cloned repository</li>
        <li>Create a pipeline.</li>
        <li>Scroll down to Build Triggers, select GitHub hook trigger for GITScm polling</li>
        <li>Scroll down to pipeline and select the following</li>
        <li>Definition: Pipeline script from SCM</li>
        <li>Repository URL: The CSC468-group-7 repository</li>
        <li>SCM: Git</li>
        <li>Branches to build: webui</li>
        <li>Add Branches</li>
        <li>Branches to build: database</li>
        <li>Branches to build: worker</li>
        <li>Save</li>
        <li>Build Now three times (3 builds) to fully deploy the project</li>
        <li>Navigate to localhost:31000 or your_cloudlab_url:31000 to see the web page</li> 
      </ul?
    </ul>
 </body>
</html>
