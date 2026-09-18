import type { Formula } from "@/lib/types/product";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface GuaranteeTableProps {
  formulas: Formula[];
  productSlug: string;
}

export function GuaranteeTable({ formulas, productSlug }: GuaranteeTableProps) {
  const allGuarantees = Array.from(
    new Set(formulas.flatMap((f) => f.guarantees.map((g) => g.name)))
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px]">
        <thead>
          <tr className="border-b border-brand-surface-alt">
            <th className="py-4 px-4 text-left text-sm font-semibold text-brand-text">Garanties</th>
            {formulas.map((formula) => (
              <th key={formula.id} className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  {formula.popular && <Badge variant="accent">Populaire</Badge>}
                  <span className="text-sm font-semibold text-brand-text">{formula.name}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allGuarantees.map((guaranteeName) => (
            <tr key={guaranteeName} className="border-b border-brand-surface-alt last:border-0">
              <td className="py-3 px-4 text-sm text-brand-text">{guaranteeName}</td>
              {formulas.map((formula) => {
                const guarantee = formula.guarantees.find((g) => g.name === guaranteeName);
                const isIncluded = guarantee?.included ?? false;
                return (
                  <td key={formula.id} className="py-3 px-4 text-center">
                    {isIncluded ? (
                      <Check className="h-5 w-5 text-brand-secondary mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-brand-text-muted/40 mx-auto" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
          <tr className="border-t border-brand-surface-alt">
            <td className="py-4 px-4" />
            {formulas.map((formula) => (
              <td key={formula.id} className="py-4 px-4 text-center">
                {formula.price && (
                  <div className="text-sm text-brand-text-muted mb-2">
                    À partir de{" "}
                    <span className="font-bold text-brand-primary text-lg">{formula.price}€</span>/mois
                  </div>
                )}
                <Link href={`/devis-${productSlug}`}>
                  <Button variant={formula.popular ? "primary" : "outline"} size="sm">
                    Choisir
                  </Button>
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
