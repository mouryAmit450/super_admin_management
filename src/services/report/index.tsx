'use client'
let base_url = process.env.NEXT_PUBLIC_BASE_URL;

async function auditReport() {
    const res = await fetch(base_url+'master_data/candidateDetails')
    if (!res.status === 200) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  
 export {
    auditReport
 } 