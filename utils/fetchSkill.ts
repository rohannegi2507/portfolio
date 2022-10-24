import { Skill } from "../typing";

export const fetchSkills = async()=>{
  const res =  await fetch(`https://rohannegi.com/api/getSkills`)   
  const data = await res.json()
  const skills: Skill[]= data.skills  
  return skills
}