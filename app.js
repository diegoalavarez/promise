// Función para determinar el estado del pedido
const estatusPedido = () => Math.random() < 0.8;

// Función para simular la preparación de un platillo
const prepararPlatillo = (nombre, tiempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (estatusPedido()) {
                console.log(`${nombre} está listo para ser entregado.`);
                resolve(`${nombre} entregado con éxito.`);
            } else {
                reject(`Error en la preparación del ${nombre}.`);
            }
        }, tiempo);
    });
};

// Secuencia: bebida -> pizza -> postre
const simularEntregaOrden = () => {
    console.log("Inicio de la secuencia de entrega...");

    prepararPlatillo("Bebida", 2000)
        .then((mensaje) => {
            console.log(`📦 ${mensaje}`);
            return prepararPlatillo("Pizza", 5000);
        })
        .then((mensaje) => {
            console.log(`📦 ${mensaje}`);
            return prepararPlatillo("Postre", 3000);
        })
        .then((mensaje) => {
            console.log(`📦 ${mensaje}`);
            console.log("✅ ¡Orden completa ha sido entregada!");
        })
        .catch((error) => {
            console.error(`⚠️ ${error}`);
            console.log("❌ La orden no pudo completarse. Por favor, intente nuevamente.");
        })
        .finally(() => {
            console.log("Fin del proceso de pedido.");
        });
};

// Iniciar la simulación
simularEntregaOrden();