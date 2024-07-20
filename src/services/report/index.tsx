async function auditReport() {
    const res = await fetch('https://fakestoreapi.com/products')
    if (!res.status === 200) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  
 export {
    auditReport
 } 