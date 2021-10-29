import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

export const Formulario = () => {
  const { formulario, handleChange, email, nombre, edad } = useForm<FormData>({
    email: "jonathan@email.com",
    nombre: "jonathan",
    edad: 35,
  });

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          className="form-control"
          value={email}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          onChange={handleChange}
          type="text"
          name="nombre"
          className="form-control"
          value={nombre}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Edad</label>
        <input
          onChange={handleChange}
          type="number"
          name="edad"
          className="form-control"
          value={edad}
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
