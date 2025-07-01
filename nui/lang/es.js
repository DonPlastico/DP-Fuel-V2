if (Lang == undefined) {
    var Lang = [];
}
Lang["es"] = {
    pumpInterface: {
        stationStock: "{0} L",
        vehicleFuel: "{0} L",
        confirm: "ACEPTAR",
        vehicleFuelTooltip: "Tu combustile / Capacidad del tanque",
        fuelTypes: {
            regular: "Sin plomo",
            plus: "Plus",
            premium: "Premium",
            diesel: "Diésel",
        },
    },
    pumpRefuelDisplay: {
        liters: "L",
        carTank: "Depósito del coche",
        remaining: "Restante",
    },
    confirmRefuelModal: {
        title: "Confirmar Repostaje",
        description: "Estás comprando {0}L de combustible {1} por {2}.",
        paymentBank: "Pagar con el banco",
        paymentCash: "Pagar en efectivo",
    },
    confirmBuyJerryCanModal: {
        title: "Confirmar Compra",
        paymentBank: "Pagar con el banco",
        paymentCash: "Pagar en efectivo",
    },
    confirmFuelChangeModal: {
        title: "No se pueden mezclar combustibles",
        description: "⚠️ Para cambiar el tipo de combustible en tu vehículo, el depósito se vaciará.",
    },
    electricInterface: {
        chargerType: {
            title: "TIPO DE CARGADOR",
            normal: {
                title: "CARGA NORMAL",
                power: "100 kW",
            },
            fast: {
                title: "CARGA RÁPIDA",
                power: "220 kW",
            },
            pricePerKWh: "{0} / kWh",
        },
        chargerAmount: {
            title: "SELECCIONAR CANTIDAD",
            typeSelected: "Has seleccionado '{0}'",
            placeholder: "Cantidad",
            timeToRechargeText: "Tiempo de carga estimado:",
            timeToRechargeValue: "{0} min {1} seg",
        },
        chargerPayment: {
            title: "MÉTODO DE PAGO",
            money: "EFECTIVO",
            bank: "BANCO",
            payButton: "PAGAR {0}",
        },
        continueButton: "ACEPTAR",
        outOfStock: "Sin stock",
    },
    rechargerDisplay: {
        title: "CARGANDO...",
        remainingTimeText: "TIEMPO RESTANTE",
        remainingTimeValue: "{0} min {1} seg",
    },
    fuelConsumptionChart: {
        title: "Gráfico de consumo de combustible",
        chartLabels: {
            fuel: "Combustible (%)",
            speed: "Velocidad (km/h)",
            consumption: "Consumo (L/s)",
            shortSeconds: "{0}s",
        },
        footer: {
            focus: "F3 para alternar enfoque",
            toggleRecording: "Alternar grabación",
            recordsLength: "Duración del historial ({0}s)",
        },
    },
};
