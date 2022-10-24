import { Experience } from "../typing";

export const fetchExperiences = async()=>{
  const res =  await fetch(`https://rohannegi.com/api/getExperiences`)   
  const data = await res.json()
  const experiences: Experience[]= data.experiences  
  return experiences
}