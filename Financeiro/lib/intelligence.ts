import Decimal from "decimal.js";

export const BENCHMARKS = {
  IPCA_ANUAL: 4.83,
  CESTA_BASICA_SP: 762.30,
  SUBSCRIPTION_BENCHMARKS: {
    netflix: { price: 20.90, annual_discount: 0.15, alt: "Mubi — R$ 19,90" },
    spotify: { price: 11.90, annual_discount: 0.20, alt: "Deezer — R$ 9,90" },
  }
};

export function generateInsights(transactions: any[]) {
    // Lógica para comparar gastos com o IPCA e sugerir economias reais
}