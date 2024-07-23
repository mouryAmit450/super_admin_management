'use client'
let base_url = process.env.NEXT_PUBLIC_BASE_URL;

async function auditReport(payloadData) {
    const {selectType , keyword} = payloadData  
    const res = await fetch(base_url+'master_data/candidateDetails',{
      method:'POST',
      body:JSON.stringify({[selectType] :keyword}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    if (!res.status === 200) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  
  async function dashboardApi() {
    const res = await fetch(base_url+'master_data/candidateCount')
    if (!res.status === 200) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  
 export {
    auditReport,dashboardApi
 } 