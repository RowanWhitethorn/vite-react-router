

function FaqCard() {
  return (
    <div className="faq-component">
      <h2>Preguntas frecuentes</h2>
      <ol className="faq-item">
        <section>
          <h3>Envíos Aéreos</h3>

          <li>
            <h4>¿Cuáles son los días de salida para los envíos aéreos?</h4>
            <p>
              Los días de salida son variables. Una vez que su envío llega, se
              le informará la fecha de la próxima salida y el tiempo estimado de
              llegada a su destino.
            </p>
          </li>

          <li>
            <h4>
              ¿Cuáles son los tiempos de entrega para las provincias Habana y
              Artemisa?
            </h4>
            <p>
              Para estas provincias, el tiempo de entrega es de 3 a 5 días
              después de la fecha de salida.
            </p>
          </li>

          <li>
            <h4>¿Y para el resto de las provincias?</h4>
            <p>
              Para el resto de las provincias, el tiempo de entrega es de 7 a 15
              días. Cualquier variación en estos tiempos se le informará
              oportunamente.
            </p>
          </li>
        </section>

        <section>
          <h3>Trámites Migratorios</h3>

          <li>
            <h4>¿Cuánto tiempo puede durar mi proceso migratorio?</h4>
            <p>
              Independientemente del proceso, formulario o solicitud, los
              tiempos pueden variar dentro del plazo estimado que le
              proporcionamos.
            </p>
          </li>

          <li>
            <h4>¿Cómo puedo seguir el estado de mi proceso con USCIS?</h4>
            <p>
              Los trámites realizados con USCIS proporcionarán un código de
              recibo que puede rastrear mediante la aplicación Case Tracker o en
              la web{" "}
              <a href="https://egov.uscis.gov/">https://egov.uscis.gov/</a>.
            </p>
          </li>

          <li>
            <h4>
              ¿Qué hago si ha pasado mucho tiempo y no he tenido una respuesta?
            </h4>
            <p>
              Si necesita más información sobre su trámite más allá de la
              asistencia brindada por la agencia, puede llamar directamente al
              número de atención al cliente de USCIS para obtener información
              más concreta sobre su proceso.
            </p>
            <p>
              Recuerde que garantizamos un trabajo correctamente realizado, pero
              no un tiempo específico o un resultado en su proceso. Una vez que
              cualquier solicitud o formulario está en manos de las autoridades
              migratorias o gubernamentales, los tiempos y resultados pueden
              variar.
            </p>
          </li>
        </section>

        <section>
          <h3>Importante</h3>
          <p>
            Recuerde que garantizamos un trabajo correctamente realizado, pero
            no un tiempo o un resultado en su proceso una vez cualquier tipo de
            solicitud o formulario está en manos de las autoridades migratorias
            o gubernamentales.
          </p>
        </section>
      </ol>
    </div>
  );
}
export default FaqCard;
