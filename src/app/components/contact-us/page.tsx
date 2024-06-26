import React from 'react';

const ContactForm = () => {
  return (
    <div className="container mx-auto py-10 px-4 mt-20">
      <div className="bg-base-200 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-info">Contáctanos</h2>
        <form className="space-y-4">
          {/* Nombre Completo */}
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Nombre Completo</span>
            </label>
            <input type="text" id="name" className="input input-bordered w-full" placeholder="Tu nombre completo" required />
          </div>
          {/* Correo Electrónico */}
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Correo Electrónico</span>
            </label>
            <input type="email" id="email" className="input input-bordered w-full" placeholder="tucorreo@dominio.com" required />
          </div>
          {/* Número de Teléfono */}
          <div className="form-control">
            <label className="label" htmlFor="phone">
              <span className="label-text">Número de Teléfono (Opcional)</span>
            </label>
            <input type="tel" id="phone" className="input input-bordered w-full" placeholder="123-456-7890" />
          </div>
          {/* Empresa/Organización */}
          <div className="form-control">
            <label className="label" htmlFor="company">
              <span className="label-text">Empresa/Organización (Opcional)</span>
            </label>
            <input type="text" id="company" className="input input-bordered w-full" placeholder="Nombre de tu empresa" />
          </div>
          {/* Tipo de Proyecto */}
          <div className="form-control">
            <label className="label" htmlFor="project-type">
              <span className="label-text">Tipo de Proyecto</span>
            </label>
            <select id="project-type" className="select select-bordered w-full" required>
              <option value="">Selecciona un tipo de proyecto</option>
              <option value="website">Página Web</option>
              <option value="ecommerce">Tienda Virtual</option>
              <option value="seo">Optimización SEO</option>
              <option value="other">Otro</option>
            </select>
          </div>
          {/* Descripción del Proyecto */}
          <div className="form-control">
            <label className="label" htmlFor="description">
              <span className="label-text">Descripción del Proyecto</span>
            </label>
            <textarea id="description" className="textarea textarea-bordered w-full" placeholder="Describe brevemente tu proyecto" required></textarea>
          </div>
          {/* Presupuesto Aproximado */}
          <div className="form-control">
            <label className="label" htmlFor="budget">
              <span className="label-text">Presupuesto Aproximado (Opcional)</span>
            </label>
            <input type="text" id="budget" className="input input-bordered w-full" placeholder="$1000 - $5000" />
          </div>
          {/* Objetivos del Proyecto */}
          <div className="form-control">
            <label className="label" htmlFor="goals">
              <span className="label-text">Objetivos del Proyecto</span>
            </label>
            <textarea id="goals" className="textarea textarea-bordered w-full" placeholder="¿Qué esperas lograr con este proyecto?" required></textarea>
          </div>
          {/* Plazo Deseado */}
          <div className="form-control">
            <label className="label" htmlFor="deadline">
              <span className="label-text">Plazo Deseado</span>
            </label>
            <input type="date" id="deadline" className="input input-bordered w-full" required />
          </div>
          {/* Requieren Soporte */}
          <div className="form-control">
            <label className="label" htmlFor="support">
              <span className="label-text">¿Requieren Soporte Continuo?</span>
            </label>
            <div className="flex items-center space-x-4">
              <label className="cursor-pointer">
                <input type="radio" name="support" value="yes" className="radio radio-primary" />
                <span className="ml-2">Sí</span>
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="support" value="no" className="radio radio-primary" defaultChecked/>
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          {/* Comentarios o Preguntas Adicionales */}
          <div className="form-control">
            <label className="label" htmlFor="additional-comments">
              <span className="label-text">Comentarios o Preguntas Adicionales</span>
            </label>
            <textarea id="additional-comments" className="textarea textarea-bordered w-full" placeholder="Cualquier otra información que debamos saber"></textarea>
          </div>
          {/* Botón de Enviar */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
