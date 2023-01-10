import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useNoticia } from "../context/noticiasContext";

const initialForm = {
  title: "",
  subtitle: "",
  description: "",
  img_main: "",
};

const SignupForm = () => {
  const {createNoticia} = useNoticia();
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleQuillEdit = (value) => {
    setDescription(value);
    formik.setValues({ ...formik.values, description });
  };

  const formik = useFormik({
    initialValues: initialForm,
    onSubmit:  async () => {
      await createNoticia(formik.values)
      formik.setValues(initialForm);
      toast.success("Successfully created!", {
        duration: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
  });

  const handleDelete = () => {
    console.log(formik.values);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="sub-ti">
        <input
          id="inputFade"
          type="text"
          name="description"
          value={description}
          onChange={formik.handleChange}
        />
        <label htmlFor="title">Titulo de la noticia</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        {formik.errors.title ? (
          <div className="formError">{formik.errors.title}</div>
        ) : null}

        <label htmlFor="subtitle">Subtitulo de la noticia</label>
        <input
          id="subtitle"
          name="subtitle"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.subtitle}
        />
        {formik.errors.subtitle ? (
          <div className="formError">{formik.errors.subtitle}</div>
        ) : null}
      </div>

      {/* <label htmlFor="description">Descripción de la noticia</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      {formik.errors.description ? (
        <div className="formError">{formik.errors.description}</div>
      ) : null} */}

      <div className="ti-desc">Description de la noticia</div>
      <ReactQuill theme="snow" value={description} onChange={handleQuillEdit} />

      <div className="img_main-container">
        <span>Imagen principal de la noticia</span>
        <input
          id="img_main"
          name="img_main"
          type="file"
          onChange={formik.handleChange}
          value={formik.values.img_main}
        />
        {formik.errors.img_main ? (
          <div className="formError">{formik.errors.img_main}</div>
        ) : null}
      </div>
      <button type="reset" onClick={() => {
        formik.setValues(initialForm)
        }}>
        Limpiar
      </button>
      <button type="submit">Submit</button>
      <button type="reset" onClick={handleDelete}>
        toast prueba
      </button>
      <Toaster />
    </form>
  );
};

export const NewNoticia = () => {
  return (
    <div className="newNoticia">
      <h1 className="newNoticia-h1">Nueva Noticia</h1>
      <SignupForm />
    </div>
  );
};
