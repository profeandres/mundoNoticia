import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const NewNoticia2 = () => {
  const [description, setDescription] = useState('')
    const publicar = (values) => {
    console.log(values);
  };

  const handleBlur = () => {
    let $description = document.getElementsByClassName('newNoticia-imgCon');
    console.log(description);
    console.log($description)
};
  const validar = (values) => {
    const errors = {};
    console.log(values);
    if (values.title.length < 5)
      errors.title = "El título es muy corto debe tener más de 5 carácteres.";
    if (values.subtitle.length < 10)
      errors.subtitle =
        "El subtítulo es muy corto debe tener más de 10 carácteres.";
    if (values.description.length < 200)
      errors.description =
        "La description es muy corta  debe tener más de 200 carácteres.";
    return errors;
  };
  return (
    <div className="newNoticia">
      <h1 className="newNoticia-h1">Crear Nueva Noticia</h1>
      <Formik
        initialValues={{
          title: "",
          subtitle: "",
          description: "",
          img_main: undefined,
        }}
        onSubmit={publicar}
        validate={validar}
      >
        {({ setFieldValue, handleSubmit, isSubmitting, values }) => (
          <Form onSubmit={handleSubmit} className="newNoticia-form">
            <div className="sub-ti">
              <label htmlFor="">Titulo de la noticia</label>
              <Field name="title" />
              <ErrorMessage
                name="title"
                component="p"
                className="errorMessage"
              />
              <label htmlFor="">Subtitulo de la noticia</label>
              <Field name="subtitle" />
              <ErrorMessage
                name="subtitle"
                component="p"
                className="errorMessage"
              />
            </div>
            <div className="ti-desc">Description de la noticia</div>
            <ReactQuill
              theme="snow"
              value={values.description}
              onChange={(e) => {
                setFieldValue("description", e)
                setDescription(e)
            }}
              onBlur={handleBlur}
            />
            <div id="neWNoticia-imgCon" className="newNoticia-imgCon">
              <label htmlFor="img_main">Subir imagen</label>
              <input
                type="file"
                name="img_main"
                id="img_main"
                onChange={(e) => {
                  setFieldValue("img_main", e.target.files[0]);
                }}
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <AiOutlineLoading3Quarters className="noticia-uploading" />
              ) : (
                "Crear Noticia"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
