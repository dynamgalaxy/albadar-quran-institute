import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";

export default function Logo({ inverse = false, light = false, header = false }: { inverse?: boolean; light?: boolean; header?: boolean }) {
  return <Link className={`logo ${inverse ? "logo-inverse" : ""} ${header ? "logo-header" : ""}`} href="/" aria-label={`${site.name} home`}>
    <Image src="/assets/albadar-logo.png" alt="" width={882} height={307} priority className={header ? "logo-header-image" : "logo-image"} />
  </Link>;
}
