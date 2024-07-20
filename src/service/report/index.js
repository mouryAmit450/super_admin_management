async function auditReport() {
    const res = await fetch(process.env.LOCAL_URL+'master_data/auditlogs')
    if (!res.status === 200) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  
 export {
    auditReport
 } 