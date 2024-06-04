type Props = {
  prices: (number | null)[];
};

type Row = {
  price: number;
  label: string;
};

const LABELS = [
  "Kleinwagen & 2-Sitzer",
  "Mittelklasse & Sportwagen",
  "Oberklasse & Kombis",
  "SUVs & große Limousinen",
  "Nutzfahrzeuge, Vans & Pick-Ups",
  "Zuschlag bei stark verschmutzten Fahrzeugen",
] as const;

export default function PricingTable({ prices }: Props) {
  let rows = prices
    .map((price, index) => {
      if (price === null) {
        return null;
      }

      return {
        price,
        label: LABELS[index],
      };
    })
    .filter(Boolean) as Row[];

  return (
    <div className="mt-auto w-full border-t border-white/10 bg-white/10 p-4 sm:p-6">
      <table className="mt-auto w-full">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td className="align-top">{row.label}</td>
              <td className="whitespace-nowrap text-right align-top font-medium text-white">
                {row.price} CHF
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
