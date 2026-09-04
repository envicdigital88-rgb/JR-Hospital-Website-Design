import React from "react";
import { ActivityIcon, CarIcon, ClockIcon, EyeIcon, FlaskConicalIcon, HeartHandshakeIcon, PillIcon, ScanLineIcon, SirenIcon, StethoscopeIcon, SyringeIcon, WavesIcon, type LucideIcon } from "lucide-react";
const registry: Record<string, LucideIcon> = {
  activity: ActivityIcon,
  car: CarIcon,
  clock: ClockIcon,
  eye: EyeIcon,
  flask: FlaskConicalIcon,
  'heart-handshake': HeartHandshakeIcon,
  pill: PillIcon,
  scan: ScanLineIcon,
  siren: SirenIcon,
  stethoscope: StethoscopeIcon,
  syringe: SyringeIcon,
  waves: WavesIcon
};
interface IconProps {
  name: string;
  className?: string;
}
export function Icon({
  name,
  className
}: IconProps) {
  const Component = registry[name] ?? StethoscopeIcon;
  return <Component className={className} aria-hidden="true" />;
}
