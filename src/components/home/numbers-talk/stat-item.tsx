// components/StatItem.tsx
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface StatItemProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export const StatItem = ({
  value,
  label,
  prefix = "",
  suffix = "",
  duration = 2,
}: StatItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (inView) {
      setStart(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="p-6 rounded-lg w-full sm:w-[220px] flex flex-col items-center gap-2"
    >
      <div className="text-[#ffb700] text-[36px] font-bold">
        {start && (
          <CountUp
            end={value}
            duration={duration}
            prefix={prefix}
            suffix={suffix}
          />
        )}
      </div>
      <div className="text-[#ffb700] text-[16px] font-medium text-center uppercase">
        {label}
      </div>
    </div>
  );
};
