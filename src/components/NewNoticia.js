import React, { useState } from 'react'

const initialForm = {
  title: "",
  subtitle: "",
  description: "",
  img_main: ""
}

export const NewNoticia = () => {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) =>{
    e.prevenDefault()
    console.log('si sirve');
  }

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  return (
    <div className='newNoticia'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título de la noticia</label>
        <input type="text" name='title' value={form.title} onChange={handleChange}/>
        <label htmlFor="subtitle">Subtítulo de la noticia</label> 
        <input type="text" name='subtitle' value={form.subtitle} onChange={handleChange}/>
        <label htmlFor="description">Descripción de la noticia</label>
        <input type="text" name='description' value={form.description} onChange={handleChange}/>
      </form>
    </div>
  )
}
