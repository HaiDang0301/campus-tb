import { LeftItem } from "./left-item-sction";
import { ListProductSection } from "./list-product";

export const SaleProductSection = () => {
  return (
    <div className="mt-[32px] px-[100px] flex flex-col gap-[32px]">
      <div className="flex gap-[24px]">
        <LeftItem
          {...{
            title: "Song chắn rác composite",
            description: "Uy tín chất lượng",
            color: "green",
          }}
        />
        <ListProductSection />
      </div>
      <div className="flex gap-[24px]">
        <LeftItem
          {...{
            title: "Song chắn rác composite",
            description: "Uy tín chất lượng",
            color: "blue",
          }}
        />
        <ListProductSection />
      </div>
    </div>
  );
};
