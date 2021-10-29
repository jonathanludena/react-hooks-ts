import { useForm } from "../hooks/useForm";

export const Formulario2 = () => {
  const { postal, ciudad, formulario, handleChange } = useForm({
    postal: "",
    ciudad: "",
  });

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Código Postal</label>
        <input
          onChange={handleChange}
          type="text"
          name="postal"
          className="form-control"
          value={postal}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ciudad</label>
        <input
          onChange={handleChange}
          type="text"
          name="ciudad"
          className="form-control"
          value={ciudad}
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
