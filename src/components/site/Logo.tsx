import logoAsset from "@/assets/aspire-logo.png.asset.json";

export function Logo({
  className = "h-10 w-auto",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <img
      src={logoAsset.url}
      alt="Aspire Removals & Transport"
      className={className}
      style={invert ? { filter: "brightness(0) invert(1)" } : undefined}
      width={320}
      height={96}
      decoding="async"
    />
  );
}
