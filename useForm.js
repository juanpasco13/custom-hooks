import { useState } from "react"

export const useForm = ( initialForm = {}) => {

    const [formStatue, setFormStatue] = useState( initialForm )

    const onInputChange = ({target}) => {
      const { name, value } = target
      setFormStatue({
       ...formStatue,
        [name]: value
      })
    }

    const onRestForm = (event) => {
        setFormStatue( initialForm )
    }

  return {
    // Si queremos enviar las variables desde aqui podemos enviarlas asi
    // ...formStatue,
    formStatue,
    onInputChange,
    onRestForm
  }
}
