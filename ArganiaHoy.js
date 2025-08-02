// app.js

document.addEventListener("DOMContentLoaded", () => {
  const data = {
    resumenDiario: {
      cambioOficial: "$43,53 (+2,33%)",
      cambioBlue: "$55 (+22,22%)",
      inflacion: {
        mensual: "4.26%",
      },
      produccionIndustrial: "+196,56%",
      pbiActual: "$1.670.429M",
      pbiPotencial: "$700.000M",
      reservas: "US$ 962.000M",
      balanceFiscal: "-$427,158 Millones"
    },
    datosMonetarios: {
      tasaInteres: "10%",
      emision: "$0",
      ofertaDemanda: "Equilibrada",
      tensionMonetaria: "1.0/10",
      intervencion: "No hubo"
    },
    consumoPrecios: {
      precios: {
        canasta: "$10.000",
        nafta: "$139,4/litro",
        transporte: "$300",
        alquiler: "$3.015"
      },
      variacionSectorial: {
        alimentos: "0.0%",
        textil: "-38.8%",
        construccion: "0.0%"
      }
    },
    comercioExterior: {
      exportaciones: "US$ 6.499M",
      importaciones: "US$ 178M",
      tratados: "-",
      productos: {
        exportados: ["Joyas", "Automoviles", "Whisky"],
        importados: ["Tecnologia", "Materia Prima"]
      },
    },
    empleoSociedad: {
      empleo: "97.34%",
      desempleo: "2.66%",
      censo: "5.6M hab.",
      convocatorias: "-",
      cursos: ["-"]
    },
    notificaciones: [
      "⚠️ El Gobierno elimino impuestos nacionales"
    ],
    herramientas: [
      "🔄PROXIMAMENTE "
    ],
    comunicados: {
      resumen: "'NOS CONVERTIMOS EN EL PAIS MAS LIBRE DEL MUNDO' - Presidente Rosales",
      conferencia: "'Los impuestos nacionales serán 0%' - Ministro de Economía",
      evento: "-"
    }
  };

  const seccion = (id, html) => {
    document.getElementById(id).innerHTML = html;
  };

  

  const cotizaciones = [
  { fecha: "2 ago", valor: "$49,60" },
  { fecha: "1 ago", valor: "$47,41" },
  { fecha: "31 jul", valor: "$40,53" },
  { fecha: "30 jul", valor: "$39,61" },
  { fecha: "29 jul", valor: "$32,06" },
];

  seccion("resumen-diario", `
    <h2 class="titulo-seccion">📱 Resumen Diario</h2>
    <p>📈 Tipo de cambio oficial: ${data.resumenDiario.cambioOficial} | Blue: ${data.resumenDiario.cambioBlue}</p>
    <p>🛒 Inflación: Mensual ${data.resumenDiario.inflacion.mensual}</p>
    <p>🏭 Producción industrial (ayer): ${data.resumenDiario.produccionIndustrial}</p>
    <p>📉 PBI actual: ${data.resumenDiario.pbiActual} | Potencial: ${data.resumenDiario.pbiPotencial}</p>
    <p>💵 Reservas internacionales: ${data.resumenDiario.reservas}</p>
    <p>🏛️ Balance fiscal diario: ${data.resumenDiario.balanceFiscal}</p>
  `);

  seccion("datos-monetarios", `
    <h2 class="titulo-seccion">💹 Datos Monetarios</h2>
    <p>💰 Tasa BCRA: ${data.datosMonetarios.tasaInteres}</p>
    <p>🪙 Emisión de dinero: ${data.datosMonetarios.emision}</p>
    <p>📊 Oferta vs. Demanda de dinero: ${data.datosMonetarios.ofertaDemanda}</p>
    <p>🧯 Índice de Tensión Monetaria: ${data.datosMonetarios.tensionMonetaria}</p>
    <p>🔄 Intervención cambiaria: ${data.datosMonetarios.intervencion}</p>
  `);

  seccion("consumo-precios", `
    <h2 class="titulo-seccion">📦 Consumo y Precios</h2>
    <p>🏷️ Precios: Canasta ${data.consumoPrecios.precios.canasta} | Nafta ${data.consumoPrecios.precios.nafta} | Transporte ${data.consumoPrecios.precios.transporte} | Alquiler ${data.consumoPrecios.precios.alquiler}</p>
    <p>📉 Variación intermensual por sector: Alimentos ${data.consumoPrecios.variacionSectorial.alimentos}, Textil ${data.consumoPrecios.variacionSectorial.textil}, Construcción ${data.consumoPrecios.variacionSectorial.construccion}</p>
  `);

  

  seccion("comercio-relaciones", `
    <h2 class="titulo-seccion">🌍 Comercio Exterior y Relaciones</h2>
    <p>🚢 Exportaciones: ${data.comercioExterior.exportaciones} | Importaciones: ${data.comercioExterior.importaciones}</p>
    <p>💬 ${data.comercioExterior.tratados}</p>
    <p>📦 Más exportados: ${data.comercioExterior.productos.exportados.join(", ")} | Más importados: ${data.comercioExterior.productos.importados.join(", ")}</p>
  `);

  seccion("empleo-sociedad", `
    <h2 class="titulo-seccion">👥 Empleo y Sociedad</h2>
    <p>👩‍💼 Empleo: ${data.empleoSociedad.empleo} | Desempleo: ${data.empleoSociedad.desempleo}</p>
    <p>🧾 Censo 2025: ${data.empleoSociedad.censo}</p>
    <p>💼 Convocatorias: ${data.empleoSociedad.convocatorias}</p>
    <p>📚 Cursos estratégicos: ${data.empleoSociedad.cursos.join(", ")}</p>
  `);

  seccion("notificaciones", `
    <h2 class="titulo-seccion">🔔 Notificaciones</h2>
    ${data.notificaciones.map(n => `<p>${n}</p>`).join("")}
  `);

  seccion("herramientas", `
    <h2 class="titulo-seccion">🧰 Herramientas</h2>
    ${data.herramientas.map(h => `<p>${h}</p>`).join("")}
  `);

  seccion("comunicados", `
    <h2 class="titulo-seccion">📢 Comunicados Oficiales</h2>
    <p>📰 Resumen: ${data.comunicados.resumen}</p>
    <p>🎙️ Conferencia: ${data.comunicados.conferencia}</p>
    <p>📅 Próximo evento: ${data.comunicados.evento}</p>
  `);
  const container = document.getElementById("datos-monetarios");

const div = document.createElement("div");
div.className = "finanzas-argy";

div.innerHTML = `
  <h2>Finanzas Argy</h2>
  <table>
    <thead>
      <tr><th>Fecha</th><th>Dólar Oficial</th></tr>
    </thead>
    <tbody>
      ${cotizaciones.map(c => `<tr><td>${c.fecha}</td><td>${c.valor}</td></tr>`).join("")}
    </tbody>
  </table>
`;

container.appendChild(div);
});
