import React from 'react';

const ChatSimulation = () => {
  return (
    <div className="container mx-auto py-10 px-4 mt-20 space-y-4">
      {/* Chat Bubble - Empresa */}
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Empresa"
              src="https://i.ibb.co/2NnYkG1/1710455716218.jpg" />
          </div>
        </div>
        <div className="chat-header">
          BentoSites
          <time className="text-xs opacity-50 ml-2">09:00</time>
        </div>
        <div className="chat-bubble bg-warning">Hola, ¿en qué podemos ayudarte hoy?</div>
        <div className="chat-footer opacity-50">Enviado</div>
      </div>
      {/* Chat Bubble - Cliente */}
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Cliente"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header">
            Maria Lopez
          <time className="text-xs opacity-50 ml-2">09:01</time>
        </div>
        <div className="chat-bubble bg-accent">Estoy interesado en desarrollar una página web para mi negocio.</div>
        <div className="chat-footer opacity-50">Visto a las 09:01</div>
      </div>
      {/* Chat Bubble - Empresa */}
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Empresa"
              src="https://i.ibb.co/2NnYkG1/1710455716218.jpg" />
          </div>
        </div>
        <div className="chat-header">
          BentoSites
          <time className="text-xs opacity-50 ml-2">09:02</time>
        </div>
        <div className="chat-bubble bg-warning">¡Perfecto! ¿Puedes darnos más detalles sobre el tipo de página que necesitas?</div>
        <div className="chat-footer opacity-50">Enviado</div>
      </div>
      {/* Chat Bubble - Cliente */}
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Cliente"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Maria Lopez
          <time className="text-xs opacity-50 ml-2">09:03</time>
        </div>
        <div className="chat-bubble bg-accent">Claro, necesito una página para mostrar mis productos y servicios, y que tenga integración con redes sociales.</div>
        <div className="chat-footer opacity-50">Visto a las 09:03</div>
      </div>
      {/* Chat Bubble - Empresa */}
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Empresa"
              src="https://i.ibb.co/2NnYkG1/1710455716218.jpg" />
          </div>
        </div>
        <div className="chat-header">
          BentoSites
          <time className="text-xs opacity-50 ml-2">09:04</time>
        </div>
        <div className="chat-bubble bg-warning">¡Excelente! ¿Tienes alguna idea del presupuesto y plazo para este proyecto?</div>
        <div className="chat-footer opacity-50">Enviado</div>
      </div>
      {/* Chat Bubble - Cliente */}
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Cliente"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header">
            Maria Lopez
          <time className="text-xs opacity-50 ml-2">09:05</time>
        </div>
        <div className="chat-bubble bg-accent">Tengo un presupuesto de alrededor de $3000 y me gustaría lanzarla en dos meses.</div>
        <div className="chat-footer opacity-50">Visto a las 09:05</div>
      </div>
    </div>
  );
}

export default ChatSimulation;
