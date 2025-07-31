// app.js

document.addEventListener("DOMContentLoaded", () => {
  const data = {
    resumenDiario: {
      cambioOficial: "$36,65",
      cambioBlue: "$25",
      inflacion: {
        diaria: "0.52%",
        mensual: "9.14%",
        anual: "2.361%"
      },
      produccionIndustrial: "-57.97%",
      pbiActual: "$177.547M",
      pbiPotencial: "$300.000M",
      reservas: "US$ 510.000M",
      balanceFiscal: "-$90.7 Mil Millones",
      finAcuerdoDias: 31
    },
    datosMonetarios: {
      tasaInteres: "110%",
      emision: "$0",
      ofertaDemanda: "Equilibrada",
      tensionMonetaria: "3.0/10",
      intervencion: "No hubo"
    },
    consumoPrecios: {
      precios: {
        canasta: "$10.000",
        nafta: "$13,66/litro",
        transporte: "$125",
        alquiler: "$1.522,08"
      },
      variacionSectorial: {
        alimentos: "-0.6%",
        textil: "0.0%",
        construccion: "0.0%"
      }
    },
    comercioExterior: {
      exportaciones: "US$ 28.951M",
      importaciones: "US$ 201M",
      tratados: "El Gobierno negocia con Argentina, Brasil y Chile.",
      productos: {
        exportados: ["Joyas", "Automoviles", "Whisky"],
        importados: ["Tecnologia", "Materia Prima"]
      },
      fmi: "US$ 0M / US$ 5.000M"
    },
    empleoSociedad: {
      empleo: "88.14%",
      desempleo: "11.86%",
      censo: "5.3M hab.",
      convocatorias: "Vacantes en salud y educación",
      cursos: ["Hidrógeno Verde", "Logística", "Programación"]
    },
    notificaciones: [
      "⚠️ El BCRA Establecio nuevas bandas en la 'flotacion sucia'"
    ],
    herramientas: [
      "🔄PROXIMAMENTE "
    ],
    comunicados: {
      resumen: "Se unifica tipo de cambio",
      conferencia: "Julieta Medina – 'Vamos por la estabilización definitiva'",
      evento: "Licitación de deuda – 1 de junio"
    }
  };

  const seccion = (id, html) => {
    document.getElementById(id).innerHTML = html;
  };

  seccion("resumen-diario", `
    <h2 class="titulo-seccion">📱 Resumen Diario</h2>
    <p>📈 Tipo de cambio oficial: ${data.resumenDiario.cambioOficial} | Blue: ${data.resumenDiario.cambioBlue}</p>
    <p>🛒 Inflación: Diaria ${data.resumenDiario.inflacion.diaria} | Mensual ${data.resumenDiario.inflacion.mensual} | Anualizada ${data.resumenDiario.inflacion.anual}</p>
    <p>🏭 Producción industrial (ayer): ${data.resumenDiario.produccionIndustrial}</p>
    <p>📉 PBI actual: ${data.resumenDiario.pbiActual} | Potencial: ${data.resumenDiario.pbiPotencial}</p>
    <p>💵 Reservas internacionales: ${data.resumenDiario.reservas}</p>
    <p>🏛️ Balance fiscal diario: ${data.resumenDiario.balanceFiscal}</p>
    <p>⏳ Fin del acuerdo "Inflación 0%": ${data.resumenDiario.finAcuerdoDias} días</p>
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
    <p>🏦 FMI (usado/total): ${data.comercioExterior.fmi}</p>
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
});
