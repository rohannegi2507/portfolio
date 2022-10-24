import { Project } from "../typing";

export const fetchProjects = async()=>{
  const res =  await fetch(`https://rohannegi.com/api/getProjects`)   
  const data = await res.json()
  const projects: Project[]= data.projects  
  return projects
}