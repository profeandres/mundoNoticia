import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { useNoticia } from "../context/noticiasContext";

export const NewNoticia2 = () => {
  const navigate = useNavigate();
  const { createNoticia } = useNoticia();
  const [description, setDescription] = useState("");
  const [blur, setBlur] = useState(false);
  const handleBlur = () => {
    if (!blur) setBlur(true);
    let $description = document.getElementsByClassName("newNoticia-imgCon");
    let error = document.createElement("p");
    error.innerText =
      "La description es muy corta  debe tener más de 200 carácteres.";
    error.classList = "errorMessage";
    error.id = "eliminar";
    if (description.length < 200 && !document.getElementById("eliminar")) {
      $description[0].insertAdjacentElement("afterbegin", error);
    } else if (
      description.length >= 200 &&
      document.getElementById("eliminar")
    ) {
      document.getElementById("eliminar").remove();
    }
  };
  const validar = (values) => {
    const errors = {};
    if (values.title.length < 5)
      errors.title = "El título es muy corto debe tener más de 5 carácteres.";
    if (values.subtitle.length < 10)
      errors.subtitle =
        "El subtítulo es muy corto debe tener más de 10 carácteres.";
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
        onSubmit={async (values, actions) => {
          await createNoticia(values);
          actions.resetForm();
          actions.setSubmitting(false);
          toast.success("Successfully created!", {
            duration: 2000,
          });
          navigate("/");
        }}
        validate={validar}
      >
        {({ setFieldValue, handleSubmit, isSubmitting, values, actions }) => (
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
                setFieldValue("description", e);
                setDescription(e);
                if (blur) handleBlur();
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
            <div className="newNoticias-submit">
              <button
                className="newNoticias-submit-btn"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className="noticia-submitting" />
                ) : (
                  "Crear Noticia"
                )}
              </button>
              <button className='newNoticias-reset-btn' type="reset" onClick={() => actions.resetForm()}>
                Limpiar
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Toaster/>
    </div>
  );
};
