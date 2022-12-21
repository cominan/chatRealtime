import { useEffect, useState } from "react"
import { db } from "../firebase/firebase"







const useFireStore = (collection, condition) => {
    const [documents,setDocuments] = useState([])
    useEffect(() => {
        const conditionRef = db.collection(collection).orderBy('createAt')
        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length) {
                return;
            }
            conditionRef.where(condition.fieldName, condition.operator, condition.compareValue)
        }
      const unsubrise = conditionRef.onSnapshot((snapshot) => {
          const documents = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setDocuments(documents)
        })
        return unsubrise;
    },[collection,condition])
    return documents
}

export default useFireStore