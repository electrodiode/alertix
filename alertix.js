function alertix(message) {
  const alertix = document.createElement('div');
  alertix.classList.add('alertix'); // Cambiado el nombre de la clase


  const alertixContent = `
    <style>
    
    #alertix {
      position: fixed;
      font-family: Arial, sans-serif;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column; /* Cambiado a dirección de columna */
      align-items: center;
      margin-top: 10px;
      user-select: none;
    }
    
    .alerta {
      background-color: #f8d7da;
      border: 1px solid #f5c6cb;
      color: #721c24;
      padding: 10px;
      border-radius: 5px;
      max-width: 400px;
      position: relative;
      animation: fadeInUp 0.5s ease forwards;
      margin-bottom: 10px; /* Espacio entre alertas */
    }
    

      .contenido {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .cerrar {
        font-size: 20px;
        cursor: pointer;
      }

      .enlace {
        color: #721c24;
        text-decoration: underline;
      }

      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
    <div class="alerta">
      <div class="contenido">
        <p>${message}</p>
        <span class="cerrar">&times;</span>
      </div>
    </div>
  `;

  alertix.innerHTML = alertixContent;

  document.getElementById('alertix').appendChild(alertix); // Usar el nuevo contenedor

  const closeButton = alertix.querySelector('.cerrar');
  closeButton.addEventListener('click', () => {
    document.getElementById('alertix').removeChild(alertix);
  }); 
}