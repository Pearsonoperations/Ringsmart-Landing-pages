import Image from "next/image";

export function AppStoreBadge() {
  return (
    <a href="#" className="inline-flex items-center transition-opacity hover:opacity-80">
      <Image
        src="/images/app-store-badge.png"
        alt="Download on the App Store"
        width={565}
        height={168}
        className="h-[50px] w-auto"
      />
    </a>
  );
}

export function GooglePlayBadge() {
  return (
    <a href="#" className="inline-flex items-center transition-opacity hover:opacity-80">
      <Image
        src="/images/google-play-badge.png"
        alt="Get it on Google Play"
        width={565}
        height={169}
        className="h-[50px] w-auto"
      />
    </a>
  );
}
