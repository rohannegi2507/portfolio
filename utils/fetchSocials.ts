import { Social } from "../typing";

export const fetchSocials = async()=>{
    debugger
  const res =  await fetch(`https://rohannegi.com/api/getSocials`)   
  console.log(res)
  const data = await res.json()
  const socials: Social[]= data.socials  
  return socials
}