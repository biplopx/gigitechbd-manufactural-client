import { useEffect, useState } from "react"

const useAdmin = user => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  const email = user?.email;
  if (email) {
    fetch(`http://localhost:5000/admin/${email}`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
    })
      .then(res => res.json())
      .then(data => {
        setAdmin(data.admin)
        setAdminLoading(false)
      })
  }
  return [admin, adminLoading]
}

export default useAdmin;