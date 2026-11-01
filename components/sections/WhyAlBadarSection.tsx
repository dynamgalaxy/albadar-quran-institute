import GridSection from "./GridSection";
import ValueCard from "@/components/cards/ValueCard";
import type { SectionIntroProps, Value } from "@/types/common";

export interface WhyAlBadarSectionProps extends SectionIntroProps { items: Value[] }
export default function WhyAlBadarSection({ items, ...intro }: WhyAlBadarSectionProps) {
  return <GridSection {...intro} empty={!items.length}>{items.map(item => <ValueCard key={item.id} value={item} />)}</GridSection>;
}
