import { PageInfo } from "../typing";

export const fetchPageInfo = async()=>{
  const res =  await fetch(`https/rohannegi.com/api/getPageInfo`)   
  const data = await res.json()
  const pageInfo: PageInfo= data.pageInfo  
  return pageInfo
}