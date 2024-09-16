type Row = {
  id: string;
  key: string;
  value: string;
};

type Props = {
  rows: Row[];
};

export default function PricingTable({ rows }: Props) {
  return (
    <div className="mt-auto w-full border-t border-white/10 bg-white/10 p-4 sm:p-6">
      <table className="mt-auto w-full">
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="align-top">{row.key}</td>
              <td className="whitespace-nowrap text-right align-top font-medium text-white">
                {row.value} CHF
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
